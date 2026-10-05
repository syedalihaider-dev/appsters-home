import { NextResponse } from 'next/server';
import { createSmtpTransport, getSmtpFrom } from '@/lib/smtp';

const TRACKING_FIELDS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid', 'landing', 'referrer',
];
const LEAD_RECIPIENTS =
  'support@appsters.io, zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, ali.haider@canvasdigital.org ,muhammad.nadeem@canvasdigital.net';

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

export async function POST(req) {
  try {
    const formData = await req.formData();
    const field = (key, limit) => clean(formData.get(key), limit);

    const lead = {
      name: field('name', 100),
      email: field('email', 150),
      phone: field('phone', 25),
      developerType: field('app_type', 100),
      message: field('message', 2000),
      formId: field('form_id', 40),
      cta: field('cta', 60),
      pageUrl: field('page_url', 500),
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
    if (!lead.developerType) {
      return NextResponse.json({ ok: false, message: 'Choose the developer type you need.' }, { status: 422 });
    }
    if (lead.message.length < 10) {
      return NextResponse.json({ ok: false, message: 'Add a short description of your project.' }, { status: 422 });
    }

    const ip = req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') || '127.0.0.1';
    const details = [
      ['Name', lead.name],
      ['Email', lead.email],
      ['Phone', lead.phone],
      ['Developer Needed', lead.developerType],
      ['Project Details', lead.message],
      ['Form ID', lead.formId],
      ['Opened by', lead.cta || '-'],
      ['Page URL', lead.pageUrl || 'https://www.appsters.io/hire-mobile-developer'],
      ['IP Address', ip],
      ...TRACKING_FIELDS.map((key) => [key, field(key, 500)]).filter(([, value]) => value),
    ];
    const htmlRows = details.map(([label, value]) =>
      `<tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`
    ).join('');

    try {
      const transporter = createSmtpTransport();
      await transporter.sendMail({
        from: `"Appsters Hire Mobile Developer LP" <${getSmtpFrom()}>`,
        to: LEAD_RECIPIENTS,
        replyTo: { address: lead.email, name: lead.name },
        subject: `New lead: Hire Mobile Developer LP - ${lead.name} (${lead.developerType})`,
        text: details.map(([label, value]) => `${label}: ${value}`).join('\n'),
        html: `<h2>New Hire Mobile Developer lead</h2><table style="border-collapse:collapse">${htmlRows}</table>`,
      });
    } catch (smtpError) {
      console.error('SMTP Send Warning (Hire Mobile Developer):', {
        code: smtpError.code,
        message: smtpError.message,
        command: smtpError.command,
        responseCode: smtpError.responseCode,
      });
      return NextResponse.json(
        {
          ok: false,
          code: smtpError.code || 'SMTP_SEND_FAILED',
          message: 'Your form was received, but the lead email could not be sent. Please call +1 (855) 799 1171.',
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: 'Thanks. We received your details.' });
  } catch (error) {
    console.error('Error handling hire mobile developer lead:', {
      code: error.code,
      message: error.message,
    });
    return NextResponse.json(
      {
        ok: false,
        code: error.code || 'LEAD_SUBMISSION_FAILED',
        message: 'We could not process your details. Please reload the page and try again.',
      },
      { status: 500 },
    );
  }
}
