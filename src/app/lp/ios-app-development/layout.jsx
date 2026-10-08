import "@/components/ios-app-development/ios-app-development.css";

export const metadata = {
  title: "Hire iOS Developers | Appsters",
  description:
    "Hire iOS developers for your next app. Explore native development, existing app improvements, testing, and release support with Appsters.",
  alternates: { canonical: "/lp/ios-app-development" },
  openGraph: {
    title: "Hire iOS Developers | Appsters",
    description:
      "iOS app development, existing app improvements, testing, and release support with Appsters.",
    url: "/lp/ios-app-development",
    siteName: "Appsters",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = { themeColor: "#080b09" };

export default function IosAppDevelopmentLayout({ children }) {
  return children;
}
