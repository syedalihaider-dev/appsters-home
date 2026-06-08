import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./globals.css";

import Script from "next/script";
import GlobalLayoutWrapper from "@/components/layout/GlobalLayoutWrapper";
import Popup from "@/components/layout/Popup";

import { bigShoulders, interTight } from "@/font";

export const metadata = {
  title: "Tech Company That Provides App Solutions - Appsters",
  description:
    "As a digital tech company we offer innovative mobile app solutions to every type of business & industry. Give your business the tech overhaul it deserves today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${bigShoulders.variable}`}>

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N3PBLKRR');
            `,
          }}
        />

        {/* Google Ads / gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16476280714"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16476280714');
          `}
        </Script>

        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3PBLKRR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Zendesk Chat */}
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10"
          strategy="afterInteractive"
        />

        <Script id="zendesk-init" strategy="afterInteractive">
          {`
            window.toggleChat = function() {
              if(typeof zE !== 'undefined') {
                zE('webWidget', 'toggle');
              } else if(window.$zopim && window.$zopim.livechat){
                window.$zopim.livechat.window.toggle();
              }
            };

            document.addEventListener('click', function(e){
              if(e.target.closest('.chat') || e.target.closest('.chat-btn') || e.target.closest('[class*="talkBtn"]')){
                e.preventDefault();
                window.toggleChat();
              }
            });
          `}
        </Script>

        {/* App Wrapper */}
        <GlobalLayoutWrapper>
          {children}
        </GlobalLayoutWrapper>

        <Popup />
      </body>
    </html>
  );
}