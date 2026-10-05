Appsters - mvp-development landing page
This folder is served at /mvp-development by this Next.js project.

Lead form
  - Uses /api/mvp-development (Next.js); PHP is not needed for local or Vercel submissions.
  - Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and SMTP_FROM in .env.local for local testing.
  - Configure the same variables in the correct Vercel environment and redeploy for live testing.
  - The form redirects to thank-you.html only after the lead email has been sent successfully.
  - assets/js/config.js -> zendeskKey (optional; copy the part after ?key= in your Zendesk snippet).

GTM (GTM-N3PBLKRR) dataLayer events
  lead_form_submit | thank_you_view | cta_click | chat_click | phone_click
