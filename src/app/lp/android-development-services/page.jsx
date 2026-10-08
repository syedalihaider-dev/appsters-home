import { readFileSync } from "node:fs";
import path from "node:path";
import AndroidDevelopmentServicesPage from "@/components/android-development-services/AndroidDevelopmentServicesPage";

const sourceHtml = readFileSync(
  path.join(process.cwd(), "src/components/android-development-services/index.html"),
  "utf8",
);
const sourceBody = sourceHtml.match(/<body class="android">([\s\S]*?)<\/body>/)?.[1] || "";

export default function AndroidDevelopmentServicesRoute() {
  return <AndroidDevelopmentServicesPage markup={sourceBody} />;
}
