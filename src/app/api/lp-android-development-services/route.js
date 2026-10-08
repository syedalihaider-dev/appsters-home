import { NextResponse } from "next/server";
import { createSmtpTransport, getSmtpFrom } from "@/lib/smtp";

const escapeHtml = (value) => String(value || "N/A").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[char]));

export async function POST(request) {
  try {
    const body = await request.json();
    const fields = {
      name: String(body.name || "").trim().slice(0, 100),
      email: String(body.email || "").trim().slice(0, 150),
      phone: String(body.phone || "").trim().slice(0, 40),
      countryCode: String(body.countryCode || "").trim().slice(0, 8),
      service: String(body.service || "Android App").trim().slice(0, 100),
      budget: String(body.budget || "").trim().slice(0, 60),
      timeline: String(body.timeline || "").trim().slice(0, 60),
      description: String(body.description || "").trim().slice(0, 3000),
      pageUrl: String(body.pageUrl || "").trim().slice(0, 500),
    };

    if (!fields.name || !fields.phone || !fields.description || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      return NextResponse.json({ message: "Please provide a valid name, email, phone number, and project description." }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || request.headers.get("x-real-ip")
      || request.headers.get("cf-connecting-ip")
      || "127.0.0.1";
    let locationSummary = "N/A";
    if (ip === "::1" || ip === "127.0.0.1") {
      locationSummary = "Local Development Environment";
    } else if (!ip.startsWith("192.168.")) {
      try {
        const geoResponse = await fetch(`http://ip-api.com/json/${encodeURIComponent(ip)}`, {
          signal: AbortSignal.timeout(3000),
        });
        const geo = await geoResponse.json();
        if (geo.status === "success") locationSummary = [geo.city, geo.regionName, geo.country].filter(Boolean).join(", ");
      } catch {
        locationSummary = "Geo lookup unavailable";
      }
    }

    const safe = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)]));
    const transporter = createSmtpTransport();
    await transporter.sendMail({
      from: `"Appsters - Android LP" <${getSmtpFrom()}>`,
      to: "support@appsters.io, zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, syed.ali@appsters.io, ali.haider@canvasdigital.org",
      subject: `New LP Lead: Android Development Services (${safe.name})`,
      html: `
        <h3>New Lead Details (Android Development Services LP)</h3>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Selected Country Code:</strong> ${safe.countryCode}</p>
        <p><strong>Service:</strong> ${safe.service}</p>
        <p><strong>Budget:</strong> ${safe.budget}</p>
        <p><strong>Timeline:</strong> ${safe.timeline}</p>
        <p><strong>Description:</strong><br>${safe.description.replace(/\r?\n/g, "<br>")}</p>
        <hr>
        <p><strong>Page URL:</strong> ${safe.pageUrl}</p>
        <p><strong>IP Address:</strong> ${escapeHtml(ip)}</p>
        <p><strong>Approximate Location:</strong> ${escapeHtml(locationSummary)}</p>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Android development LP email delivery failed:", error);
    return NextResponse.json({ message: "We could not send your details. Please try again." }, { status: 500 });
  }
}
