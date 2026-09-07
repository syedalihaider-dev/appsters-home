import LocationLPPage from "@/components/location-lp/LocationLPPage";
import { locationLpData } from "@/data/locationLpData";

const pageData = locationLpData["mobile-app-development-austin"];

export const metadata = pageData?.metadata || {
  title: "Mobile App Development Company - Appsters",
  description: "Premier mobile app development company delivering custom iOS, Android, and cross-platform apps.",
};

export default function Page() {
  return <LocationLPPage data={pageData} />;
}
