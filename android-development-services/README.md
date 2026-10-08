# Appsters Android landing page

## Preview and files
Open index.html, or serve this folder with your normal local web server. Keep styles.css, script.js, and assets/ next to index.html. All fonts and artwork are local. No external JavaScript libraries or build tools are required.

## Integration
1. Suggested route: /lp/android-developers. This is a new suggestion; the existing /lp/mobile-app-developers route is unchanged.
2. For Next.js, split each semantic section into its own JSX component and CSS Module following the actual project's conventions. Use a page-specific header/footer. Do not import unrelated site layouts.
3. Copy assets to the project's public asset location and update their paths. Preserve meaningful alt text and empty decorative alt text where appropriate.
4. Replace only the demo submit listener in script.js with the project's existing LP form handler. The demo validates locally and never sends a lead or simulates success. Both forms retain these captured source field names: name, countryCode, phone, email, service, budget, timeline, description. The service value is Android App.
5. Inspect the real /api/lp-mobile-app-developers implementation and match its payload serialization, validation, security requirements, and mailing process. The backend code is not included and compatibility beyond captured field names is not verified. Preserve /lp/mobile-app-developers/thank-you for the existing success flow unless a different new-page redirect is explicitly agreed. No new API service is supplied.
6. Set the final canonical URL after the production domain/route is confirmed. Page title and description are already platform-specific. Test anchor navigation, both forms, keyboard use, and target devices before publishing.

## Copy and artwork provenance
The new service, hiring, process, and FAQ copy is drafted for this platform campaign. It is proposed scope and marketing copy, not a verified claim of staff credentials or guaranteed outcomes. Confirm the service offering with the business before publishing. No new reviews, clients, success metrics, or case studies were invented. The three company-wide figures are reproduced from the existing supplied landing-page handoff, not newly independently verified. Existing portfolio descriptions and source images are preserved verbatim and explicitly labeled as shared examples rather than platform-exclusive native implementations.

android-hero.png is original AI-generated conceptual artwork with a transparent background. It is a flattened raster, not a real project screen, screenshot crop, or layered source. The product planning board is editable HTML/CSS. The Appsters logo, portfolio images and local font are reused from the prior package; confirm usage rights for production.

## Technical references used for copy
- SwiftUI and UIKit interoperability: https://developer.apple.com/swiftui/
- TestFlight beta feedback: https://developer.apple.com/testflight/
- Android adaptive layouts: https://developer.android.com/develop/ui/compose/build-adaptive-apps

This is a static frontend handoff. It includes no server, lead database, analytics, or mailing implementation. It is not yet a live deployment.

## Single-file version
standalone.html embeds the styles, script, images, and font in one HTML file. Use index.html plus its supporting files for maintainable production integration. Both versions use the same local-only demo form handler.

Responsive layouts checked at 390, 768, 1024, and 1440 pixels with no horizontal overflow and all images loaded. Mobile menu and FAQ interactions checked for each page; required-field validation and honest demo submission behavior checked using the shared form handler.

## Expanded portfolio and reviews
The review section matches the supplied reference using the existing landing page's Trustpilot (4.5/5, 20 reviews), Clutch (5.0/5, 12 reviews), and GoodFirms (5.0/5, 10 reviews) copy and links. Figures are reproduced from the supplied content rather than newly verified live ratings.

All five existing portfolio examples now appear in large featured panels: Mic2Money, MINDE, My Tank, Global Reflex, and StorySign. Their source descriptions, feature labels, product artwork, and case-study URLs are retained. The digital wallet showcase follows StorySign, including the supplied healthcare, e-commerce and food-delivery cards. All showcase metrics are reproduced from the previously approved reference-based section. These shared examples do not imply native iOS/Android implementation or platform-exclusive results.

The wallet's View Full Case Study button retains the requestCaseStudy event with detail.caseStudy='fintech'. Its actual destination URL is still required before publishing. Do not invent a case-study URL.

## Section fragments and preview files
sections/ contains reusable HTML fragments for the review section, each of the five featured portfolio panels, and the complete digital wallet showcase. They use the shared styles.css rules; convert them into individual React components and CSS Modules when integrating into the actual project.

The *-preview.jpg files are screenshots for review only. They are not source assets and are not embedded in the landing page. All actual page artwork is in assets/, with provenance in asset-manifest.json. The four reference-derived showcase images are AI-derived flattened artwork from the supplied reference, not original layered designs.

## Header and experience section refresh
Navigation, hero typography, spacing, lighting and CTA styling have been refined. The former four-tile product board is replaced by a detailed, editable HTML/CSS device-interface composition. The iOS illustration shows a schedule app and interface details; Android shows complementary phone/tablet layouts. These are labeled illustrative interface concepts, not real client screenshots or performance evidence. No new client results or reviews are added.
