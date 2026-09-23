Appsters – App Publishing Landing Page
======================================
Upload this folder (v2: new form design, Outfit + DM Sans, dark logo strips) to:  https://www.appsters.io/lp/app-publishing/
(any folder works – all paths are relative; update the canonical tag in index.html if you change it)

Files
  index.html              Landing page (GTM-N3PBLKRR in head + noscript)
  thank-you.html          Thank-you page (GTM, noindex, pushes "thank_you_view")
  assets/css/style.css    All styles
  assets/js/config.js     Zendesk key, endpoint, thank-you URL, popup delay
  assets/js/main.js       Popup, forms, Zendesk, tracking, tabs
  php/config.php          Lead email + SMTP credentials (single quotes for passwords)
  php/send-lead.php       Lead handler (PHPMailer, honeypot, rate limit, UTM/gclid capture)
  php/PHPMailer/          Bundled PHPMailer (no Composer needed)
  php/.htaccess           Blocks direct access to config.php and PHPMailer

Before going live
  1. php/config.php     -> SMTP_USER, SMTP_PASS, LEAD_FROM (same domain as SMTP account), LEAD_TO
  2. assets/js/config.js -> zendeskKey (from the Zendesk snippet, the part after ?key=)
  3. Submit a test lead and confirm the email arrives + redirect to thank-you.html

GTM dataLayer events
  lead_form_submit  (form_id, lead_app_type)  – fired on successful submit, before redirect
  thank_you_view                              – fired on thank-you.html load
  cta_click (cta_source), chat_click, phone_click
