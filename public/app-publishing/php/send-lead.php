<?php
/* Appsters – App Publishing LP : lead handler (JSON in/out) */
declare(strict_types=1);

define('LP_BOOT', true);
require __DIR__ . '/config.php';
require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as MailException;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(bool $ok, string $message, int $code = 200): void
{
    http_response_code($code);
    echo json_encode(['ok' => $ok, 'message' => $message]);
    exit;
}

function field(string $key, int $max = 500): string
{
    $v = isset($_POST[$key]) && is_string($_POST[$key]) ? $_POST[$key] : '';
    $v = trim(str_replace(["\r\n", "\r"], "\n", $v));
    $v = preg_replace('/[\x00-\x09\x0B-\x1F\x7F]/u', '', $v) ?? '';
    return function_exists('mb_substr') ? mb_substr($v, 0, $max) : substr($v, 0, $max);
}

function oneLine(string $v): string
{
    return trim(preg_replace('/\s+/', ' ', $v) ?? '');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'Method not allowed.', 405);
}

// Origin check
$allowed = ALLOWED_HOSTS;
if (!empty($allowed)) {
    $src = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
    $host = $src ? strtolower((string) parse_url($src, PHP_URL_HOST)) : '';
    $self = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
    $self = preg_replace('/:\d+$/', '', $self) ?? $self;
    if ($host !== '' && $host !== $self && !in_array($host, $allowed, true)) {
        respond(false, 'This form can only be submitted from our website.', 403);
    }
}

// Honeypot: pretend success to bots
if (field('website') !== '') {
    respond(true, 'Thanks.');
}

// Session rate limit
if (session_status() !== PHP_SESSION_ACTIVE) {
    @session_start();
}
$now = time();
if (isset($_SESSION['lp_last_submit']) && ($now - (int) $_SESSION['lp_last_submit']) < RATE_LIMIT_SECONDS) {
    respond(false, 'You just sent a request. Please wait a few seconds before sending another.', 429);
}

// Collect
$name    = oneLine(field('name', 100));
$email   = oneLine(field('email', 150));
$phone   = oneLine(field('phone', 25));
$appType = oneLine(field('app_type', 100));
$message = field('message', 2000);
$cta     = oneLine(field('cta', 60));
$formId  = oneLine(field('form_id', 40));
$pageUrl = oneLine(field('page_url', 500));

// Validate
if (strlen($name) < 2) {
    respond(false, 'Enter your full name.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Enter a valid email address.', 422);
}
if (strlen(preg_replace('/\D/', '', $phone) ?? '') < 7) {
    respond(false, 'Enter a phone number with at least 7 digits.', 422);
}
if ($appType === '') {
    respond(false, 'Choose your app type.', 422);
}
if (strlen(trim($message)) < 10) {
    respond(false, 'Add a short description of your app (at least 10 characters).', 422);
}
if (preg_match('/(https?:\/\/.*){3,}/i', $message)) {
    respond(false, 'Please remove the links from your message and try again.', 422);
}

// Tracking
$track = [];
foreach (['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid', 'landing', 'referrer'] as $k) {
    $v = oneLine(field($k, 500));
    if ($v !== '') {
        $track[$k] = $v;
    }
}

$ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? ($_SERVER['REMOTE_ADDR'] ?? '');
$ua = oneLine(substr((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 300));
$when = gmdate('Y-m-d H:i:s') . ' UTC';

// Build email
$e = static fn(string $s): string => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
$rows = [
    'Name'     => $name,
    'Email'    => $email,
    'Phone'    => $phone,
    'App type' => $appType,
    'About app'=> $message,
    'Form'     => $formId,
    'Opened by'=> $cta !== '' ? $cta : '-',
    'Page'     => $pageUrl,
    'Submitted'=> $when,
    'IP'       => $ip,
];

$html = '<div style="font-family:Arial,sans-serif;font-size:14px;color:#1C2240">'
      . '<h2 style="margin:0 0 12px;color:#0E1330">New App Publishing lead</h2>'
      . '<table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px">';
foreach ($rows as $label => $val) {
    $html .= '<tr><td style="border-bottom:1px solid #DDE2F0;font-weight:bold;width:130px;vertical-align:top">' . $e($label) . '</td>'
           . '<td style="border-bottom:1px solid #DDE2F0">' . nl2br($e($val)) . '</td></tr>';
}
if ($track) {
    $html .= '<tr><td colspan="2" style="padding-top:18px;font-weight:bold;color:#2F5BFF">Tracking</td></tr>';
    foreach ($track as $k => $v) {
        $html .= '<tr><td style="border-bottom:1px solid #DDE2F0;font-weight:bold">' . $e($k) . '</td><td style="border-bottom:1px solid #DDE2F0;word-break:break-all">' . $e($v) . '</td></tr>';
    }
}
$html .= '</table><p style="color:#5A6285;font-size:12px;margin-top:14px">User agent: ' . $e($ua) . '</p></div>';

$text = "New App Publishing lead\n\n";
foreach ($rows as $label => $val) {
    $text .= $label . ': ' . $val . "\n";
}
foreach ($track as $k => $v) {
    $text .= $k . ': ' . $v . "\n";
}

$subject = LEAD_SUBJECT . ' - ' . $name . ' (' . $appType . ')';

// Send
$mail = new PHPMailer(true);
try {
    $mail->CharSet = 'UTF-8';
    if (SMTP_HOST !== '' && SMTP_USER !== '' && SMTP_PASS !== '') {
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->Port       = (int) SMTP_PORT;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = SMTP_SECURE === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : PHPMailer::ENCRYPTION_SMTPS;
        $mail->Timeout    = 15;
    } else {
        $mail->isMail();
    }
    $mail->setFrom(LEAD_FROM, LEAD_FROM_NAME);
    foreach (array_filter(array_map('trim', explode(',', LEAD_TO))) as $to) {
        $mail->addAddress($to);
    }
    foreach (array_filter(array_map('trim', explode(',', LEAD_CC))) as $cc) {
        $mail->addCC($cc);
    }
    $mail->addReplyTo($email, $name);
    $mail->Subject = $subject;
    $mail->isHTML(true);
    $mail->Body    = $html;
    $mail->AltBody = $text;
    $mail->send();
} catch (MailException $ex) {
    error_log('[app-publishing-lp] Mail error: ' . $mail->ErrorInfo);
    respond(false, 'We could not send your details right now. Call +1 (855) 799 1171 or email support@appsters.io.', 500);
}

$_SESSION['lp_last_submit'] = $now;
respond(true, 'Thanks. We received your details.');
