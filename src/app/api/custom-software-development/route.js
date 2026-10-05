import { NextResponse } from 'next/server';
import { createSmtpTransport, getSmtpFrom } from '@/lib/smtp';

const DEFAULT_RECIPIENTS =
  'support@appsters.io, zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, ali.haider@canvasdigital.org';

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

  if (contentType.includes('application/json')) {
    return req.json();
  }

  if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await req.formData();
    return Object.fromEntries(formData.entries());
  }

  const rawText = await req.text();
  try {
    return JSON.parse(rawText);
  } catch {
    return Object.fromEntries(new URLSearchParams(rawText).entries());
  }
}

export async function POST(req) {
  try {
    const data = await readRequestData(req);

    // Match the App Publishing form's honeypot behavior.
    if (clean(data.website, 200)) {
      return NextResponse.json({ ok: true, message: 'Thanks.' });
    }

    const lead = {
      name: clean(data.name, 100),
      email: clean(data.email, 150),
      phone: clean(data.phone, 40),
      softwareType: clean(data.app_type, 100),
      message: clean(data.message, 2000),
      formId: clean(data.form_id, 40),
      cta: clean(data.cta, 60),
      pageUrl: clean(data.page_url, 500),
    };

    if (lead.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email) ||
        (lead.phone.match(/\d/g) || []).length < 7 || !lead.softwareType || lead.message.length < 10) {
      return NextResponse.json(
        { ok: false, message: 'Please complete all required fields with valid details.' },
        { status: 422 },
      );
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') || req.headers.get('cf-connecting-ip') || '127.0.0.1';
    let location = ip === '::1' || ip === '127.0.0.1' ? 'Localhost Development Environment' : 'N/A';

    if (location === 'N/A' && !ip.startsWith('192.168.')) {
      try {
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}`, {
          signal: AbortSignal.timeout(3000),
        });
        const geoData = await geoResponse.json();
        if (geoData.status === 'success') {
          location = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
        }
      } catch (error) {
        console.warn('Geo lookup warning (Custom Software Development):', error.message);
      }
    }

    const trackingFields = [
      'landing', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign',
      'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid',
    ];
    const tracking = trackingFields
      .map((field) => [field, clean(data[field], 500)])
      .filter(([, value]) => value);
    const details = [
      ['Name', lead.name], ['Email', lead.email], ['Phone', lead.phone],
      ['Software Type', lead.softwareType], ['Project Details', lead.message],
      ['Form ID', lead.formId], ['CTA', lead.cta],
      ['Page URL', lead.pageUrl || 'https://www.appsters.io/custom-software-development'],
      ['IP Address', ip], ['Location', location], ...tracking,
    ];
    const htmlRows = details.map(([label, value]) =>
      `<tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`
    ).join('');

    // As on the reference LP, an SMTP problem is logged server-side while the
    // visitor's form flow remains available. Configure SMTP to receive the lead.
    try {
      const transporter = createSmtpTransport();
      await transporter.sendMail({
        from: `"Appsters Custom Software Development" <${getSmtpFrom()}>`,
        to: process.env.SMTP_TO || DEFAULT_RECIPIENTS,
        replyTo: { address: lead.email, name: lead.name },
        subject: `New Lead: Custom Software Development LP (${lead.name})`,
        text: details.map(([label, value]) => `${label}: ${value}`).join('\n'),
        html: `<h3>New Lead Details (Custom Software Development):</h3><table style="border-collapse:collapse">${htmlRows}</table>`,
      });
    } catch (smtpError) {
      console.warn('SMTP Send Warning (Custom Software Development):', smtpError.message);
      return NextResponse.json(
        { ok: false, message: 'We could not deliver your details right now. Please try again or call us.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Error handling custom software development lead:', error);
    return NextResponse.json(
      { ok: false, message: 'Failed to process lead.' },
      { status: 500 },
    );
  }
}
