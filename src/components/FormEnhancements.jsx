"use client";

import { useEffect } from "react";

const COUNTRY_CODES = [
  ["US", "+1"], ["CA", "+1"], ["GB", "+44"], ["AU", "+61"],
  ["PK", "+92"], ["IN", "+91"], ["AE", "+971"], ["DE", "+49"],
  ["FR", "+33"], ["SA", "+966"], ["SG", "+65"], ["BR", "+55"],
  ["MX", "+52"],
];

function createCountrySelect() {
  const select = document.createElement("select");
  select.name = "countryCode";
  select.className = "appsters-country-code";
  select.setAttribute("aria-label", "Country code");
  COUNTRY_CODES.forEach(([country, code]) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${country} ${code}`;
    select.appendChild(option);
  });
  return select;
}

function enhanceFormFields() {
  document.querySelectorAll('input[name="name"]').forEach((input) => {
    input.placeholder = "Jordan Rivera";
  });
  document.querySelectorAll('input[name="email"]').forEach((input) => {
    input.placeholder = "jordan@company.com";
  });

  document.querySelectorAll('input[name="phone"]:not([data-country-enhanced])').forEach((input) => {
    input.dataset.countryEnhanced = "true";
    input.type = "tel";
    input.inputMode = "tel";
    input.placeholder = "555 000 000";

    const form = input.closest("form");
    if (!form || form.querySelector('[name="cc"], [name="countryCode"]')) return;

    const existingSlot = input.parentElement?.querySelector('[class*="countryCode"]');
    if (existingSlot) {
      existingSlot.replaceChildren(createCountrySelect());
      return;
    }

    const field = document.createElement("span");
    field.className = "appsters-phone-field";
    const select = createCountrySelect();
    input.replaceWith(field);
    field.append(select, input);
  });
}

export default function FormEnhancements() {
  useEffect(() => {
    enhanceFormFields();
    const observer = new MutationObserver(enhanceFormFields);
    observer.observe(document.body, { childList: true, subtree: true });

    let submittedForm = null;
    const onSubmit = (event) => {
      submittedForm = event.target;
    };
    document.addEventListener("submit", onSubmit, true);

    const nativeFetch = window.fetch.bind(window);
    window.fetch = async (resource, options = {}) => {
      if (submittedForm && options.body && typeof options.body === "string") {
        try {
          const payload = JSON.parse(options.body);
          const phone = submittedForm.querySelector('input[name="phone"]');
          const code = submittedForm.querySelector('[name="countryCode"], [name="cc"]');
          if (phone && code) {
            const localNumber = phone.value.trim().replace(/^\+\d{1,4}\s*/, "");
            payload.phone = localNumber ? `${code.value} ${localNumber}` : "";
            payload.countryCode = code.value;
            options = { ...options, body: JSON.stringify(payload) };
          }
        } catch {
          // Non-JSON requests are intentionally left unchanged.
        }
      }
      return nativeFetch(resource, options);
    };

    return () => {
      observer.disconnect();
      document.removeEventListener("submit", onSubmit, true);
      window.fetch = nativeFetch;
    };
  }, []);

  return null;
}
