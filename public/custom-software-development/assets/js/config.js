/* ==========================================================
   Appsters – App Publishing LP : front-end settings
   Edit values here only. No other JS file needs changes.
   ========================================================== */
window.LP_CONFIG = {
  // Next.js API route for this landing page.
  endpoint: '/api/custom-software-development',

  // Where the visitor goes after a successful submit
  thankYouUrl: '/custom-software-development/thank-you',

  // Zendesk Web Widget / Messaging key.
  // Zendesk Admin > Channels > Messaging (or Widget) > Installation:
  // copy the part after "?key=" from the snippet and paste it here.
  // Leave empty and all "Chat with us" buttons open the lead popup instead.
  zendeskKey: '239dfa05-01f6-4362-bfb9-4f75a7455e10',

  // Popup auto-open delay in ms (0 = never auto-open)
  popupDelay: 10000,

  // GTM dataLayer event name pushed on successful submit
  leadEventName: 'lead_form_submit'
};
