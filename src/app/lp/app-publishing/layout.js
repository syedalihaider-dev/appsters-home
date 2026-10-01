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
  //===== Meta Tags =====
  title: "App Publishing Services | Launch on the App Store & Google Play | Appsters",
  description:
    "Appsters publishes your app on the Apple App Store and Google Play. Developer accounts, store listings, compliance, submission and rejection fixes handled end to end.",
  //===== OG Tags =====
  openGraph: {
    title: "App Publishing Services | Appsters",
    description:
      "Get your app live on the App Store and Google Play. Accounts, listings, compliance, submission and rejection fixes handled for you.",
    url: "/lp/app-publishing",
    siteName: "Appsters",
    locale: "en_US",
    type: "website",
  },
  //===== Canonical =====
  alternates: { canonical: "/lp/app-publishing" },
  //===== Robots =====
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
  //===== Theme Color =====
  themeColor: "#0E1330",
  other: {},
};

export default function AppPublishingLayout({ children }) {
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
