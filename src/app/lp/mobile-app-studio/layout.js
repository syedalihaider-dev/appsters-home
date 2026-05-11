import { Montserrat, DM_Sans } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
});

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Mobile App Studio - Custom App Development Services",
  description: "We are a leading mobile app studio providing end-to-end development services for iOS and Android. Transform your ideas into high-performing mobile applications.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Mobile App Studio - Custom App Development Services',
    description: 'We are a leading mobile app studio providing end-to-end development services for iOS and Android. Transform your ideas into high-performing mobile applications.',
    url: '/lp/mobile-app-studio',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/lp/mobile-app-studio' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (
    <div className={`${montserrat.variable} ${dmSans.variable}`}>
       {children}


       {/* Zendesk Chat Snippet */}
       <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10" strategy="afterInteractive" />
       <Script id="zendesk-chat" strategy="afterInteractive">
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
           }(document, "script");

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

           document.addEventListener('click', function(e) {
               if (e.target.closest('.chat') || e.target.closest('.chat-btn')) {
                   e.preventDefault();
                   if (window.$zopim && window.$zopim.livechat && window.$zopim.livechat.window) {
                       window.$zopim.livechat.window.toggle();
                   }
               }
           });
         `}
       </Script>
    </div>
  );
}
