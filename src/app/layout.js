import 'bootstrap/dist/css/bootstrap.min.css';
import { bigShoulders, interTight } from '@/font';
import "./globals.css";
import GlobalLayoutWrapper from "@/components/layout/GlobalLayoutWrapper";
import Script from 'next/script';
import GoogleConversionTracker from '@/components/ui/GoogleConversionTracker';

export const metadata = {
  title: "Tech Company That Provides App Solutions - Appsters",
  description: "As a digital tech company we offer innovative mobile app solutions to every type of business &amp; industry. Give your business the tech overhaul it deserves today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16476280714"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16476280714');
          `}
        </Script>

        {/* ZenDesk Chat Snippet */}
        <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10" strategy="afterInteractive" />
        <Script id="zendesk-config" strategy="afterInteractive">
          {`
            window.$zopim || function (a, d) {
                var b = $zopim = function (a) {
                        b._.push(a)
                    },
                    c = b.s = a.createElement(d);
                a = a.getElementsByTagName(d)[0];
                b.set = function (a) {
                    b.set._.push(a)
                };
                b._ = [];
                b.set._ = [];
                c.async = !0;
                c.setAttribute("charset", "utf-8");
                c.src = "";
                b.t = +new Date;
                c.type = "text/javascript";
                a.parentNode.insertBefore(c, a)
            }
            (document, "script");

            $zopim(function () {
                function a(a) {
                    1 <= a && $zopim.livechat.window.show()
                }
                $zopim.livechat.setOnUnreadMsgs(a)
            });

            function setButtonURL() {
                $zopim.livechat.window.show();
            }

            function toggleChat() {
                $zopim.livechat.window.toggle();
            }

            // Global listener for elements with class 'chat' or 'talkBtn'
            document.addEventListener('click', function(e) {
                if (e.target.closest('.chat') || e.target.closest('[class*="talkBtn"]')) {
                    if (window.$zopim && window.$zopim.livechat) {
                        $zopim.livechat.window.toggle();
                    }
                }
            });
          `}
        </Script>

        <GlobalLayoutWrapper>
          <GoogleConversionTracker />
          {children}
        </GlobalLayoutWrapper>
      </body>
    </html>
  );
}
