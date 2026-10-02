import { Outfit, DM_Sans } from "next/font/google";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

//===== Meta Data =====
export const metadata = {
  title: "App Development Company | Custom Mobile App Development Services | Appsters",
  description:
    "Appsters is a custom mobile app development company building iOS, Android and cross-platform apps for startups and enterprises. 4.8k apps delivered. Get a free quote.",
  openGraph: {
    title: "App Development Company | Appsters",
    description:
      "Custom iOS, Android and cross-platform app development for startups and enterprises. Get a free quote.",
    url: "/lp/app-development-company",
    siteName: "Appsters",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "/lp/app-development-company" },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {},
};

export const viewport = {
  themeColor: "#0E1330",
};

export default function AppDevelopmentCompanyLayout({ children }) {
  return (
    <div className={`${outfit.variable} ${dmSans.variable}`}>
      {children}

      {/* Zendesk Chat Snippet */}
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10"
        strategy="afterInteractive"
      />
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
