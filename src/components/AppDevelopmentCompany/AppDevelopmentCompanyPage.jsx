"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SITE_PHONE, SITE_PHONE_LINK } from "@/app/constants";
import { FiExternalLink, FiShield, FiThumbsUp, FiUsers } from "react-icons/fi";
import "./AppDevelopmentCompany.css";
import CaseStudiesGridSection from "@/components/case-study/CaseStudiesGridSection";

/* ===================================================================
   UTILITY HELPERS
   =================================================================== */
const TRACK_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid", "fbclid", "msclkid"
];

function ss(k, v) { try { sessionStorage.setItem(k, v); } catch { } }
function sg(k) { try { return sessionStorage.getItem(k); } catch { return null; } }

function captureParams() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    TRACK_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) ss("lp_" + k, v.slice(0, 250));
    });
    if (!sg("lp_landing")) ss("lp_landing", window.location.href.slice(0, 500));
    if (!sg("lp_referrer") && document.referrer) ss("lp_referrer", document.referrer.slice(0, 500));
  } catch { }
}

/* ===================================================================
   LEAD FORM
   =================================================================== */
function LeadForm({ formId, onSuccess, idPrefix = "f" }) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ msg: "", ok: false });

  const validate = (form) => {
    let ok = true;
    for (const el of form.querySelectorAll("[required]")) {
      const v = (el.value || "").trim();
      if (!v) {
        ok = false;
        el.classList.add("invalid");
      } else {
        el.classList.remove("invalid");
      }
    }
    return ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus({ msg: "", ok: false });
    if (!validate(form)) return;

    const fd = new FormData(form);
    setSubmitting(true);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      app_type: fd.get("app_type"),
      message: fd.get("message"),
      form_id: formId,
      page_url: window.location.href.slice(0, 500),
    };
    TRACK_KEYS.concat(["landing", "referrer"]).forEach((k) => {
      const v = sg("lp_" + k);
      if (v) data[k] = v;
    });

    try {
      const res = await fetch("/api/lp-app-development-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        ss("lp_popup_seen", "1");
        if (typeof window.dataLayer !== "undefined") {
          window.dataLayer.push({ event: "lead_form_submit", form_id: formId });
        }
        if (onSuccess) onSuccess();
      } else {
        setStatus({ msg: "We could not send your details. Call " + SITE_PHONE + " or try again.", ok: false });
      }
    } catch {
      setStatus({ msg: "Submission failed. Please check your connection.", ok: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor={`${idPrefix}_name`}>Full Name <span className="req" aria-hidden="true">*</span></label>
          <input id={`${idPrefix}_name`} name="name" type="text" autoComplete="name" placeholder="John Smith" required maxLength={100}
            onFocus={(e) => e.target.classList.remove("invalid")} />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}_email`}>Email Address <span className="req" aria-hidden="true">*</span></label>
          <input id={`${idPrefix}_email`} name="email" type="email" autoComplete="email" placeholder="john@company.com" required maxLength={150}
            onFocus={(e) => e.target.classList.remove("invalid")} />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor={`${idPrefix}_phone`}>Phone Number <span className="req" aria-hidden="true">*</span></label>
          <input id={`${idPrefix}_phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="5550000000" required maxLength={25}
            onFocus={(e) => e.target.classList.remove("invalid")} />
        </div>
        <div className="field">
          <label htmlFor={`${idPrefix}_apptype`}>App Type <span className="req" aria-hidden="true">*</span></label>
          <select id={`${idPrefix}_apptype`} name="app_type" required defaultValue=""
            onFocus={(e) => e.target.classList.remove("invalid")}>
            <option value="" disabled>Select app type…</option>
            <option>iOS app</option>
            <option>Android app</option>
            <option>Both iOS and Android</option>
            <option>Cross-platform (Flutter / React Native)</option>
            <option>AI-powered app</option>
            <option>eCommerce app</option>
            <option>Mobile game</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}_message`}>Tell us about your app <span className="req" aria-hidden="true">*</span></label>
        <textarea id={`${idPrefix}_message`} name="message" rows={4} maxLength={2000} required
          placeholder="Describe your app idea, the main features and your target launch date…"
          onFocus={(e) => e.target.classList.remove("invalid")} />
      </div>
      <button className="btn btn-gradient btn-block" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Get My Free Quote"}
      </button>
      {status.msg && (
        <p className={`form-status ${status.ok ? "is-ok" : "is-error"}`} role="status" aria-live="polite">{status.msg}</p>
      )}
    </form>
  );
}

/* ===================================================================
   POPUP MODAL
   =================================================================== */
function PopupModal({ show, onClose, onSuccess }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!show) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.classList.add("modal-open");
    return () => { document.removeEventListener("keydown", handler); document.body.classList.remove("modal-open"); };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="modal modal-offer" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card form-card">
        <button className="modal-close" type="button" aria-label="Close" onClick={onClose}>&times;</button>
        <div className="form-head">
          <span className="form-chip">
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L4 21l1.4-4.3A8.5 8.5 0 1 1 21 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
            Limited slots this month
          </span>
          <h2 id="modalTitle">Get a Free App Consultation &amp; <span className="grad">Project Estimate!</span></h2>
          <p>Fill out the form and our experts will get back to you right away.</p>
        </div>
        <LeadForm formId="popup_form" idPrefix="m" onSuccess={onSuccess} />
      </div>
    </div>
  );
}

/* ===================================================================
   TABS COMPONENT
   =================================================================== */
function Tabs({ tabs, panelRenderer, className = "" }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className={className} role="tablist">
        {tabs.map((t, i) => (
          <button key={i} role="tab" aria-selected={i === active}
            className={`${t.className || ""} ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)} tabIndex={i === active ? 0 : -1}>
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={i} role="tabpanel" hidden={i !== active}>
          {panelRenderer(t, i)}
        </div>
      ))}
    </>
  );
}

