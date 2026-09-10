import nodemailer from 'nodemailer';

// All API routes use this single SMTP configuration.
// Update the values in .env.local (or deployment environment variables) once.
const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
};

export function createSmtpTransport() {
  const { host, port, user, pass } = smtpConfig;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is incomplete.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}
