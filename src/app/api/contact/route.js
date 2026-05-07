import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, msg, pageTitle, pageUrl, budget } = body;

        // Get IP Address from headers
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                   req.headers.get('x-real-ip') || 
                   req.headers.get('cf-connecting-ip') || 
                   '127.0.0.1';

        // Fetch location data from IP-API
        let ipInfo = {};
        try {
            const ipResponse = await fetch(`http://pro.ip-api.com/json/${ip}?key=5XpThOAEkfgOvEJ`);
            ipInfo = await ipResponse.json();
        } catch (e) {
            console.error("IP Info fetch failed", e);
        }

        const transporter = nodemailer.createTransport({
            host: "appsters.io",
            port: 465,
            secure: true,
            auth: {
                user: 'support@appsters.io',
                pass: "N;v-Om+OIZJ8?tdD"
            }
        });

        const mailOptions = {
            from: 'support@appsters.io',
            to: ['zain@iceanimations.com', 'ppc@iceanimations.com', 'hassan.ali@iceanimations.com', 'aleehaiderbalti@gmail.com'],
            subject: `New Lead from Appsters: ${pageTitle || 'Contact Form'}`,
            html: `
                <h3>New Lead Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
                <p><strong>Message:</strong> ${msg}</p>
                <br>
                <hr>
                <h3>Tracking Information:</h3>
                <p><strong>Page Title:</strong> ${pageTitle || 'N/A'}</p>
                <p><strong>Page URL:</strong> ${pageUrl || 'N/A'}</p>
                <p><strong>IP Address:</strong> ${ip}</p>
                <p><strong>Country:</strong> ${ipInfo.country || 'N/A'}</p>
                <p><strong>Region/State:</strong> ${ipInfo.regionName || 'N/A'}</p>
                <p><strong>City:</strong> ${ipInfo.city || 'N/A'}</p>
                <p><strong>ISP:</strong> ${ipInfo.isp || 'N/A'}</p>
                <p><strong>Organization:</strong> ${ipInfo.org || 'N/A'}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
    }
}