/* ===================================================================
   CAROUSEL
   =================================================================== */
function Carousel({ title, description, children, wrapClassName = "" }) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    if (!trackRef.current) return;
    const t = trackRef.current;
    setAtStart(t.scrollLeft <= 2);
    setAtEnd(t.scrollLeft >= t.scrollWidth - t.clientWidth - 2);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    const t = trackRef.current;
    const slide = t.querySelector(".car-slide");
    if (!slide) return;
    const gap = parseFloat(getComputedStyle(t).columnGap) || 0;
    const step = slide.offsetWidth + gap;
    t.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className={`wrap ${wrapClassName}`}>
      <div className="car-head">
        <div className="section-head">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="car-controls">
          <button className="car-btn car-prev" type="button" aria-label="Previous" disabled={atStart} onClick={() => scroll(-1)}>&larr;</button>
          <button className="car-btn car-next" type="button" aria-label="Next" disabled={atEnd} onClick={() => scroll(1)}>&rarr;</button>
        </div>
      </div>
      <div className="car-track" ref={trackRef} onScroll={update} tabIndex="0">
        {children}
      </div>
    </div>
  );
}

/* ===================================================================
   DATA
   =================================================================== */
const TECH_TABS = [
  { label: "iOS", items: [{ name: "Swift", sub: "Native language" }, { name: "SwiftUI", sub: "Modern UI" }, { name: "Objective-C", sub: "Legacy support" }, { name: "Apple Watch", sub: "watchOS apps" }, { name: "Face ID / Touch ID", sub: "Biometric auth" }, { name: "Apple Pay", sub: "In-app payments" }] },
  { label: "Android", items: [{ name: "Kotlin", sub: "Native language" }, { name: "Jetpack Compose", sub: "Modern UI" }, { name: "Java", sub: "Legacy support" }, { name: "Wear OS", sub: "Wearable apps" }, { name: "Android Studio", sub: "Official IDE" }, { name: "Google Pay", sub: "In-app payments" }] },
  { label: "Cross-platform", items: [{ name: "Flutter", sub: "Single codebase" }, { name: "React Native", sub: "JS / TypeScript" }, { name: "Kotlin Multiplatform", sub: "Shared logic" }, { name: "Ionic", sub: "Web tech" }, { name: "Firebase", sub: "Backend services" }, { name: "Node.js", sub: "APIs" }] },
];

