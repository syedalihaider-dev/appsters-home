import { NextResponse } from 'next/server';
import { createSmtpTransport, getSmtpFrom } from '@/lib/smtp';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, countryCode, app_type, message, form_id, page_url, utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, gbraid, wbraid, fbclid, msclkid, landing, referrer } = body;

        // Get IP Address from headers for tracking
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                   req.headers.get('x-real-ip') || 
                   req.headers.get('cf-connecting-ip') || 
                   '127.0.0.1';

        // Try to get location info
        let detectedCountry = '';
        let detectedState = '';
        let detectedCity = '';
        let locationSummary = '';

        if (ip === '::1' || ip === '127.0.0.1') {
            detectedCountry = 'Localhost';
            detectedState = 'Development';
            detectedCity = 'Local';
            locationSummary = 'Local Development Environment';
        } else if (ip && !ip.startsWith('192.168.')) {
            try {
                const geoRes = await fetch(`http://ip-api.com/json/${ip}`, { signal: AbortSignal.timeout(3000) });
                const geoData = await geoRes.json();
                if (geoData.status === 'success') {
                    detectedCountry = geoData.country;
                    detectedState = geoData.regionName;
                    detectedCity = geoData.city;
                    locationSummary = `${detectedCity}, ${detectedState}, ${detectedCountry}`;
                } else {
                    locationSummary = `Geo Lookup Failed: ${geoData.message || 'Unknown'}`;
                }
            } catch (e) {
                console.error("Geo lookup failed", e);
                locationSummary = 'Geo Lookup Error';
            }
        }

        const transporter = createSmtpTransport();
        const recipients = 'support@appsters.io, zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, ali.haider@canvasdigital.org';

        const mailOptions = {
            from: `"Appsters - LP" <${getSmtpFrom()}>`,
            to: recipients,
            subject: `New LP Lead: App Development Company (${name || 'Unknown'})`,
            html: `
                <h3>New Lead Details (App Development Company LP):</h3>
                <p><strong>Name:</strong> ${name || 'N/A'}</p>
                <p><strong>Email:</strong> ${email || 'N/A'}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Selected Country Code:</strong> ${countryCode || 'N/A'}</p>
                <p><strong>App Type:</strong> ${app_type || 'N/A'}</p>
                <p><strong>Message:</strong><br>${(message || 'N/A').replace(/\n/g, '<br>')}</p>
                <br>
                <hr>
                <h3>Form & Campaign Details:</h3>
                <p><strong>Form ID:</strong> ${form_id || 'N/A'}</p>
                <p><strong>Page URL:</strong> ${page_url || 'N/A'}</p>
                <p><strong>Landing Page:</strong> ${landing || 'N/A'}</p>
                <p><strong>Referrer:</strong> ${referrer || 'N/A'}</p>
                <p><strong>UTM Source:</strong> ${utm_source || 'N/A'}</p>
                <p><strong>UTM Medium:</strong> ${utm_medium || 'N/A'}</p>
                <p><strong>UTM Campaign:</strong> ${utm_campaign || 'N/A'}</p>
                <p><strong>UTM Term:</strong> ${utm_term || 'N/A'}</p>
                <p><strong>UTM Content:</strong> ${utm_content || 'N/A'}</p>
                <p><strong>Google Click ID (gclid):</strong> ${gclid || 'N/A'}</p>
                <p><strong>IP Address:</strong> ${ip}</p>
                <p><strong>Location Summary:</strong> ${locationSummary || 'N/A'}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ ok: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ 
            ok: false,
            message: "Failed to send email", 
            error: error.message 
        }, { status: 500 });
    }
}
