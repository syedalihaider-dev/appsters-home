const fs = require('fs');
const path = require('path');

const srcHtml = fs.readFileSync('app-development-company/index.html', 'utf8');
const srcCss = fs.readFileSync('app-development-company/assets/css/style.css', 'utf8');

fs.mkdirSync('src/components/AppDevelopmentCompany', { recursive: true });
fs.mkdirSync('src/app/lp/app-development-company/thank-you', { recursive: true });
fs.mkdirSync('src/app/api/lp-app-development-company', { recursive: true });

// Copy API route
const apiRoute = fs.readFileSync('src/app/api/lp-app-publishing/route.js', 'utf8');
fs.writeFileSync('src/app/api/lp-app-development-company/route.js', apiRoute.replace(/App Publishing/g, 'App Development Company'));

// Layout & Page
const layout = fs.readFileSync('src/app/lp/app-publishing/layout.js', 'utf8');
fs.writeFileSync('src/app/lp/app-development-company/layout.js', layout.replace(/AppPublishing/g, 'AppDevelopmentCompany').replace('App Publishing', 'App Development Company').replace('https://www.appsters.io/lp/app-publishing/', 'https://www.appsters.io/lp/app-development-company/'));

const page = fs.readFileSync('src/app/lp/app-publishing/page.js', 'utf8');
fs.writeFileSync('src/app/lp/app-development-company/page.js', page.replace(/AppPublishing/g, 'AppDevelopmentCompany'));

// CSS
// We replace standard css classes with module classes in the js, but for the css file itself we just save it as module
fs.writeFileSync('src/components/AppDevelopmentCompany/AppDevelopmentCompany.module.css', srcCss);

// JS Component
// We extract the body inner HTML and do basic jsx conversions
let bodyMatch = srcHtml.match(/<body>([\s\S]*?)<\/body>/);
let jsx = bodyMatch ? bodyMatch[1] : srcHtml;

// Remove noscript and script tags
jsx = jsx.replace(/<noscript>[\s\S]*?<\/noscript>/g, '');
jsx = jsx.replace(/<script[\s\S]*?<\/script>/g, '');
jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

// Attributes
jsx = jsx.replace(/class="/g, 'className={s.');
jsx = jsx.replace(/className=\{s\.([^"\}]+)"/g, (match, p1) => {
    // If it has spaces, it needs template literal
    if (p1.includes(' ')) {
        const classes = p1.split(' ').map(c => `s['${c}']`).join('} ${');
        return `className={\`${classes}\`}`;
    }
    // If it has dashes, we can just use s['class-name']
    if (p1.includes('-')) {
        return `className={s['${p1}']}`;
    }
    return `className={s.${p1}}`;
});

// Self-closing tags
jsx = jsx.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]+[^\/])>/g, '<input$1 />');
jsx = jsx.replace(/<br>/g, '<br />');
jsx = jsx.replace(/<hr>/g, '<hr />');
jsx = jsx.replace(/<meta([^>]+[^\/])>/g, '<meta$1 />');
jsx = jsx.replace(/<link([^>]+[^\/])>/g, '<link$1 />');
jsx = jsx.replace(/<source([^>]+[^\/])>/g, '<source$1 />');

// Style attribute
jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(s => {
        if (!s.trim()) return;
        const [k, v] = s.split(':');
        if (!k || !v) return;
        const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelK] = v.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// specific fix for label for
jsx = jsx.replace(/for="/g, 'htmlFor="');
jsx = jsx.replace(/maxlength/g, 'maxLength');
jsx = jsx.replace(/autocomplete/g, 'autoComplete');
jsx = jsx.replace(/tabindex/g, 'tabIndex');
jsx = jsx.replace(/novalidate/g, 'noValidate');

const componentCode = `"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import s from "./AppDevelopmentCompany.module.css";

export default function AppDevelopmentCompanyPage() {
  const router = useRouter();

  // Basic component state mapping to standard LP structure
  const handleSubmit = (e) => {
     e.preventDefault();
     router.push('/lp/app-development-company/thank-you');
  };

  return (
    <div className={s.lpAppDevelopment}>
      ${jsx}
    </div>
  );
}
`;

fs.writeFileSync('src/components/AppDevelopmentCompany/AppDevelopmentCompanyPage.jsx', componentCode);

// Create thank you page by copying existing
fs.cpSync('src/app/lp/app-publishing/thank-you', 'src/app/lp/app-development-company/thank-you', { recursive: true });

console.log("Migration script complete");
