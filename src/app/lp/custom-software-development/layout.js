import { Outfit, DM_Sans } from "next/font/google";
import Script from "next/script";
import "@/components/CustomSoftwareDevelopment/CustomSoftwareDevelopment.css";
const outfit = Outfit({ subsets:["latin"], weight:["500","600","700","800"], variable:"--font-outfit" });
const dmSans = DM_Sans({ subsets:["latin"], weight:["400","500","600","700"], variable:"--font-dmsans" });
export const metadata = { title:"Custom Software Development Company | Appsters", description:"Custom web applications, SaaS platforms, enterprise systems and integrations.", alternates:{ canonical:"/lp/custom-software-development" } };
export default function Layout({children}) { return <div className={`custom-software-lp ${outfit.variable} ${dmSans.variable}`}>{children}<Script id="custom-software-zendesk" src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10" strategy="afterInteractive" /></div>; }
