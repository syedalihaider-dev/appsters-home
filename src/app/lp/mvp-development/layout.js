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
  title: "MVP Development Services - Fast-Track Your Product",
  description: "Scale your startup with our professional MVP development services. We build high-performing, scalable Minimum Viable Products to validate your ideas quickly.",
  //===== OG Tags =====
  openGraph: {
    title: 'MVP Development Services - Fast-Track Your Product',
    description: 'Scale your startup with our professional MVP development services. We build high-performing, scalable Minimum Viable Products to validate your ideas quickly.',
    url: '/lp/mvp-development',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/lp/mvp-development' },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
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
           window.toggleChat = function() {
              if(typeof zE !== 'undefined') {
                zE('webWidget', 'toggle');
              } else if(window.$zopim && window.$zopim.livechat){
                window.$zopim.livechat.window.toggle();
              }
           };

           window.setButtonURL = function() {
               window.toggleChat();
           };

           document.addEventListener('click', function(e) {
               if (e.target.closest('.chat') || e.target.closest('.chat-btn') || e.target.closest('[class*="talkBtn"]')) {
                   e.preventDefault();
                   window.toggleChat();
               }
           });
         `}
       </Script>
    </div>
  );
}
