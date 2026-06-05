import { spaceGrotesk, inter } from '@/font';
import './lp-styles.css';

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Affordable Top Mobile App Development Services",
  description: " We provide app development services to help you emerge as the market leader with tailored mobile apps that accelerate ROI for your business. ",
  //===== OG Tags =====
  openGraph: {
    title: 'Affordable Top Mobile App Development Services',
    description: ' We provide app development services to help you emerge as the market leader with tailored mobile apps that accelerate ROI for your business. ',
    url: '/lp/mobile-app-development-services',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/lp/mobile-app-development-services' },
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
    <div className={`${spaceGrotesk.variable} ${inter.variable} lp-mobile-app-wrapper`}>
      {children}
    </div>
  );
}
