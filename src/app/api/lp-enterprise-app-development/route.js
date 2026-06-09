import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, service, budget, timeline, description, pageUrl } = body;

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
                const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
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

        const transporter = nodemailer.createTransport({
            host: "maltaserver.stagingtestserver.com",
            port: 465,
            secure: true,
            auth: {
                user: 'no-reply@appsters.io', 
                pass: "lG;nI8Y333TUIpfg" 
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: '"Appsters - LP" <support@appsters.io>',
            to: 'zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, aleehaiderbalti@gmail.com',
            subject: `New LP Lead: Enterprise App Development`,
            html: `
                <h3>New Lead Details (Enterprise App Development LP):</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Service:</strong> ${service || 'N/A'}</p>
                <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
                <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
                <p><strong>Description:</strong> ${description || 'N/A'}</p>
                <br>
                <hr>
                <h3>Tracking Information:</h3>
                <p><strong>Country:</strong> ${detectedCountry || 'N/A'}</p>
                <p><strong>State/Region:</strong> ${detectedState || 'N/A'}</p>
                <p><strong>City:</strong> ${detectedCity || 'N/A'}</p>
                <p><strong>Location Summary:</strong> ${locationSummary || 'N/A'}</p>
                <p><strong>Page URL:</strong> ${pageUrl || 'N/A'}</p>
                <p><strong>IP Address:</strong> ${ip}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ 
            message: "Failed to send email", 
            error: error.message 
        }, { status: 500 });
    }
}