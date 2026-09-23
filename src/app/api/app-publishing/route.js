import { NextResponse } from 'next/server';
import { createSmtpTransport, getSmtpFrom } from '@/lib/smtp';

export async function POST(req) {
  try {
    let data = {};
    const contentType = req.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      data = await req.json();
    } else if (contentType.includes('multipart/form-data') || contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        data[key] = value;
      });
    } else {
      const rawText = await req.text();
      try {
        data = JSON.parse(rawText);
      } catch {
        const params = new URLSearchParams(rawText);
        params.forEach((value, key) => {
          data[key] = value;
        });
      }
    }

    const {
      name,
      email,
      phone,
      app_type,
      message,
      website,
      form_id,
      page_url,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
      gbraid,
      wbraid,
      fbclid,
      msclkid,
      landing,
      referrer,
    } = data;

    // Honeypot check
    if (website) {
      return NextResponse.json({ ok: true, message: 'Thanks.' }, { status: 200 });
    }

    // IP Address tracking
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
               req.headers.get('x-real-ip') ||
               req.headers.get('cf-connecting-ip') ||
               '127.0.0.1';

    let locationSummary = 'N/A';
    if (ip === '::1' || ip === '127.0.0.1') {
      locationSummary = 'Localhost Development Environment';
    } else if (!ip.startsWith('192.168.')) {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`, { signal: AbortSignal.timeout(3000) });
        const geoData = await geoRes.json();
        if (geoData.status === 'success') {
          locationSummary = `${geoData.city}, ${geoData.regionName}, ${geoData.country}`;
        }
      } catch (e) {
        console.error('Geo lookup error:', e);
      }
    }

    const recipients = 'support@appsters.io, zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, ali.haider@canvasdigital.org';

    try {
      const transporter = createSmtpTransport();
      const mailOptions = {
        from: `"Appsters App Publishing" <${getSmtpFrom()}>`,
        to: recipients,
        subject: `New Lead: App Publishing LP (${name || 'Unknown'})`,
        html: `
          <h3>New Lead Details (App Publishing):</h3>
          <p><strong>Name:</strong> ${name || 'N/A'}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>App Type:</strong> ${app_type || 'N/A'}</p>
          <p><strong>Message:</strong><br>${(message || 'N/A').replace(/\n/g, '<br>')}</p>
          <br>
          <hr>
          <h3>Form & Campaign Details:</h3>
          <p><strong>Form ID:</strong> ${form_id || 'N/A'}</p>
          <p><strong>Page URL:</strong> ${page_url || 'https://www.appsters.io/app-publishing'}</p>
          <p><strong>Landing Page:</strong> ${landing || 'N/A'}</p>
          <p><strong>Referrer:</strong> ${referrer || 'N/A'}</p>
          <p><strong>UTM Source:</strong> ${utm_source || 'N/A'}</p>
          <p><strong>UTM Medium:</strong> ${utm_medium || 'N/A'}</p>
          <p><strong>UTM Campaign:</strong> ${utm_campaign || 'N/A'}</p>
          <p><strong>UTM Term:</strong> ${utm_term || 'N/A'}</p>
          <p><strong>UTM Content:</strong> ${utm_content || 'N/A'}</p>
          <p><strong>Google Click ID (gclid):</strong> ${gclid || 'N/A'}</p>
          <p><strong>IP Address:</strong> ${ip}</p>
          <p><strong>Location:</strong> ${locationSummary}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (smtpErr) {
      console.warn('SMTP Send Warning (App Publishing):', smtpErr.message);
      // In development or if SMTP is misconfigured, return ok: true so the lead flow doesn't break for visitors
    }

    return NextResponse.json({ ok: true, message: 'Your message has been sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error handling app-publishing lead:', error);
    return NextResponse.json(
      { ok: false, message: 'Failed to process lead.' },
      { status: 500 }
    );
  }
}
