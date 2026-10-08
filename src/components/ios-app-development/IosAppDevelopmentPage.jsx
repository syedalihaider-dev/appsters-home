"use client";

import { useEffect } from "react";

export default function IosAppDevelopmentPage({ markup }) {
  useEffect(() => {
    const root = document.querySelector(".ios-lp");
    if (!root) return undefined;

    const menuButton = root.querySelector(".menu-toggle");
    const menu = root.querySelector(".nav-links");
    const closeMenu = () => {
      menuButton?.setAttribute("aria-expanded", "false");
      if (menu) menu.dataset.open = "false";
    };
    const toggleMenu = () => {
      const open = menuButton?.getAttribute("aria-expanded") !== "true";
      menuButton?.setAttribute("aria-expanded", String(open));
      if (menu) menu.dataset.open = String(open);
    };
    menuButton?.addEventListener("click", toggleMenu);

    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (link && root.contains(link)) {
        const target = root.querySelector(link.getAttribute("href"));
        if (target) {
          event.preventDefault();
          closeMenu();
          target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start",
          });
          window.history.replaceState(null, "", link.getAttribute("href"));
        }
      }
    };
    root.addEventListener("click", handleClick);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton?.focus();
      }
    };
    root.addEventListener("keydown", handleKeyDown);

    const caseStudyButton = root.querySelector('[data-case-study="fintech"]');
    const handleCaseStudyClick = () => {
      document.dispatchEvent(new CustomEvent("requestCaseStudy", { detail: { caseStudy: "fintech" } }));
    };
    caseStudyButton?.addEventListener("click", handleCaseStudyClick);

    const forms = [...root.querySelectorAll("form")];
    const formHandlers = forms.map((form) => {
      const handleSubmit = async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const button = form.querySelector('[type="submit"]');
        const status = form.querySelector(".form-status");
        const originalLabel = button?.innerHTML;
        const values = Object.fromEntries(new FormData(form).entries());
        values.pageUrl = window.location.href;

        if (button) {
          button.disabled = true;
          button.textContent = "Sending…";
        }
        if (status) status.textContent = "";

        try {
          const response = await fetch(form.dataset.existingApi || "/api/lp-ios-app-development", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          if (!response.ok) {
            const result = await response.json().catch(() => ({}));
            throw new Error(result.message || "We could not send your details. Please try again.");
          }

          if (typeof window.dataLayer !== "undefined") {
            window.dataLayer.push({ event: "lead_form_submit", form_id: form.dataset.platform || "ios-lp" });
          }
          window.location.assign("/lp/ios-app-development/thank-you");
        } catch (error) {
          if (status) status.textContent = error.message || "Submission failed. Please check your connection.";
          if (button) {
            button.disabled = false;
            button.innerHTML = originalLabel;
          }
        }
      };
      form.addEventListener("submit", handleSubmit);
      return () => form.removeEventListener("submit", handleSubmit);
    });

    return () => {
      menuButton?.removeEventListener("click", toggleMenu);
      root.removeEventListener("click", handleClick);
      root.removeEventListener("keydown", handleKeyDown);
      caseStudyButton?.removeEventListener("click", handleCaseStudyClick);
      formHandlers.forEach((remove) => remove());
    };
  }, []);

  return (
    <div className="ios-lp">
      <div className="ios" dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
}
