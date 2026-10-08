import { readFileSync } from "node:fs";
import path from "node:path";
import IosAppDevelopmentPage from "@/components/ios-app-development/IosAppDevelopmentPage";

const sourceHtml = readFileSync(
  path.join(process.cwd(), "src/components/ios-app-development/index.html"),
  "utf8",
);
const markup = sourceHtml.match(/<body class="ios">([\s\S]*?)<\/body>/)?.[1] || "";

export default function IosAppDevelopmentRoute() {
  return <IosAppDevelopmentPage markup={markup} />;
}
