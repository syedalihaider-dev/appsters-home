import { Montserrat, DM_Sans } from 'next/font/google'
import Script from 'next/script'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dmsans',
  display: 'swap',
})

export const metadata = {
  title: 'Enterprise App Development Company — Appsters',
  description:
    'Appsters builds enterprise-grade mobile apps for iOS, Android & cross-platform. Secure, scalable, and compliant solutions for large organizations.',
  alternates: { canonical: '/lp/enterprise-app-development' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function EnterpriseAppDevelopmentLayout({ children }) {
  return (
    <div className={`${montserrat.variable} ${dmSans.variable}`}>
      {children}

      {/* Zendesk chat widget */}
      <Script
        id="ze-snippet"
        src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10"
        strategy="afterInteractive"
      />
      <Script id="ze-config" strategy="afterInteractive">
        {`
          function toggleChat() {
            if (window.zE) {
              window.zE('messenger', 'open');
            }
          }
          function setButtonURL() {
            if (window.zE) {
              window.zE('messenger:on', 'open', function () {});
            }
          }
          window.addEventListener('load', function () {
            setButtonURL();
          });
          document.addEventListener('click', function (e) {
            var target = e.target.closest('.chat, .chat-btn');
            if (target) {
              e.preventDefault();
              toggleChat();
            }
          });
        `}
      </Script>
    </div>
  )
}
