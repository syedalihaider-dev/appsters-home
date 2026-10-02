const fs = require('fs');

let jsx = fs.readFileSync('src/components/AppDevelopmentCompany/AppDevelopmentCompanyPage.jsx', 'utf8');

// Fix the buggy className generation:
// The buggy script did:
// jsx = jsx.replace(/className=\{s\.([^"\}]+)"/g, ...)
// which resulted in things like `className={\`s['btn'] s['btn-sm']\`}` which isn't evaluated if it was inside a template literal wrongly, or `className={"s['wrap']} ${s['header-row']"}`.

// Let's just re-read the HTML and do it properly.
const srcHtml = fs.readFileSync('app-development-company/index.html', 'utf8');
let bodyMatch = srcHtml.match(/<body>([\s\S]*?)<\/body>/);
let rawHtml = bodyMatch ? bodyMatch[1] : srcHtml;

rawHtml = rawHtml.replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
rawHtml = rawHtml.replace(/<script[\s\S]*?<\/script>/g, '');
rawHtml = rawHtml.replace(/<!--[\s\S]*?-->/g, '');

rawHtml = rawHtml.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
rawHtml = rawHtml.replace(/<input([^>]+[^\/])>/g, '<input$1 />');
rawHtml = rawHtml.replace(/<br>/g, '<br />');
rawHtml = rawHtml.replace(/<hr>/g, '<hr />');
rawHtml = rawHtml.replace(/<meta([^>]+[^\/])>/g, '<meta$1 />');
rawHtml = rawHtml.replace(/<link([^>]+[^\/])>/g, '<link$1 />');
rawHtml = rawHtml.replace(/<source([^>]+[^\/])>/g, '<source$1 />');

// Replace class="a b c" with className={`${s.a} ${s.b} ${s.c}`}
rawHtml = rawHtml.replace(/class="([^"]+)"/g, (match, p1) => {
    const classes = p1.trim().split(/\s+/);
    if (classes.length === 1) {
        const c = classes[0];
        if (c.includes('-')) return `className={s['${c}']}`;
        return `className={s.${c}}`;
    } else {
        const mapped = classes.map(c => {
            if (c.includes('-')) return `\${s['${c}']}`;
            return `\${s.${c}}`;
        }).join(' ');
        return `className={\`${mapped}\`}`;
    }
});

rawHtml = rawHtml.replace(/style="([^"]+)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(s => {
        if (!s.trim()) return;
        const [k, ...rest] = s.split(':');
        const v = rest.join(':');
        if (!k || !v) return;
        const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelK] = v.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

rawHtml = rawHtml.replace(/for="/g, 'htmlFor="');
rawHtml = rawHtml.replace(/maxlength/g, 'maxLength');
rawHtml = rawHtml.replace(/autocomplete/g, 'autoComplete');
rawHtml = rawHtml.replace(/tabindex/g, 'tabIndex');
rawHtml = rawHtml.replace(/novalidate/g, 'noValidate');

const componentCode = `"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import s from "./AppDevelopmentCompany.module.css";

export default function AppDevelopmentCompanyPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ msg: "", ok: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fd = new FormData(form);
    const formId = form.getAttribute("data-form-id") || "contact_form";
    
    // Minimal validation
    let ok = true;
    for (const el of form.querySelectorAll("[required]")) {
      const v = (el.value || "").trim();
      if (!v) {
        ok = false;
        el.classList.add(s.invalid);
      } else {
        el.classList.remove(s.invalid);
      }
    }
    if (!ok) return;

    setSubmitting(true);
    setStatus({ msg: "", ok: false });
    
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      app_type: fd.get("app_type"),
      message: fd.get("message"),
      form_id: formId,
      page_url: window.location.href,
    };

    try {
      const res = await fetch("/api/lp-app-development-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push("/lp/app-development-company/thank-you");
      } else {
        setStatus({ msg: "Something went wrong. Please try again.", ok: false });
      }
    } catch (err) {
      setStatus({ msg: "Submission failed.", ok: false });
    } finally {
      setSubmitting(false);
    }
  };

  // Add onSubmit to forms by replacing their tags
  // We'll replace <form ...> with <form ... onSubmit={handleSubmit}>
  return (
    <div className={s.lpAppDevelopment}>
      ${rawHtml.replace(/<form([^>]*)>/g, '<form$1 onSubmit={handleSubmit}>')}
    </div>
  );
}
`;

fs.writeFileSync('src/components/AppDevelopmentCompany/AppDevelopmentCompanyPage.jsx', componentCode);
console.log("Fix complete");
