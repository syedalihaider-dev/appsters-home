"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SITE_PHONE, SITE_EMAIL, SITE_PHONE_LINK, SITE_EMAIL_LINK } from "@/app/constants";
import s from "./AppPublishing.module.css";

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ===================================================================
   COUNTRY CODES
   =================================================================== */
const COUNTRY_CODES = [
  { code: "+1", label: "US" },
  { code: "+1", label: "CA" },
  { code: "+44", label: "GB" },
  { code: "+61", label: "AU" },
  { code: "+92", label: "PK" },
  { code: "+91", label: "IN" },
  { code: "+971", label: "AE" },
  { code: "+49", label: "DE" },
  { code: "+33", label: "FR" },
  { code: "+966", label: "SA" },
  { code: "+65", label: "SG" },
  { code: "+55", label: "BR" },
  { code: "+52", label: "MX" },
];

/* ===================================================================
   LEAD FORM (reusable for hero, contact, popup)
   =================================================================== */
function LeadForm({ formId, onSuccess, idPrefix = "f" }) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ msg: "", ok: false });
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneInvalid, setPhoneInvalid] = useState(false);

  const validate = (form) => {
    let ok = true;
    for (const el of form.querySelectorAll("[required]")) {
      const v = (el.value || "").trim();
      let msg = "";
      if (!v) msg = el.tagName === "SELECT" ? "Choose an option." : "This field is required.";

      if (msg) { ok = false; el.classList.add(s.invalid); if (el.name === "phone") setPhoneInvalid(true); }
      else { el.classList.remove(s.invalid); if (el.name === "phone") setPhoneInvalid(false); }
    }
    return ok;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus({ msg: "", ok: false });
    if (!validate(form)) return;

    const fd = new FormData(form);

    const rawPhone = (fd.get("phone") || "").trim();
    setSubmitting(true);
    const data = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: `${countryCode} ${rawPhone}`,
      countryCode: countryCode,
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
      const res = await fetch("/api/lp-app-publishing", {
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
    <form className={s.leadForm} onSubmit={handleSubmit} noValidate>
      <div className={s.fieldRow}>
        <div className={s.field}>
          <label htmlFor={`${idPrefix}_name`}>Full Name <span className={s.req} aria-hidden="true">*</span></label>
          <input id={`${idPrefix}_name`} name="name" type="text" autoComplete="name" placeholder="John Smith" required maxLength={100}
            onFocus={(e) => e.target.classList.remove(s.invalid)} />
        </div>
        <div className={s.field}>
          <label htmlFor={`${idPrefix}_email`}>Email Address <span className={s.req} aria-hidden="true">*</span></label>
          <input id={`${idPrefix}_email`} name="email" type="email" autoComplete="email" placeholder="john@company.com" required maxLength={150}
            onFocus={(e) => e.target.classList.remove(s.invalid)} />
        </div>
      </div>
      <div className={s.fieldRow}>
        <div className={s.field}>
          <label htmlFor={`${idPrefix}_phone`}>Phone Number <span className={s.req} aria-hidden="true">*</span></label>
          <div className={`${s.phoneWrapper} ${phoneInvalid ? s.phoneWrapperInvalid : ""}`}>
            <select
              className={s.countryCodeSelect}
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              aria-label="Country code"
            >
              {COUNTRY_CODES.map((c, i) => (
                <option key={`${c.label}-${i}`} value={c.code}>
                  {c.flag} {c.label} {c.code}
                </option>
              ))}
            </select>
            <input
              id={`${idPrefix}_phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="555 000 0000"
              required
              maxLength={25}
              className={s.phoneInput}
              data-country-enhanced="true"
              onFocus={() => setPhoneInvalid(false)}
            />
          </div>
        </div>
        <div className={s.field}>
          <label htmlFor={`${idPrefix}_apptype`}>App Type <span className={s.req} aria-hidden="true">*</span></label>
          <select id={`${idPrefix}_apptype`} name="app_type" required defaultValue=""
            onFocus={(e) => e.target.classList.remove(s.invalid)}>
            <option value="" disabled>Select app type…</option>
            <option>iOS app</option>
            <option>Android app</option>
            <option>Both iOS and Android</option>
            <option>Cross-platform (Flutter / React Native)</option>
            <option>Mobile game</option>
            <option>Web app / PWA</option>
            <option>Not built yet</option>
          </select>
        </div>
      </div>
      <div className={s.field}>
        <label htmlFor={`${idPrefix}_message`}>Tell us about your app <span className={s.req} aria-hidden="true">*</span></label>
        <textarea id={`${idPrefix}_message`} name="message" rows={4} maxLength={2000} required
          placeholder="Describe your app, what it does, and any specific publishing requirements…"
          onFocus={(e) => e.target.classList.remove(s.invalid)} />
      </div>
      <button className={s.btnGradient} type="submit" disabled={submitting}>
        {submitting ? "Sending…" : "Submit & Get Published Fast"}
      </button>
      {status.msg && (
        <p className={`${s.formStatus} ${status.ok ? s.isOk : s.isError}`} role="status" aria-live="polite">{status.msg}</p>
      )}
    </form>
  );
}

/* ===================================================================
   FORM CARD WRAPPER
   =================================================================== */
function FormCard({ chipText, title, subtitle, formId, idPrefix, className, onSuccess }) {
  return (
    <div className={`${s.formCard} ${className || ""}`}>
      <div className={s.formHead}>
        <span className={s.formChip}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M21 12a8.5 8.5 0 0 1-12.4 7.6L4 21l1.4-4.3A8.5 8.5 0 1 1 21 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
          {chipText}
        </span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <LeadForm formId={formId} idPrefix={idPrefix} onSuccess={onSuccess} />
    </div>
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
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={s.modal} ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div className={s.modalBackdrop} onClick={onClose} />
      <div className={s.modalCard}>
        <button className={s.modalClose} type="button" aria-label="Close" onClick={onClose}>&times;</button>
        <FormCard
          chipText="Let's talk"
          title={<>Get In Touch With Our Team <span className={s.grad}>Right Away!</span></>}
          subtitle="Drop your details and we'll get back to you fast."
          formId="popup_form"
          idPrefix="m"
          onSuccess={onSuccess}
        />
      </div>
    </div>
  );
}

/* ===================================================================
   STAT COUNT-UP
   =================================================================== */
function StatNum({ count, decimals = 0, suffix = "", label }) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) { ref.current.textContent = count.toFixed(decimals) + suffix; return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || counted.current) return;
        counted.current = true;
        io.unobserve(entry.target);
        let start = null;
        const dur = 1200;
        function tick(ts) {
          if (start === null) start = ts;
          const p = Math.min((ts - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          ref.current.textContent = (count * eased).toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [count, decimals, suffix]);

  return (
    <div className={s.stat}>
      <span className={s.statNum} ref={ref}>{count.toFixed(decimals) + suffix}</span>
      <span className={s.statLabel}>{label}</span>
    </div>
  );
}

/* ===================================================================
   PORTFOLIO TABS
   =================================================================== */
const PORTFOLIO = [
  { id: "switch-poker", name: "Switch Poker", img: "4", alt: "Switch Poker app screens", desc: "A mobile game where players compete against each other in poker rounds until a winner is decided.", stats: [{ dt: "Downloads", dd: "6k+" }, { dt: "App rating", dd: "4.6" }, { dt: "Active users", dd: "2k+" }] },
  { id: "global-reflex", name: "Global Reflex", img: "2", alt: "Global Reflex app screens", desc: "A fast, engaging app that lets users connect, interact and complete tasks across a modern digital platform.", stats: [{ dt: "Active users", dd: "12.9k" }, { dt: "App rating", dd: "4.8" }, { dt: "Monthly users", dd: "1k+" }] },
  { id: "mic-2-money", name: "Mic 2 Money", img: "1", alt: "Mic 2 Money app screens", desc: "Creators record, share and monetize podcast content, grow an audience and turn their voice into income.", stats: [{ dt: "Active users", dd: "4.5k" }, { dt: "App rating", dd: "4.7" }, { dt: "Monthly users", dd: "1.8k+" }] },
  { id: "my-tank", name: "My Tank", img: "3", alt: "My Tank app screens", desc: "Built for anglers to record, track and showcase catches, analyze performance and compete with others.", stats: [{ dt: "Active users", dd: "24.2k" }, { dt: "App rating", dd: "4.7" }, { dt: "Monthly users", dd: "1.2k+" }] },
];

function PortfolioTabs({ onOpenForm }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className={s.portTabs} role="tablist" aria-label="Portfolio">
        {PORTFOLIO.map((p, i) => (
          <button key={p.id} role="tab" aria-selected={i === active} className={i === active ? s.portTabActive : s.portTab} onClick={() => setActive(i)}
            tabIndex={i === active ? 0 : -1}>
            {p.name}
          </button>
        ))}
      </div>
      {PORTFOLIO.map((p, i) => (
        <div key={p.id} className={i === active ? s.portPanel : s.portPanelHidden} role="tabpanel" hidden={i !== active}>
          <img src={`https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fshowcase%2F${p.img}.png&w=1920&q=75`} alt={p.alt} loading="lazy" />
          <div className={s.portInfo}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <dl className={s.portStats}>
              {p.stats.map((st) => (
                <div key={st.dt}>
                  <dt className={s.portStatsDt}>{st.dt}</dt>
                  <dd className={s.portStatsDd}>{st.dd}</dd>
                </div>
              ))}
            </dl>
            <button className={s.btnPrimary} type="button" onClick={() => onOpenForm("portfolio")}>Start your project</button>
          </div>
        </div>
      ))}
    </>
  );
}

/* ===================================================================
   MAIN PAGE COMPONENT
   =================================================================== */
export default function AppPublishingPage() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
    router.push("/lp/app-publishing/thank-you");
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

  const clientLogos = [
    "industry-icon-01", "industry-icon-02", "industry-icon-03",
    "industry-icon-04", "industry-icon-05",
  ];

  return (
    <div className={s.lpAppPublishing}>
      <a className={s.skip} href="#main">Skip to content</a>

      {/* ===== HEADER ===== */}
      <header className={s.siteHeader} id="top">
        <div className={`${s.wrap} ${s.headerRow}`}>
          <a className={s.brand} href="#top" aria-label="Appsters home">
            <img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Flogo.png&w=256&q=75" alt="Appsters" width={150} height={40} />
          </a>
          <nav className={`${s.mainNav} ${navOpen ? s.mainNavOpen : ""}`} id="mainNav" aria-label="Primary">
            <a href="#stores" onClick={() => setNavOpen(false)}>Stores</a>
            <a href="#services" onClick={() => setNavOpen(false)}>What we handle</a>
            <a href="#process" onClick={() => setNavOpen(false)}>Process</a>
            <a href="#portfolio" onClick={() => setNavOpen(false)}>Portfolio</a>
            <a href="#packages" onClick={() => setNavOpen(false)}>Packages</a>
            <a href="#faq" onClick={() => setNavOpen(false)}>FAQ</a>
          </nav>
          <div className={s.headerActions}>
            <a className={s.headerPhone} href={SITE_PHONE_LINK}>{SITE_PHONE}</a>
            <button className={`${s.btnPrimary} ${s.btnSm}`} type="button" onClick={openForm}>Get started</button>
            <button className={s.navToggle} type="button" aria-label={navOpen ? "Close menu" : "Open menu"} aria-expanded={navOpen} onClick={() => setNavOpen(!navOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <main id="main">

        {/* ===== HERO ===== */}
        <section className={s.hero} id="banner">
          <div className={`${s.wrap} ${s.heroGrid}`}>
            <div className={s.heroCopy}>
              <p className={s.heroKicker}>App publishing by Appsters</p>
              <h1>Your app, live on the App Store and Google Play. Without the rejection loop.</h1>
              <p className={s.heroLede}>
                We set up your developer accounts, prepare every store asset, clear Apple and Google policy review, and push your build live. You keep building. We handle the paperwork, the reviewers and the release.
              </p>

              <div className={s.reviewCard} aria-label="Example submission status">
                <div className={s.reviewHead}>
                  <span className={s.reviewApp}>Your App 1.0 (build 12)</span>
                  <span className={s.reviewStore}>App Store Connect</span>
                </div>
                <ol className={s.reviewSteps}>
                  <li className={s.done}><span className={s.dot} />Prepared for submission</li>
                  <li className={s.done}><span className={s.dot} />Waiting for review</li>
                  <li className={s.done}><span className={s.dot} />In review</li>
                  <li className={s.live}><span className={s.dot} />Ready for distribution</li>
                </ol>
              </div>

              <div className={s.heroCtas}>
                <button className={s.btnPrimary} type="button" onClick={openForm}>Publish my app</button>
                <button className={s.btnGhostLight} type="button" onClick={openChat}>Chat with us</button>
              </div>

              <div className={s.heroAwards}>
                <img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fclutch-awards.png&w=256&q=75" alt="Clutch award" loading="lazy" width={110} height={56} />
                <img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fappfutura-award.png&w=256&q=75" alt="AppFutura award" loading="lazy" width={110} height={56} />
                <img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fgoodfirms-award.png&w=256&q=75" alt="GoodFirms award" loading="lazy" width={110} height={56} />
              </div>
            </div>

            <FormCard
              className={s.heroFormCard}
              chipText="Free publishing review"
              title={<>Get Your App Live <span className={s.grad}>Faster!</span></>}
              subtitle="Drop your details and a publishing specialist will get back to you fast."
              formId="hero_form"
              idPrefix="h"
              onSuccess={handleFormSuccess}
            />
          </div>
        </section>

        {/* ===== TRUSTED ===== */}
        <section className={s.trusted} aria-label="Trusted by">
          <div className={s.wrap}>
            <p className={s.trustedLabel}>Trusted by teams across fintech, e-commerce and mobility</p>
            <div className={s.marquee}>
              <div className={s.marqueeTrack}>
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <img key={i} src={`https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2F${logo}.png&w=256&q=75`}
                    alt={i < clientLogos.length ? "Client logo" : ""} aria-hidden={i >= clientLogos.length ? "true" : undefined} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== STORES ===== */}
        <section className={`${s.section}`} id="stores">
          <div className={s.wrap}>
            <div className={s.sectionHead}>
              <h2>One submission partner for every store your users shop in</h2>
              <p>Each store has its own account rules, asset sizes and review policies. We know them, keep up with their changes, and prepare your app to pass the first time.</p>
            </div>
            <div className={s.storeGrid}>
              {[
                { name: "Apple App Store", desc: "iPhone, iPad, Mac and Apple Watch. App Store Connect setup, TestFlight, privacy nutrition labels and App Review responses.", meta: "Review usually 24 to 48 hours" },
                { name: "Google Play", desc: "Play Console setup, closed testing requirements for new personal accounts, Data safety form, target API compliance and staged rollout.", meta: "Review a few hours to 7 days" },
                { name: "Amazon Appstore", desc: "Fire tablets and Fire TV. Device targeting, content rating and listing localization for Amazon's catalogue.", meta: "Optional add-on" },
                { name: "Huawei AppGallery", desc: "Reach Huawei devices without Google services. HMS checks, AppGallery Connect setup and regional listings.", meta: "Optional add-on" },
                { name: "Microsoft Store", desc: "Windows apps and PWAs. Partner Center account, MSIX packaging guidance and certification.", meta: "Optional add-on" },
              ].map((st) => (
                <article className={s.store} key={st.name}>
                  <h3>{st.name}</h3>
                  <p>{st.desc}</p>
                  <span className={s.storeMeta}>{st.meta}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className={`${s.section} ${s.services}`} id="services">
          <div className={`${s.wrap} ${s.servicesGrid}`}>
            <div className={s.servicesIntro}>
              <h2>Everything between &ldquo;the build works&rdquo; and &ldquo;the app is live&rdquo;</h2>
              <p>Most apps are not rejected for bad code. They are rejected for a missing privacy link, a vague login flow for reviewers, or screenshots at the wrong size. We handle every one of those details.</p>
              <button className={s.btnPrimary} type="button" onClick={openForm}>Talk to a publishing specialist</button>
            </div>
            <ul className={s.serviceList}>
              {[
                { title: "Developer account setup", desc: "Individual or organization accounts on Apple and Google, D-U-N-S number guidance, identity verification and team roles." },
                { title: "Store listing and ASO", desc: "App name, subtitle, keywords, short and full descriptions written to rank and convert, in the markets you choose." },
                { title: "Screenshots and preview video", desc: "Designed screenshot sets for every required device size, feature graphic, app icon checks and optional preview video." },
                { title: "Privacy and policy compliance", desc: "Privacy policy page, Apple privacy labels, Google Data safety, account deletion, age rating and permissions justification." },
                { title: "Build signing and submission", desc: "Certificates, provisioning profiles, Play App Signing, version codes, release notes and a clean upload to each console." },
                { title: "Rejection resolution", desc: "We read the reviewer's notes, fix the cause, reply in Resolution Center and resubmit. We keep going until the app is approved." },
                { title: "Updates and release management", desc: "Phased releases, staged rollouts, hotfix submissions and version planning so every update ships on schedule." },
                { title: "Post-launch monitoring", desc: "Crash reporting, ratings and reviews, and analytics wired up from day one so you see how users respond." },
              ].map((svc) => (
                <li key={svc.title}><h3>{svc.title}</h3><p>{svc.desc}</p></li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className={s.stats} aria-label="Appsters in numbers">
          <div className={`${s.wrap} ${s.statsGrid}`}>
            <StatNum count={4.8} decimals={1} suffix="k" label="Apps and solutions delivered" />
            <StatNum count={500} suffix="k+" label="Subscriptions generated" />
            <StatNum count={14} label="Industry-first awards" />
            <StatNum count={95} suffix="%" label="Client retention" />
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className={`${s.section}`} id="process">
          <div className={s.wrap}>
            <div className={s.sectionHead}>
              <h2>From build file to store listing in six steps</h2>
              <p>A typical first release takes one to three weeks, depending on account verification and store review times.</p>
            </div>
            <ol className={s.processList}>
              {[
                { num: "1", title: "Publishing audit", desc: "We test your build against current App Store Review Guidelines and Google Play policies and list everything that could trigger a rejection." },
                { num: "2", title: "Accounts and access", desc: "We create or verify your developer accounts in your company's name, so you always own the app and its listing." },
                { num: "3", title: "Store assets", desc: "Listing copy, keywords, screenshots, icon and feature graphic are prepared and sent to you for approval." },
                { num: "4", title: "Compliance", desc: "Privacy policy, data disclosures, content rating, demo login for reviewers and any required in-app changes." },
                { num: "5", title: "Submission and review", desc: "We sign and upload the build, submit for review and answer reviewer questions until the app is approved." },
                { num: "6", title: "Launch and monitor", desc: "We release on the date you choose, watch crash and review data, and prepare the first update if needed.", last: true },
              ].map((step) => (
                <li key={step.num}>
                  <span className={step.last ? s.stepNumLast : s.stepNum}>{step.num}</span>
                  <div><h3>{step.title}</h3><p>{step.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== REJECTIONS ===== */}
        <section className={`${s.section} ${s.rejections}`}>
          <div className={`${s.wrap} ${s.rejectionsGrid}`}>
            <div>
              <h2>Already rejected? We fix these every week.</h2>
              <p>Send us the rejection message. We will tell you exactly what triggered it and what it takes to get approved.</p>
              <div className={s.rejCtas}>
                <button className={s.btnPrimary} type="button" onClick={openForm}>Fix my rejected app</button>
                <button className={s.rejBtnOutline} type="button" onClick={openChat}>Chat with us</button>
              </div>
            </div>
            <ul className={s.rejList}>
              <li><strong>Guideline 2.1</strong> App completeness: crashes, broken links or no working demo account for reviewers.</li>
              <li><strong>Guideline 4.3</strong> Spam: the app looks too similar to other apps or to a template.</li>
              <li><strong>Guideline 5.1.1</strong> Data collection: missing privacy policy, unclear permission prompts or no account deletion.</li>
              <li><strong>Guideline 3.1.1</strong> In-app purchase: digital goods sold outside Apple&apos;s payment system.</li>
              <li><strong>Play Data safety</strong> Declared data practices do not match what the app or its SDKs actually collect.</li>
              <li><strong>Play target API level</strong> The app does not target a recent enough Android version to be published or updated.</li>
            </ul>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section className={`${s.section}`} id="portfolio">
          <div className={s.wrap}>
            <div className={s.sectionHead}>
              <h2>Apps we have built and taken to market</h2>
              <p>A few of the products Appsters has designed, developed and published for clients.</p>
            </div>
            <PortfolioTabs onOpenForm={openForm} />
          </div>
        </section>

        {/* ===== CTA BAND ===== */}
        <section className={s.ctaBand}>
          <div className={`${s.wrap} ${s.ctaGrid}`}>
            <div>
              <h2>Ready to see your app in the store?</h2>
              <p>Get a free publishing review today. We will tell you what is ready, what needs fixing and how long launch will take.</p>
              <div className={s.ctaActions}>
                <a className={s.btnPrimary} href={SITE_PHONE_LINK}>Call {SITE_PHONE}</a>
                <button className={s.btnGhostLight} type="button" onClick={openChat}>Chat with us</button>
              </div>
            </div>
            <img className={s.ctaImg} src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fcta-mockup.png&w=1200&q=75" alt="App shown on mobile devices" loading="lazy" />
          </div>
        </section>

        {/* ===== PACKAGES ===== */}
        <section className={`${s.section}`} id="packages">
          <div className={s.wrap}>
            <div className={s.sectionHead}>
              <h2>Pick the package that matches where your app is today</h2>
              <p>Every package is quoted after a free review of your build, so you only pay for the work your app actually needs.</p>
            </div>
            <div className={s.pkgGrid}>
              <article className={s.pkg}>
                <h3>Single store launch</h3>
                <p className={s.pkgFor}>Your app is built and you need it on one store.</p>
                <ul>
                  <li>Developer account setup or audit</li>
                  <li>Listing copy and keywords</li>
                  <li>Screenshot set for required sizes</li>
                  <li>Privacy policy and data disclosures</li>
                  <li>Submission and review follow-up</li>
                </ul>
                <button className={`${s.btnOutline} ${s.btnBlock}`} type="button" onClick={openForm}>Get a quote</button>
              </article>
              <article className={s.pkgFeatured}>
                <p className={s.pkgFlag}>Most requested</p>
                <h3>Dual store launch</h3>
                <p className={s.pkgFor}>Launch on the App Store and Google Play together.</p>
                <ul>
                  <li>Everything in single store launch, for both stores</li>
                  <li>Google Play closed testing setup</li>
                  <li>Coordinated release date</li>
                  <li>ASO for two markets</li>
                  <li>30 days of post-launch support</li>
                </ul>
                <button className={`${s.btnPrimary} ${s.btnBlock}`} type="button" onClick={openForm}>Get a quote</button>
              </article>
              <article className={s.pkg}>
                <h3>Rejection rescue</h3>
                <p className={s.pkgFor}>Your app was rejected or removed and you need it approved.</p>
                <ul>
                  <li>Rejection and policy analysis</li>
                  <li>Code or content fixes</li>
                  <li>Resolution Center replies</li>
                  <li>Appeal preparation if needed</li>
                  <li>Resubmission until approved</li>
                </ul>
                <button className={`${s.btnOutline} ${s.btnBlock}`} type="button" onClick={openForm}>Get a quote</button>
              </article>
              <article className={s.pkg}>
                <h3>Build and publish</h3>
                <p className={s.pkgFor}>You have an idea and need the app built and launched.</p>
                <ul>
                  <li>Discovery and product planning</li>
                  <li>UI/UX design and prototype</li>
                  <li>iOS, Android or cross-platform build</li>
                  <li>QA across devices</li>
                  <li>Full store launch included</li>
                </ul>
                <button className={`${s.btnOutline} ${s.btnBlock}`} type="button" onClick={openForm}>Get a quote</button>
              </article>
            </div>
          </div>
        </section>

        {/* ===== AWARDS ===== */}
        <section className={s.awards} aria-label="Awards">
          <div className={s.wrap}>
            <h2 className={s.awardsTitle}>Recognized by the industry</h2>
            <div className={s.awardsRow}>
              {["01", "02", "03", "004", "05"].map((n) => (
                <img key={n} src={`https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fawards-img-${n}.png&w=640&q=75`} alt="Award" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className={`${s.section}`} id="faq">
          <div className={`${s.wrap} ${s.faqGrid}`}>
            <div>
              <h2>Questions about publishing</h2>
              <p>Straight answers on accounts, review times and ownership. Anything else, ask us in chat.</p>
              <button className={s.btnOutline} type="button" onClick={openChat}>Chat with us</button>
            </div>
            <div className={s.faqList}>
              {[
                { q: "How long does it take to publish an app?", a: "Most first releases go live within one to three weeks. Account verification can take a few days, Apple review usually takes 24 to 48 hours, and Google Play review ranges from a few hours to about a week. New personal Google Play accounts also need a closed test period before production access." },
                { q: "Who owns the developer account and the app?", a: "You do. We create or configure accounts in your name or your company's name and work as a team member with limited access. The app, its listing, its reviews and its revenue stay yours." },
                { q: "What do I need to provide?", a: "Your app build or source code, your business details for account verification, and your logo and brand guidelines. We prepare the rest and send everything for your approval before submission." },
                { q: "Can you publish an app that another company built?", a: "Yes. We start with an audit of the build. If anything would cause a rejection, we tell you what it is and can fix it for you or brief your developers." },
                { q: "What happens if my app gets rejected?", a: "We handle it. We read the reviewer's notes, make the required changes, reply in Resolution Center and resubmit until the app is approved." },
                { q: "Do you sign NDAs?", a: "Yes. We protect your intellectual property with NDAs and secure data handling from the first call to launch day." },
                { q: "Do you help after the app is live?", a: "Yes. We manage updates, staged rollouts, ratings and reviews, and store optimization so your app keeps growing after launch." },
              ].map((item) => (
                <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className={`${s.section} ${s.contact}`} id="contact">
          <div className={`${s.wrap} ${s.contactGrid}`}>
            <div className={s.contactInfo}>
              <h2>Connect with our Appsters</h2>
              <p>Ready to stop waiting on review queues? Tell us where your app is today and we will map the fastest route to the store.</p>
              <ul className={s.contactLines}>
                <li><span>Phone</span><a href={SITE_PHONE_LINK}>{SITE_PHONE}</a></li>
                <li><span>Email</span><a href={SITE_EMAIL_LINK}>{SITE_EMAIL}</a></li>
                <li><span>Head office</span>141 W Jackson Blvd STE 300 A, Chicago, IL 60604, United States</li>
              </ul>
              <div className={s.badges}>
                {["clutch-badge", "good-firms-badge", "trustpilot-badge"].map((b) => (
                  <img key={b} src={`https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2F${b}.png&w=384&q=75`} alt={b.replace(/-/g, " ")} loading="lazy" />
                ))}
                <img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fdesign-rush-badge.png&w=640&q=75" alt="DesignRush" loading="lazy" />
              </div>
            </div>

            <FormCard
              className={`${s.contactForm}`}
              chipText="Let's talk"
              title={<>Tell Us About <span className={s.grad}>Your App</span></>}
              subtitle="Drop your details and a publishing specialist will get back to you fast."
              formId="contact_form"
              idPrefix="c"
              onSuccess={handleFormSuccess}
            />
          </div>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className={s.siteFooter}>
        <div className={`${s.wrap} ${s.footerRow}`}>
          <img src="https://www.appsters.io/_next/image?url=%2Fimages%2Fmobile-app-studio%2Fft-logo.png&w=256&q=75" alt="Appsters" width={140} height={40} loading="lazy" />
          <nav className={s.footerLinks} aria-label="Legal">
            <a href="https://www.appsters.io/term-and-condition" target="_blank" rel="noopener">Terms of use</a>
            <a href="https://www.appsters.io/privacy-policy" target="_blank" rel="noopener">Privacy policy</a>
          </nav>
          <nav className={s.footerSocial} aria-label="Social">
            <a href="https://www.facebook.com/appsters1" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.linkedin.com/company/app-sters/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://www.instagram.com/app.sters" target="_blank" rel="noopener">Instagram</a>
          </nav>
        </div>
        <div className={`${s.wrap} ${s.footerLegal}`}>
          <p>Appsters.io &copy; {new Date().getFullYear()} All rights reserved. Apple, App Store, Google Play and other store names are trademarks of their respective owners. Appsters is not affiliated with Apple or Google.</p>
        </div>
      </footer>

      {/* ===== MOBILE BAR ===== */}
      <div className={s.mobileBar}>
        <a href={SITE_PHONE_LINK}>Call now</a>
        <button type="button" onClick={openChat}>Chat</button>
        <button className={s.mobileBarQuote} type="button" onClick={openForm}>Get a quote</button>
      </div>

      {/* ===== POPUP ===== */}
      <PopupModal show={modalOpen} onClose={closeForm} onSuccess={handleFormSuccess} />
    </div>
  );
}
