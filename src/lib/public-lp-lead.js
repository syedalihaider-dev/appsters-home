import { NextResponse } from 'next/server';
import { createSmtpTransport, getSmtpFrom } from '@/lib/smtp';

const RECIPIENTS =
  'support@appsters.io, zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, ali.haider@canvasdigital.org';
const TRACKING_FIELDS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid', 'landing', 'referrer',
];

function clean(value, maxLength = 500) {
  return String(value ?? '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char]);
}

async function readRequestData(req) {
  const contentType = req.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return req.json();
  if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries((await req.formData()).entries());
  }
  const raw = await req.text();
  try {
    return JSON.parse(raw);
  } catch {
    return Object.fromEntries(new URLSearchParams(raw).entries());
  }
}

export function createPublicLpLeadHandler({ slug, title, fieldLabel }) {
  return async function POST(req) {
    try {
      const data = await readRequestData(req);
      const lead = {
        name: clean(data.name, 100),
        email: clean(data.email, 150),
        phone: clean(data.phone, 40),
        selectedType: clean(data.app_type, 100),
        message: clean(data.message, 2000),
        formId: clean(data.form_id, 40),
        cta: clean(data.cta, 60),
        pageUrl: clean(data.page_url, 500),
      };

      if (lead.name.length < 2) {
        return NextResponse.json({ ok: false, message: 'Enter your full name.' }, { status: 422 });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) {
        return NextResponse.json({ ok: false, message: 'Enter a valid email address.' }, { status: 422 });
      }
      if ((lead.phone.match(/\d/g) || []).length < 7) {
        return NextResponse.json({ ok: false, message: 'Enter a phone number with at least 7 digits.' }, { status: 422 });
      }
      if (!lead.selectedType) {
        return NextResponse.json({ ok: false, message: `Choose an option for ${fieldLabel.toLowerCase()}.` }, { status: 422 });
      }
      if (lead.message.length < 10) {
        return NextResponse.json({ ok: false, message: 'Add a short description of your project (at least 10 characters).' }, { status: 422 });
      }

      const ip = req.headers.get('cf-connecting-ip') ||
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        req.headers.get('x-real-ip') || '127.0.0.1';
      const tracking = TRACKING_FIELDS
        .map((key) => [key, clean(data[key], 500)])
        .filter(([, value]) => value);
      const details = [
        ['Name', lead.name], ['Email', lead.email], ['Phone', lead.phone],
        [fieldLabel, lead.selectedType], ['Project Details', lead.message],
        ['Form ID', lead.formId], ['CTA', lead.cta || '-'],
        ['Page URL', lead.pageUrl || `https://www.appsters.io/${slug}`],
        ['IP Address', ip], ...tracking,
      ];
      const htmlRows = details.map(([label, value]) =>
        `<tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`
      ).join('');

      try {
        const transporter = createSmtpTransport();
        await transporter.sendMail({
          from: `"Appsters ${title} LP" <${getSmtpFrom()}>`,
          to: RECIPIENTS,
          replyTo: { address: lead.email, name: lead.name },
          subject: `New lead: ${title} LP - ${lead.name}`,
          text: details.map(([label, value]) => `${label}: ${value}`).join('\n'),
          html: `<h2>New ${escapeHtml(title)} lead</h2><table style="border-collapse:collapse">${htmlRows}</table>`,
        });
      } catch (smtpError) {
        console.error(`SMTP send failed (${slug}):`, {
          code: smtpError.code,
          message: smtpError.message,
          command: smtpError.command,
          responseCode: smtpError.responseCode,
        });
        return NextResponse.json({
          ok: false,
          code: smtpError.code || 'SMTP_SEND_FAILED',
          message: 'Your form was received, but the lead email could not be sent. Please call +1 (855) 799 1171.',
        }, { status: 502 });
      }

      return NextResponse.json({ ok: true, message: 'Thanks. We received your details.' });
    } catch (error) {
      console.error(`Error handling ${slug} lead:`, { code: error.code, message: error.message });
      return NextResponse.json({
        ok: false,
        code: error.code || 'LEAD_SUBMISSION_FAILED',
        message: 'We could not process your details. Please reload the page and try again.',
      }, { status: 500 });
    }
  };
}
