Appsters – custom-software-development landing page
Upload this folder to:  https://www.appsters.io/lp/custom-software-development/

Before going live
  1. php/config.php      -> SMTP_USER, SMTP_PASS, LEAD_FROM (same domain as the SMTP account), LEAD_TO
  2. assets/js/config.js -> zendeskKey (the part after ?key= in your Zendesk snippet)
  3. Submit one real test lead and confirm the email arrives and the page redirects to thank-you.html

GTM (GTM-N3PBLKRR) dataLayer events
  lead_form_submit (form_id, lead_app_type) | thank_you_view (lp) | cta_click (cta_source) | chat_click | phone_click
