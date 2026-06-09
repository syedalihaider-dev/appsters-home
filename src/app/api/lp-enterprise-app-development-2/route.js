import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * Lead handler for the Enterprise App Development landing page (v2).
 * Mirrors /api/lp-enterprise-app-development exactly:
 *  - same SMTP host/port (maltaserver.stagingtestserver.com:465, secure)
 *  - same IP geolocation via ip-api.com using the x-forwarded-for header
 *  - same recipient list + HTML email template (all fields included)
 *  - server-side validation of name / email / phone before sending
 *
 * NOTE: paste the SAME SMTP user/password used in the existing route here,
 * or set them via environment variables (recommended).
 */
const SMTP_HOST = 'maltaserver.stagingtestserver.com'
const SMTP_PORT = 465
const SMTP_USER = process.env.SMTP_USER || 'no-reply@appsters.io' // same as existing LP route
const SMTP_PASS = process.env.SMTP_PASS || 'lG;nI8Y333TUIpfg' // same as existing LP route

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

const isValidEmail = (v = '') => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim())
const isValidPhone = (v = '') => {
  const digits = String(v).replace(/[^\d]/g, '')
  return digits.length >= 7 && digits.length <= 15
}

export async function POST(request) {
  try {
    const data = await request.json()
    const {
      name = '',
      email = '',
      phone = '',
      cc = '',
      service = '',
      budget = '',
      timeline = '',
      description = '',
      desc = '',
      idea = '',
      source = '',
    } = data || {}

    // ---- Server-side validation (defence in depth) ----
    if (!String(name).trim() || !isValidEmail(email) || !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, message: 'Invalid name, email, or phone.' },
        { status: 422 }
      )
    }

    // Forms use different textarea names (desc / idea / description) — normalize.
    const projectDescription = description || desc || idea || ''
    // Prefix the phone with its country code when provided.
    const fullPhone = cc ? `${cc} ${phone}`.trim() : phone

    // ---- Visitor IP (same extraction as existing route) ----
    const forwardedFor = request.headers.get('x-forwarded-for') || ''
    const ip = forwardedFor.split(',')[0].trim() || 'Unknown'

    // ---- IP geolocation via ip-api.com (same as existing route) ----
    let country = 'Unknown'
    let regionName = 'Unknown'
    let city = 'Unknown'
    try {
      if (ip && ip !== 'Unknown' && !ip.startsWith('127.') && !ip.startsWith('::1')) {
        const geoRes = await fetch(
          `http://ip-api.com/json/${ip}?fields=status,country,regionName,city`
        )
        const geo = await geoRes.json()
        if (geo && geo.status === 'success') {
          country = geo.country || 'Unknown'
          regionName = geo.regionName || 'Unknown'
          city = geo.city || 'Unknown'
        }
      }
    } catch (geoErr) {
      // non-fatal — fall back to Unknown values
    }

    const locationSummary = [city, regionName, country]
      .filter((v) => v && v !== 'Unknown')
      .join(', ') || 'Unknown'

    const pageUrl =
      request.headers.get('referer') ||
      'https://appsters.io/lp/enterprise-app-development-2'

    // ---- HTML email template (all fields, same layout as existing route) ----
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
        <div style="background:#0b0d12;padding:22px 26px;">
          <h2 style="margin:0;color:#ccff00;font-size:20px;">New LP Lead: Enterprise App Development (v2)</h2>
          <p style="margin:6px 0 0;color:#9aa3ad;font-size:13px;">Submitted via /lp/enterprise-app-development-2</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;color:#111827;">
          <tbody>
            <tr><td style="padding:12px 26px;background:#f9fafb;font-weight:bold;width:170px;">Name</td><td style="padding:12px 26px;">${name}</td></tr>
            <tr><td style="padding:12px 26px;font-weight:bold;">Email</td><td style="padding:12px 26px;">${email}</td></tr>
            <tr><td style="padding:12px 26px;background:#f9fafb;font-weight:bold;">Phone</td><td style="padding:12px 26px;">${fullPhone}</td></tr>
            <tr><td style="padding:12px 26px;font-weight:bold;">Service</td><td style="padding:12px 26px;">${service}</td></tr>
            <tr><td style="padding:12px 26px;background:#f9fafb;font-weight:bold;">Budget</td><td style="padding:12px 26px;">${budget}</td></tr>
            <tr><td style="padding:12px 26px;font-weight:bold;">Timeline</td><td style="padding:12px 26px;">${timeline}</td></tr>
            <tr><td style="padding:12px 26px;background:#f9fafb;font-weight:bold;">Description</td><td style="padding:12px 26px;">${projectDescription || '—'}</td></tr>
            <tr><td style="padding:12px 26px;font-weight:bold;">Form Source</td><td style="padding:12px 26px;">${source || '—'}</td></tr>
            <tr><td style="padding:12px 26px;font-weight:bold;">Country</td><td style="padding:12px 26px;">${country}</td></tr>
            <tr><td style="padding:12px 26px;background:#f9fafb;font-weight:bold;">State / Region</td><td style="padding:12px 26px;">${regionName}</td></tr>
            <tr><td style="padding:12px 26px;font-weight:bold;">City</td><td style="padding:12px 26px;">${city}</td></tr>
            <tr><td style="padding:12px 26px;background:#f9fafb;font-weight:bold;">Location</td><td style="padding:12px 26px;">${locationSummary}</td></tr>
            <tr><td style="padding:12px 26px;font-weight:bold;">Page URL</td><td style="padding:12px 26px;">${pageUrl}</td></tr>
            <tr><td style="padding:12px 26px;background:#f9fafb;font-weight:bold;">IP Address</td><td style="padding:12px 26px;">${ip}</td></tr>
          </tbody>
        </table>
      </div>
    `

    await transporter.sendMail({
      from: `"Appsters Website" <${SMTP_USER}>`,
      to: 'zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, aleehaiderbalti@gmail.com',
      subject: `New LP Lead: Enterprise App Development (v2)`,
      html,
      replyTo: email || undefined,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('lp-enterprise-app-development-2 error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send' },
      { status: 500 }
    )
  }
}
