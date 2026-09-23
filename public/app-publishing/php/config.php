<?php
/* ==========================================================
   Appsters – App Publishing LP : server settings
   Single source of truth for credentials. Use SINGLE quotes
   for passwords (a "$" inside double quotes gets mangled).
   ========================================================== */
if (!defined('LP_BOOT')) { http_response_code(403); exit; }

// Who receives the leads (comma-separate for several)
define('LEAD_TO',        'support@appsters.io');
define('LEAD_CC',        '');                 // optional
define('LEAD_FROM',      'noreply@appsters.io'); // must be a mailbox/alias on the SMTP account's domain
define('LEAD_FROM_NAME', 'Appsters App Publishing LP');
define('LEAD_SUBJECT',   'New lead: App Publishing LP');

// SMTP (Zoho: smtppro.zoho.com / 465 / ssl  |  Google Workspace: smtp.gmail.com / 465 / ssl + App Password)
// Leave SMTP_HOST empty to fall back to PHP mail() on the server.
define('SMTP_HOST',   'smtppro.zoho.com');
define('SMTP_PORT',   465);
define('SMTP_SECURE', 'ssl');                 // 'ssl' for 465, 'tls' for 587
define('SMTP_USER',   '');                    // e.g. noreply@appsters.io
define('SMTP_PASS',   '');                    // single quotes!

// Allowed origins for the form POST (leave empty array to skip the check)
define('ALLOWED_HOSTS', ['appsters.io', 'www.appsters.io']);

// Basic abuse limits
define('RATE_LIMIT_SECONDS', 30);             // min seconds between submits per session