const PORTFOLIO = [
  { tag: "Bloom Money", name: "Switch Poker", img: "4", alt: "Switch Poker app screens", desc: "A mobile game where players compete against each other in poker rounds until a winner is decided.", stats: [{ dt: "Downloads", dd: "6k+" }, { dt: "App rating", dd: "4.6" }, { dt: "Active users", dd: "2k+" }] },
  { tag: "Check your reflexes", name: "Global Reflex", img: "2", alt: "Global Reflex app screens", desc: "A fast, reliable and engaging app that lets users connect, interact and complete tasks across a modern digital platform.", stats: [{ dt: "Active users", dd: "12.9k" }, { dt: "App rating", dd: "4.8" }, { dt: "Monthly users", dd: "1k+" }] },
  { tag: "Share your content", name: "Mic 2 Money", img: "1", alt: "Mic 2 Money app screens", desc: "Creators record, share and monetize podcast content, grow an audience and turn their voice into income.", stats: [{ dt: "Active users", dd: "4.5k" }, { dt: "App rating", dd: "4.7" }, { dt: "Monthly users", dd: "1.8k+" }] },
  { tag: "Virtual live well", name: "My Tank", img: "3", alt: "My Tank app screens", desc: "Built for anglers to record, track and showcase catches, analyze performance and compete with others.", stats: [{ dt: "Active users", dd: "24.2k" }, { dt: "App rating", dd: "4.7" }, { dt: "Monthly users", dd: "1.2k+" }] },
];

const PROCESS_TABS = [
  { step: "Step 1", label: "Requirement gathering", num: "01", title: "1. Requirement gathering", desc: "We work closely with you to understand your goals, target audience, competitors and technical constraints. Market research and feasibility analysis validate the direction with real data before anything is designed." },
  { step: "Step 2", label: "Scope of work", num: "02", title: "2. Scope of work", desc: "We turn requirements into a clear scope: features, milestones, timelines, deliverables and a technical stack recommendation, so everyone knows exactly what is being built and when." },
  { step: "Step 3", label: "Design & wireframing", num: "03", title: "3. Design & wireframing", desc: "Interactive wireframes and clickable prototypes let you see user flows and navigation early. Once approved, our designers create a polished, accessible interface." },
  { step: "Step 4", label: "Development", num: "04", title: "4. Development", desc: "Engineers build production-ready code in agile sprints with version control, continuous integration and peer code reviews. You see a working build every sprint." },
  { step: "Step 5", label: "Quality assurance", num: "05", title: "5. Quality assurance", desc: "Automated and manual testing covers performance, security, usability and edge cases across devices, OS versions and network conditions, so bugs never reach your users." },
  { step: "Step 6", label: "Deployment", num: "06", title: "6. Deployment", desc: "We handle App Store and Google Play submission, compliance checks, analytics and crash reporting, then keep supporting the app with monitoring, updates and fixes." },
];

const SERVICES = [
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M10 5h4" /><circle cx="12" cy="18" r=".8" /></svg>, title: "iOS App Development", desc: "Native iPhone and iPad apps in Swift that follow Apple\u2019s guidelines and feel premium from the first tap." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></svg>, title: "Android App Development", desc: "Kotlin apps optimized for speed and security across thousands of Android devices and OS versions." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></svg>, title: "Cross-Platform Apps", desc: "One Flutter or React Native codebase for iOS and Android, with native-level performance and lower cost." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>, title: "Progressive Web Apps", desc: "Fast, installable web apps that work on any device and share logic with your mobile apps." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></svg>, title: "UI/UX Design", desc: "Intuitive, accessible interfaces and design systems that make users stay and come back." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4l14 6-6 2-2 6L5 4Z" /></svg>, title: "Prototyping & MVP", desc: "Clickable prototypes and lean MVPs to validate your idea with real users before a full build." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>, title: "QA & Testing", desc: "Automated and manual testing across devices so your app launches stable and stays that way." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4" /></svg>, title: "App Modernization & Migration", desc: "Move outdated apps to modern stacks or new cloud infrastructure without losing users or data." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /></svg>, title: "AI App Development", desc: "Assistants, recommendations and automation that help users decide faster and cut manual work." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4h2l2.5 11h10L20 8H6.5" /><circle cx="9" cy="19" r="1.3" /><circle cx="17" cy="19" r="1.3" /></svg>, title: "eCommerce Apps", desc: "Shopping apps with secure checkout, loyalty programs and an architecture ready for peak traffic." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="10" rx="4" /><path d="M7.5 11v4M5.5 13h4" /><circle cx="15.5" cy="12" r=".6" /><circle cx="17.5" cy="14" r=".6" /></svg>, title: "Mobile Game Development", desc: "Engaging, scalable games with multiplayer, in-app purchases and smooth performance." },
  { icon: <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></svg>, title: "Blockchain Apps", desc: "Secure wallets, smart contracts and web3 features built with a real business case." },
];

