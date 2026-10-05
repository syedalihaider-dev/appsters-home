/* ==========================================================
   Appsters – App Publishing LP : front-end settings
   Edit values here only. No other JS file needs changes.
   ========================================================== */
window.LP_CONFIG = {
  // PHP lead handler (relative to index.html)
  endpoint: 'php/send-lead.php',

  // Where the visitor goes after a successful submit
  thankYouUrl: 'thank-you.html',

  // Zendesk Web Widget / Messaging key.
  // Zendesk Admin > Channels > Messaging (or Widget) > Installation:
  // copy the part after "?key=" from the snippet and paste it here.
  // Leave empty and all "Chat with us" buttons open the lead popup instead.
  zendeskKey: '',

  // Popup auto-open delay in ms (0 = never auto-open)
  popupDelay: 10000,

  // GTM dataLayer event name pushed on successful submit
  leadEventName: 'lead_form_submit'
};
