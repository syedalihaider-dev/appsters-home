"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ClutchWidget() {
  const initializeWidget = () => {
    if (typeof window === "undefined") return;

    const clutch = window.CLUTCHCO;
    if (!clutch || typeof clutch.Init !== "function") return;

    window.setTimeout(() => {
      clutch.Init();
    }, 0);
  };

  useEffect(() => {
    initializeWidget();
  }, []);

  return (
    <>
      <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
        onLoad={initializeWidget}
      />

      <div
        className="clutch-widget w-100 d-flex justify-content-center align-items-center mt-4"
        data-url="https://widget.clutch.co"
        data-widget-type="1"
        data-height="40"
        data-nofollow="false"
        data-expandifr="true"
        data-darkbg="darkbg"
        data-clutchcompany-id="2569066"
      />
    </>
  );
}