const TESTIMONIALS = [
  { img: "testi-01", name: "Sophia", role: "Entrepreneur", video: "https://vimeo.com/manage/videos/1184929104" },
  { img: "testi-02", name: "Daniel", role: "Game Developer", video: "https://vimeo.com/manage/videos/1184930327" },
  { img: "testi-03", name: "Mateo", role: "Founder, Fintech Company", video: "https://vimeo.com/manage/videos/1184931603" },
  { img: "testi-04", name: "Jason", role: "Fitness App", video: "https://vimeo.com/manage/videos/1184931598" },
];

/* ===================================================================
   MAIN PAGE COMPONENT
   =================================================================== */
export default function AppDevelopmentCompanyPage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTestimonialVideo, setActiveTestimonialVideo] = useState("");
  const [activeTech, setActiveTech] = useState(0);
  const [activeProc, setActiveProc] = useState(0);

  useEffect(() => { captureParams(); }, []);

  // Auto-open popup after 10s (once per session)
  useEffect(() => {
    if (sg("lp_popup_seen")) return;
    const t = setTimeout(() => {
      if (!sg("lp_popup_seen")) setModalOpen(true);
    }, 10000);
    return () => clearTimeout(t);
  }, []);

  const openForm = useCallback(() => setModalOpen(true), []);
  const closeForm = useCallback(() => setModalOpen(false), []);
  const handleFormSuccess = useCallback(() => {
    router.push("/lp/app-development-company/thank-you");
  }, [router]);

  const openChat = useCallback(() => {
    if (typeof window !== "undefined") {
      if (typeof window.zE === "function") {
        try { window.zE("messenger", "open"); return; } catch { }
        try { window.zE("webWidget", "open"); return; } catch { }
      }
    }
    openForm();
  }, [openForm]);

  return (
    <div>
      <a className="skip" href="#main">Skip to content</a>

      {/* ===== HEADER ===== */}
      <header className="site-header" id="top">
        <div className="wrap header-row">
          <a className="brand" href="#top" aria-label="Appsters home">
            <img src="/images/logo.png" alt="Appsters" width={150} height={40} />
          </a>
          <div className="header-actions">
            <button className="btn btn-sm header-talk" type="button" onClick={openChat}>Talk to us</button>
            <a className="header-phone header-phone-always" href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
            <button className="btn btn-primary btn-sm" type="button" onClick={openForm}>Get a free quote</button>
          </div>
        </div>
      </header>

      <main id="main">

        {/* ===== HERO ===== */}
        <section className="hero hero-t" id="banner">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Appsters mobile app development</p>
              <h1>Custom Mobile App Development Services</h1>
              <ul className="hero-bullets">
                <li>4.8k+ apps and digital solutions delivered</li>
                <li>95% client retention across startups and enterprises</li>
                <li>Flexible contracts: dedicated team, fixed price or hourly</li>
                <li>iOS, Android and cross-platform apps built for the AI era</li>
              </ul>
              <div className="hero-ctas">
                <button className="btn btn-primary" type="button" onClick={openForm}>Get a free quote</button>
                <button className="btn btn-ghost-light" type="button" onClick={openChat}>Let&rsquo;s talk</button>
              </div>
              <div className="ratings">
                <div className="rating"><img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fclutch-awards.png&w=256&q=75" alt="Clutch" loading="lazy" /><span>Recognized as top app developers</span></div>
                <div className="rating"><img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fgoodfirms-award.png&w=256&q=75" alt="GoodFirms" loading="lazy" /><span>Recognized as top app developers</span></div>
                <div className="rating"><img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fappfutura-award.png&w=256&q=75" alt="AppFutura" loading="lazy" /><span>Recognized as top app developers</span></div>
              </div>
            </div>
            <img className="hero-img" src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fmobile-apps-cover.png&w=1200&q=75" alt="Mobile apps designed and built by Appsters" width={560} height={560} />
          </div>
        </section>

        {/* ===== CLIENT REVIEWS ===== */}
        <section className="client-reviews" aria-labelledby="client-reviews-title">
          <div className="wrap client-reviews-grid">
            <div className="reviews-intro">
              <span className="reviews-eyebrow"><FiShield aria-hidden="true" /> Trusted &amp; reviewed</span>
              <h2 id="client-reviews-title">Trusted by Clients.<br /><span>Backed by Reviews.</span></h2>
              <p>See what real clients say about working with Appsters. Our reviews across trusted platforms reflect our commitment to quality, communication and results. Choose Appsters with confidence.</p>
              <div className="review-trust-points">
                <div><span className="trust-icon"><FiThumbsUp aria-hidden="true" /></span><span>Real Client<br />Feedback</span></div>
                <div><span className="trust-icon"><FiShield aria-hidden="true" /></span><span>Verified<br />Reviews</span></div>
                <div><span className="trust-icon"><FiUsers aria-hidden="true" /></span><span>Trusted by<br />Startups &amp; Businesses</span></div>
              </div>
            </div>
            <div className="review-platforms">
              <article className="platform-card platform-trustpilot">
                <div className="platform-brand trustpilot-brand"><img src="/images/trustpilot.jpg" alt="" /><span>Trustpilot</span></div>
                <div className="platform-stars" aria-label="4.5 out of 5 stars">★★★★<span>★</span></div>
                <strong className="platform-score">4.5/5</strong>
                <p className="platform-count">Based on <a href="https://www.trustpilot.com/review/appsters.io" target="_blank" rel="noreferrer">20 reviews</a></p>
                <p className="platform-description">Independent client reviews from real businesses.</p>
                <a className="platform-link" href="https://www.trustpilot.com/review/appsters.io" target="_blank" rel="noreferrer">Read Our Reviews <FiExternalLink aria-hidden="true" /></a>
              </article>
              <article className="platform-card platform-clutch">
                <div className="platform-brand"><img src="/images/clutch.png" alt="Clutch" /></div>
                <div className="platform-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <strong className="platform-score">5.0/5</strong>
                <p className="platform-count">Based on <a href="https://clutch.co/profile/appsters" target="_blank" rel="noreferrer">12 reviews</a></p>
                <p className="platform-description">Verified client feedback from Clutch.</p>
                <a className="platform-link" href="https://clutch.co/profile/appsters" target="_blank" rel="noreferrer">View Our Profile <FiExternalLink aria-hidden="true" /></a>
              </article>
              <article className="platform-card platform-goodfirms">
                <div className="platform-brand"><img src="/images/goodfirms.png" alt="GoodFirms" /></div>
                <div className="platform-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <strong className="platform-score">5.0/5</strong>
                <p className="platform-count">Based on <a href="https://www.goodfirms.co/company/appsters" target="_blank" rel="noreferrer">10 reviews</a></p>
                <p className="platform-description">Trusted reviews from verified clients on GoodFirms.</p>
                <a className="platform-link" href="https://www.goodfirms.co/company/appsters" target="_blank" rel="noreferrer">View Our Profile <FiExternalLink aria-hidden="true" /></a>
              </article>
            </div>
          </div>
        </section>

        {/* ===== SERVICES INTRO + TECH TABS ===== */}
        <section className="section" id="services-intro">
          <div className="wrap">
            <div className="section-head">
              <h2>Mobile &amp; Web App Development Services for Startups and Enterprises</h2>
              <p>Appsters has engineered platforms that handle millions of users across fintech, e-commerce and mobility. Our designers and engineers cover every stage of the product lifecycle, from the first idea to post-launch growth.</p>
            </div>
            <h3 className="tech-title">Technology stack</h3>
            <div className="tech-tabs" role="tablist" aria-label="Technology stack">
              {TECH_TABS.map((t, i) => (
                <button key={i} role="tab" aria-selected={i === activeTech}
                  className={`port-tab ${i === activeTech ? "is-active" : ""}`}
                  onClick={() => setActiveTech(i)} tabIndex={i === activeTech ? 0 : -1}>{t.label}</button>
              ))}
            </div>
            {TECH_TABS.map((t, i) => (
              <div key={i} className="tech-panel" role="tabpanel" hidden={i !== activeTech}>
                <ul className="tech-grid">
                  {t.items.map((item, j) => (
                    <li key={j}>{item.name}<small>{item.sub}</small></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <CaseStudiesGridSection />

        {/* ===== PORTFOLIO CAROUSEL ===== */}
        <section className="section" id="portfolio" style={{ paddingTop: 0 }}>
          <Carousel
            title="Our Portfolio"
            description="Appsters turns ideas into products that deliver measurable results. Here are a few apps that climbed the charts in their categories."
          >
            {PORTFOLIO.map((p) => (
              <article key={p.name} className="car-slide port-slide">
                <img src={`https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fshowcase%2F${p.img}.png&w=1920&q=75`} alt={p.alt} loading="lazy" />
                <div>
                  <p className="port-tag">{p.tag}</p>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <dl className="port-stats">
                    {p.stats.map((st) => (
                      <div key={st.dt}><dt>{st.dt}</dt><dd>{st.dd}</dd></div>
                    ))}
                  </dl>
                  <button className="btn btn-primary" type="button" onClick={openForm}>Start your project</button>
                </div>
              </article>
            ))}
          </Carousel>
        </section>

        {/* ===== CTA STRIP ===== */}
        <section className="cta-strip">
          <div className="wrap">
            <p>Get a free consultation with one of our expert developers and make the right decision for your project.</p>
            <button className="btn btn-white" type="button" onClick={openForm}>Get a free quote</button>
          </div>
        </section>

        {/* ===== PROCESS TABS ===== */}
        <section className="section" id="process">
          <div className="wrap">
            <div className="section-head">
              <h2>App Development Process</h2>
              <p>A battle-tested process that minimizes risk, speeds up delivery and keeps everyone aligned from the first call to launch day.</p>
            </div>
            <div className="proc-tabs" role="tablist" aria-label="Development process">
              {PROCESS_TABS.map((p, i) => (
                <button key={i} role="tab" aria-selected={i === activeProc}
                  className={`proc-tab ${i === activeProc ? "is-active" : ""}`}
                  onClick={() => setActiveProc(i)} tabIndex={i === activeProc ? 0 : -1}>
                  <small>{p.step}</small>{p.label}
                </button>
              ))}
            </div>
            {PROCESS_TABS.map((p, i) => (
              <div key={i} className="proc-panel" role="tabpanel" hidden={i !== activeProc}>
                <img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fdiscovery.png&w=1200&q=75" alt="" loading="lazy" />
                <div>
                  <span className="proc-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button className="btn btn-primary" type="button" onClick={openForm}>Get a free quote</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES CARDS ===== */}
        <section className="section" id="services" style={{ background: "var(--mist)" }}>
          <div className="wrap">
            <div className="section-head">
              <h2>Services We Offer</h2>
              <p>Every service is built around one standard: quality, design and functionality that set your product apart and keep users coming back.</p>
            </div>
            <div className="svc-cards">
              {SERVICES.map((svc) => (
                <article className="svc-card" key={svc.title}>
                  <span className="ico">{svc.icon}</span>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </article>
              ))}
            </div>
            <div className="center"><button className="btn btn-primary" type="button" onClick={openForm}>Get a free quote</button></div>
          </div>
        </section>

        {/* ===== CTA BAND ===== */}
        <section className="cta-band">
          <div className="wrap cta-grid">
            <div>
              <h2>Have an Idea for an App? Talk to Us Today for a Free Consultation!</h2>
              <p>Your business deserves an app that creates impact from day one. Tell us your idea and get a clear plan, timeline and estimate.</p>
              <div className="cta-actions">
                <button className="btn btn-primary" type="button" onClick={openForm}>Get a free quote</button>
                <a className="btn btn-ghost-light" href={SITE_PHONE_LINK}>Call {SITE_PHONE}</a>
              </div>
            </div>
            <img className="cta-img" src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fcta-mockup.png&w=1200&q=75" alt="App shown on mobile devices" loading="lazy" />
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="section" id="testimonials">
          <Carousel
            wrapClassName="car-3"
            title="What People Say About Appsters"
            description="From startups to global enterprises, clients trust our developers to engineer products that deliver results."
          >
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="car-slide">
                <div className="testi-card">
                  <button className="testi-video-trigger" type="button" aria-label={`Play ${t.name}'s video testimonial`} onClick={() => setActiveTestimonialVideo(t.video)}>
                    <img src={`https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2F${t.img}.png&w=1080&q=75`} alt="" loading="lazy" />
                    <span className="testi-play-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 5.8v12.4L19 12 9 5.8Z" fill="currentColor" /></svg></span>
                  </button>
                  <div><h3>{t.name}</h3><p>{t.role}</p></div>
                </div>
              </article>
            ))}
          </Carousel>
        </section>

        {/* ===== CONTACT FORM ===== */}
        <section className="section levelup" id="contact">
          <div className="wrap levelup-grid">
            <img className="levelup-img" src="/services.webp" alt="Mobile app built by Appsters" loading="lazy" />
            <div className="contact-form form-card">
              <div className="form-head">
                <span className="form-chip">
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L4 21l1.4-4.3A8.5 8.5 0 1 1 21 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
                  Let&rsquo;s talk
                </span>
                <h2>Let&rsquo;s Level Up Your App, <span className="grad">Together!</span></h2>
                <p>Drop your details and an app specialist will get back to you fast.</p>
              </div>
              <LeadForm formId="contact_form" idPrefix="c" onSuccess={handleFormSuccess} />
            </div>
          </div>
        </section>

        {/* ===== INDUSTRY AWARDS ===== */}
        <section className="top-rated" aria-label="Industry awards and recognition">
          <div className="wrap">
            <h2>Industry Awards &amp; Recognition</h2>
            <div className="tr-row tr-awards">
              {["01", "02", "03", "004", "05"].map((n) => (
                <img key={n} src={`https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fawards-img-${n}.png&w=640&q=75`} alt="Appsters industry award" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="site-footer slim-footer">
        <div className="wrap footer-row">
          <img src="/images/ft-logo.png" alt="Appsters" width={140} height={40} loading="lazy" />
          <address><strong>Phone</strong><br /><a href={SITE_PHONE_LINK}>{SITE_PHONE}</a></address>
          <address><strong>Address</strong><br />141 W Jackson Blvd STE 300 A<br />Chicago, IL 60604, United States</address>
          <nav className="footer-links" aria-label="Legal">
            <a href="https://www.appsters.io/term-and-condition" target="_blank" rel="noopener">Terms of use</a>
            <a href="https://www.appsters.io/privacy-policy" target="_blank" rel="noopener">Privacy policy</a>
          </nav>
        </div>
        <div className="wrap footer-legal">
          <p>Copyright &copy; {new Date().getFullYear()} Appsters.io. All rights reserved.</p>
        </div>
      </footer>

      {/* ===== MOBILE BAR ===== */}
      <div className="mobile-bar">
        <a href={SITE_PHONE_LINK}>Call now</a>
        <button type="button" onClick={openChat}>Chat</button>
        <button type="button" onClick={openForm}>Free quote</button>
      </div>

      {/* ===== POPUP ===== */}
      <PopupModal show={modalOpen} onClose={closeForm} onSuccess={handleFormSuccess} />
      {activeTestimonialVideo && (
        <div className="testi-video-modal" role="dialog" aria-modal="true" aria-label="Client video testimonial" onClick={() => setActiveTestimonialVideo("")}>
          <div className="testi-video-dialog" onClick={(event) => event.stopPropagation()}>
            <button className="testi-video-close" type="button" aria-label="Close video" onClick={() => setActiveTestimonialVideo("")}>&times;</button>
            <iframe src={`https://player.vimeo.com/video/${activeTestimonialVideo.split("/").pop().split("?")[0]}?autoplay=1`} title="Client video testimonial" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}
