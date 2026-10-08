# Landing page developer handoff

Open index.html to preview the responsive landing page. Keep the assets folder beside it. The fintech showcase is immediately after StorySign.

## Included
- index.html: complete page
- content.html: page markup fragment
- source-5.css, source-6.css, neon.css: styles, in that load order
- interactions.js: mobile menu and demo form validation
- assets/: images, SVG icons and fonts
- IMPLEMENTATION.md: detailed integration guidance
- asset-catalog.html and asset-manifest.json: asset descriptions and provenance
- preview images and validation records

## Before publishing
The forms currently validate locally and prevent submission. Connect them to the existing /api/lp-mobile-app-developers API using its current field names and payload contract, and retain the success redirect to /lp/mobile-app-developers/thank-you. This package does not contain the backend or mailing implementation.

Integrate the page at src/app/lp/mobile-app-developers/page.js with individual section folders, JSX files and CSS Modules under src/components/mobile-app-developers/. Preserve the existing LP metadata, components and page-specific header/footer; do not add the main site's header/footer. Inspect the actual project before integration.

The fintech View Full Case Study button still needs its destination URL. Its current handler emits a requestCaseStudy event. Check all navigation destinations and forms during integration.

The reference-derived PNG files are AI-derived flattened artwork, not editable layered originals or screenshot crops. Layout, copy and SVG assets remain editable.
