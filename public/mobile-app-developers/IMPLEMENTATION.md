# Appsters neon asset and layout handoff

The page uses the live HTML captured on October 8, 2026 as its content authority. Both supplied PNGs informed only visual styling: near-black backgrounds, neon lime accents, fine grids, luminous borders, rounded forms, and product imagery beside case-study copy. The later user request explicitly adds the supplied fintech showcase after StorySign. That added section uses the wording and metrics visible in the supplied image.

## Files and assets

- `index.html`: complete responsive static preview.
- `content.html`: reusable semantic page markup, with source text, links, forms and inline icons.
- `source-5.css`, `source-6.css`: original page and popup component styles. Load both before `neon.css`.
- `neon.css`: editable reference-based styling, mobile overrides and keyboard focus treatment.
- `interactions.js`: mobile navigation and local-only form validation.
- `asset-catalog.html`: links and descriptions for every individual visual asset.
- `asset-manifest.json`: provenance, descriptions, types and raster dimensions.
- `verification.json`: content parity and form option inventory.

### Raster assets: original website files, not screenshot crops

| File in assets/ | Purpose |
|---|---|
| source-logo.png | Appsters brand mark |
| source-banner-mobile.png | Existing hero phone composition |
| source-trustpilot.jpg | Original platform mark; retained even where CSS hides it |
| source-clutch.png | Clutch review mark |
| source-goodfirms.png | GoodFirms review mark |
| source-mic2money-app-icon.png | Mic2Money app identity |
| source-mic2money-copy.png | Mic2Money product phones |
| source-mind-app-copy.png | MINDE product phones |
| source-my-tank-copy.png | My Tank product phones |
| source-global-reflex-copy.png | Global Reflex product phones |
| source-storysign-app-icon.png | StorySign app identity |
| source-story-sign-copy.png | StorySign product phones |

These files are separate, flattened source rasters. Their text and phone screens are not editable layers. They retain original product content and are scaled proportionally rather than recreated from the reference screenshots.

### Editable assets

- `original-icon-01.svg` through `original-icon-54.svg`: individual vectors extracted from source HTML, including CTA arrows, form symbols, rating stars, industry symbols and case-study features. The catalog records contextual descriptions. Inline versions remain in the page for inherited color and accessibility.
- `grid.svg`: original repeating 64px background grid.
- `glow.svg`: original scalable radial aura and orbit accent.
- Local `.woff2` files: original font dependencies referenced by the component stylesheet.

**Screenshot crops: none.** The supplied screenshots are styling references, not embedded page components. Buttons, panel borders, text, review stars, metrics, and forms remain HTML/CSS or inline SVG.

## Integrate into the project you are editing with Codex

1. Copy the package into your project's static/public folder, preserving relative asset paths. Open `index.html` to review the complete page.
2. For an existing application, insert `content.html` into its page template and load the styles in this order:

```html
<link rel="stylesheet" href="source-5.css">
<link rel="stylesheet" href="source-6.css">
<link rel="stylesheet" href="neon.css">
<script src="interactions.js" defer></script>
```

3. Keep the exported classes while using the source component styles. If converting to React, use `className`, camel-case SVG attributes and appropriate style objects; remove inline `onsubmit` and implement submission handlers in the framework.
4. Preserve the hero, review cards, six industries, five case studies, testimonials, eight process steps, guarantees, technologies, final contact and footer in their existing order. The hidden source popup form is also retained.
5. Replace the demo submission prevention with your approved backend handler. Preserve each form's own labels and options; the hero offers AI-powered app and Other, while the final form does not. Validate on the server and supply approved success/error copy. No endpoint or delivery behavior is invented.
6. Reconnect chat, scheduling and popup behavior to the application's existing integrations. Original hydration scripts and third-party tracking were excluded from this static handoff.
7. Review at 390px, 760px and desktop widths; verify keyboard focus, image loading and real backend submissions before release.

## Representative native components

Use the exported markup for exact page copy; this snippet illustrates the existing CTA and field structure:

```html
<a href="#contact" class="estimate">Get a Free Project Estimate</a>
<label for="project-name">Full name *</label>
<input id="project-name" name="name" type="text"
       autocomplete="name" required>
<button type="submit" class="estimate">Get My Free Estimate</button>
```

```css
.estimate { display:inline-flex; padding:16px 24px; border-radius:12px;
  background:#c6ff27; color:#0b1002; font-weight:700; }
.hero { display:grid; grid-template-columns:1fr .7fr 1fr; gap:24px; }
input,select,textarea { width:100%; min-width:0; box-sizing:border-box; }
@media(max-width:760px) { .hero { grid-template-columns:1fr; } }
```

## Verification and assumptions

All original text is preserved, allowing for HTML formatting whitespace. The page now has 12 sections: the 11 original sections plus the explicitly requested showcase after StorySign. The five original case studies and three original HTML forms remain. Two forms are visible; the third is a hidden popup. Individual raster files were decoded and checked. Desktop and 390px mobile rendering were inspected, and the mobile document has no horizontal overflow.

Neon color and grid spacing are visual estimates from the PNGs, not measured design tokens. Exact editable phone mockup layers were not provided. Source navigation includes fragment links such as Portfolio, Process and About with missing targets; these were preserved and require integration decisions. The preview supports native controls and mobile navigation, but backend delivery and third-party integrations require connection before production use.


## Alignment revision and added showcase

The missing row/column utilities have been restored. All sections share a maximum content width of 1480px and responsive gutters. The hero uses the reference's four desktop title lines, larger phone artwork, aligned form, and metrics bar. Existing case studies now use contained copy/image panels. Mobile navigation includes visible open/close states.

`#fintech-showcase` appears directly after `#storysign-case-study`. It contains the featured digital wallet and the healthcare, e-commerce and food-delivery cards from the supplied PNG. Every heading, description, metric, badge and CTA is editable HTML. The four new raster artworks are AI-derived using the built-in imagegen tool; they are visual reconstructions, not exact pixel crops or editable layered originals. Prompt specifications are saved in `image-prompts.json`. All new artwork is separately named `assets/reference-derived-*.png`, and new icons are `assets/showcase-icon-*.svg`.

The supplied image has no CTA destination URL. The new button dispatches `requestCaseStudy` with `{caseStudy: "fintech"}`. Bind that event to the approved case-study route when the URL is provided.

`hero-preview.jpg`, `showcase-preview.jpg`, `desktop-preview.jpg` and `mobile-preview.jpg` are browser screenshots for review only; they are not embedded page assets. `layout-checks.json` records checks at 390, 900, 1280 and 1672px.
