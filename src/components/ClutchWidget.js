"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ClutchWidget() {
  const initializeWidgets = () => {
    if (typeof window === "undefined") return;

    const clutch = window.CLUTCHCO;
    const goodfirms = window.GOODFIRMS;

    window.setTimeout(() => {
      if (clutch && typeof clutch.Init === "function") clutch.Init();
      if (goodfirms && typeof goodfirms.Init === "function") goodfirms.Init();
    }, 0);
  };

  useEffect(() => {
    initializeWidgets();
  }, []);

  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        onLoad={initializeWidgets}
      />

      <Script
        src="https://assets.goodfirms.co/assets/js/widget.min.js"
        strategy="afterInteractive"
        onLoad={initializeWidgets}
      />

      <div className="appsters-review-widgets">
        <div
          className="clutch-widget appsters-clutch-widget"
          data-url="https://widget.clutch.co"
          data-widget-type="1"
          data-height="40"
          data-nofollow="false"
          data-expandifr="true"
          data-darkbg="darkbg"
          data-clutchcompany-id="2569066"
        />
        <div
          className="goodfirm-widget appsters-goodfirms-widget"
          data-widget-type="goodfirms-widget-t9"
          data-widget-pattern="horizontal-inline"
          data-height="61"
          data-company-id="191188"
        />
      </div>
    </>
  );
}
