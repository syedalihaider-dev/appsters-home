"use client";

import { useEffect } from "react";

export default function AndroidDevelopmentServicesPage({ markup }) {
  useEffect(() => {
    const root = document.querySelector(".android-lp");
    if (!root) return undefined;

    const menuButton = root.querySelector(".menu-toggle");
    const menu = root.querySelector(".nav-links");
    const closeMenu = () => {
      menuButton?.setAttribute("aria-expanded", "false");
      if (menu) menu.dataset.open = "false";
    };

    menuButton?.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(isOpen));
      if (menu) menu.dataset.open = String(isOpen);
    });

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link || !root.contains(link)) return;
      const target = root.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      closeMenu();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", link.getAttribute("href"));
    };

    root.addEventListener("click", handleAnchorClick);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton?.focus();
      }
    };
    root.addEventListener("keydown", handleKeyDown);

    const handleCaseStudyClick = () => {
      document.dispatchEvent(new CustomEvent("requestCaseStudy", { detail: { caseStudy: "fintech" } }));
    };
    const caseStudyButton = root.querySelector('[data-case-study="fintech"]');
    caseStudyButton?.addEventListener("click", handleCaseStudyClick);

    const forms = [...root.querySelectorAll("form")];
    const formHandlers = forms.map((form) => {
      const submit = async (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const submitButton = form.querySelector('[type="submit"]');
        const status = form.querySelector(".form-status");
        const originalLabel = submitButton?.innerHTML;
        const values = Object.fromEntries(new FormData(form).entries());
        values.pageUrl = window.location.href;

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = "Sending…";
        }
        if (status) status.textContent = "";

        try {
          const response = await fetch(form.dataset.existingApi || "/api/lp-android-development-services", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          if (!response.ok) {
            const result = await response.json().catch(() => ({}));
            throw new Error(result.message || "We could not send your details. Please try again.");
          }

          if (typeof window.dataLayer !== "undefined") {
            window.dataLayer.push({ event: "lead_form_submit", form_id: form.id || form.dataset.platform || "android-lp" });
          }
          window.location.assign("/lp/android-development-services/thank-you");
        } catch (error) {
          if (status) status.textContent = error.message || "Submission failed. Please check your connection.";
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = originalLabel;
          }
        }
      };

      form.addEventListener("submit", submit);
      return () => form.removeEventListener("submit", submit);
    });

    return () => {
      root.removeEventListener("click", handleAnchorClick);
      root.removeEventListener("keydown", handleKeyDown);
      caseStudyButton?.removeEventListener("click", handleCaseStudyClick);
      formHandlers.forEach((remove) => remove());
    };
  }, []);

  return (
    <div className="android-lp">
      <div className="android" dangerouslySetInnerHTML={{ __html: markup }} />
    </div>
  );
}
