import "@/components/android-development-services/android-development-services.css";

export const metadata = {
  title: "Hire Android Developers | Appsters",
  description:
    "Hire Android developers for your next app. Explore native development, existing app improvements, testing, and release support with Appsters.",
  alternates: { canonical: "/lp/android-development-services" },
  openGraph: {
    title: "Hire Android Developers | Appsters",
    description:
      "Android app development, existing app improvements, testing, and release support with Appsters.",
    url: "/lp/android-development-services",
    siteName: "Appsters",
    locale: "en_US",
    type: "website",
  },
};

export const viewport = { themeColor: "#080b09" };

export default function AndroidDevelopmentServicesLayout({ children }) {
  return children;
}
