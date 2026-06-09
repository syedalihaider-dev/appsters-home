// Shared form options + tiny icon helpers for the Enterprise LP (v2) forms.
import React from 'react'

export const COUNTRIES = [
  ['🇺🇸', '+1'], ['🇨🇦', '+1'], ['🇬🇧', '+44'], ['🇦🇺', '+61'],
  ['🇮🇳', '+91'], ['🇦🇪', '+971'], ['🇩🇪', '+49'], ['🇫🇷', '+33'],
  ['🇸🇬', '+65'], ['🇸🇦', '+966'], ['🇧🇷', '+55'], ['🇲🇽', '+52'],
]

export const SERVICE_OPTIONS = [
  'Enterprise iOS / Android App',
  'Cross-Platform Enterprise App',
  'Enterprise SaaS Mobile App',
  'AI-Powered Enterprise App',
  'Legacy System Integration',
  'Compliance-Ready App',
  'Not sure yet — advise me',
]

export const BUDGET_OPTIONS = [
  '$25k – $50k',
  '$50k – $100k',
  '$100k – $250k',
  '$250k+',
  'Custom Enterprise',
]

export const TIMELINE_OPTIONS = [
  'ASAP / within 1 month',
  '1 – 3 months',
  '3 – 6 months',
  '6 – 12 months',
  'Just exploring',
]

/* ---------- email / phone validation ---------- */
export const isValidEmail = (v = '') => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim())
export const isValidPhone = (v = '') => {
  const digits = String(v).replace(/[^\d]/g, '')
  return digits.length >= 7 && digits.length <= 15
}

/**
 * Validate a lead payload. Returns a map of { field: message } — empty == valid.
 * `required` lists which fields to enforce (forms differ slightly).
 */
export function validateLead(data, required = ['name', 'email', 'phone', 'service']) {
  const errors = {}
  const has = (k) => required.includes(k)
  if (has('name') && !String(data.name || '').trim()) errors.name = 'Please enter your full name.'
  if (has('email')) {
    if (!String(data.email || '').trim()) errors.email = 'Work email is required.'
    else if (!isValidEmail(data.email)) errors.email = 'Enter a valid email address.'
  }
  if (has('phone')) {
    if (!String(data.phone || '').trim()) errors.phone = 'Phone number is required.'
    else if (!isValidPhone(data.phone)) errors.phone = 'Enter a valid phone number.'
  }
  if (has('service') && !String(data.service || '').trim()) errors.service = 'Select what you are building.'
  if (has('budget') && !String(data.budget || '').trim()) errors.budget = 'Select an estimated budget.'
  if (has('timeline') && !String(data.timeline || '').trim()) errors.timeline = 'Select a timeline.'
  if (has('idea') && !String(data.idea || '').trim()) errors.idea = 'Tell us briefly about your project.'
  return errors
}

/* ---------- inline icons ---------- */
export const Chevron = ({ size = 14 }) => (
  <span className="chev">
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </span>
)

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </svg>
)

// Shared submit helper: POST to the v2 LP endpoint, redirect to v2 thank-you on success.
export async function submitLead(formData, router) {
  const res = await fetch('/api/lp-enterprise-app-development-2', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  if (res.ok) {
    router.push('/lp/enterprise-app-development-2/thank-you')
    return true
  }
  return false
}
