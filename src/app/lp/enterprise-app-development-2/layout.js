import { Space_Grotesk, Manrope, Space_Mono } from 'next/font/google'
import Script from 'next/script'

// Global design-system styles for this LP (lime/neon system, Bootstrap-grid compatible)
import './styles/eapp2-base.css'
import './styles/eapp2-sections.css'
import './styles/eapp2-animations.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Enterprise App Development Company — Appsters',
  description:
    'Appsters builds enterprise-grade mobile apps for iOS, Android & cross-platform. Secure, scalable, and compliant solutions for large organizations.',
  alternates: { canonical: '/lp/enterprise-app-development-2' },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
}

export default function EnterpriseAppDevelopment2Layout({ children }) {
  return (
    <div
      className={`eapp2 ${spaceGrotesk.variable} ${manrope.variable} ${spaceMono.variable}`}
    >
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
            if (window.zE) { window.zE('messenger', 'open'); }
          }
          function setButtonURL() {
            if (window.zE) { window.zE('messenger:on', 'open', function () {}); }
          }
          window.addEventListener('load', function () { setButtonURL(); });
          document.addEventListener('click', function (e) {
            var target = e.target.closest('.chat, .chat-btn');
            if (target) { e.preventDefault(); toggleChat(); }
          });
        `}
      </Script>
    </div>
  )
}
