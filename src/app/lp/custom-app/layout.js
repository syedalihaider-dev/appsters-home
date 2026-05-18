import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Custom App Development Services - Appsters",
  description: "We are a leading mobile app studio providing custom development services.",
  //===== OG Tags =====
  openGraph: {
    title: 'Custom App Development Services - Appsters',
    description: 'We are a leading mobile app studio providing custom development services.',
    url: '/lp/custom-app',
    siteName: 'Appsters',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/lp/custom-app' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

import Header from "../../../components/CustomApp/Header/Header";
import FooterSection from "../../../components/CustomApp/FooterSection/FooterSection";

export default function RootLayout({ children }) {
  return (
    <div className={`${poppins.variable}`}>
       <Header />
       {children}
       <FooterSection />
    </div>
  );
}
