/* ==========================================================
   Appsters – App Publishing LP : front-end settings
   Edit values here only. No other JS file needs changes.
   ========================================================== */
window.LP_CONFIG = {
  // Lead handler endpoint
  endpoint: '/api/app-publishing',

  // Where the visitor goes after a successful submit
  thankYouUrl: '/app-publishing/thank-you',

  // Zendesk Web Widget / Messaging key.
  // Zendesk Admin > Channels > Messaging (or Widget) > Installation:
  // Matches site-wide Zendesk key used across Appsters
  zendeskKey: '239dfa05-01f6-4362-bfb9-4f75a7455e10',

  // Popup auto-open delay in ms (0 = never auto-open)
  popupDelay: 10000,

  // GTM dataLayer event name pushed on successful submit
  leadEventName: 'lead_form_submit'
};
