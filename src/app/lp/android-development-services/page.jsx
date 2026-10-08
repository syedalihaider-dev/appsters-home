import { readFileSync } from "node:fs";
import path from "node:path";
import AndroidDevelopmentServicesPage from "@/components/android-development-services/AndroidDevelopmentServicesPage";

const sourceHtml = readFileSync(
  path.join(process.cwd(), "android-development-services/index.html"),
  "utf8",
);
const sourceBody = sourceHtml.match(/<body class="android">([\s\S]*?)<\/body>/)?.[1] || "";
const pageMarkup = sourceBody
  .replaceAll("assets/", "/android-development-services/assets/")
  .replaceAll(
    'data-existing-api="/api/lp-mobile-app-developers"',
    'data-existing-api="/api/lp-android-development-services"',
  );

export default function AndroidDevelopmentServicesRoute() {
  return <AndroidDevelopmentServicesPage markup={pageMarkup} />;
}
