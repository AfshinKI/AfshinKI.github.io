# Innovetron consulting redesign

## Positioning and content

Independent engineering consultancy covering electronics/PCB, FPGA/DSP, embedded firmware/system software, and agentic development pipelines. The principal appears in the About section without a portrait. No client logos, testimonials, company-size claims, invented results, or guaranteed delivery timelines are included.

Background was checked against the existing website and the owner's Overleaf résumé (`main.tex`) on 2026-09-13. Public-facing details retained: name, PhD/P.Eng credentials, Edmonton location, University of Alberta PhD, and technical background. Employer projects are not presented as Innovetron client work. Personal contact information and the résumé itself are not included in this repository.

Agentic development is a service requested by the owner. The diagram is an illustrative proposed workflow, not a claim about measured performance or completed client work.

## Visual identity and assets

Graphite, warm off-white, and pale green; Manrope headings and DM Sans body type with local fallback fonts. The custom circuit mark is inline SVG. No runtime UI libraries or animation libraries are required.

`figures/engineering-hero.webp` and `figures/engineering-social.jpg` derive from one image created using the built-in image generation tool. They are conceptual brand imagery, not photographs of a client product or company facility. The WebP hero is approximately 127 KB. The JPEG is used for social sharing metadata, including future LinkedIn links.

Final generation prompt:

> Use case: ads-marketing. Asset type: wide website hero photograph for a premium independent electronics engineering consultancy. Create a photorealistic editorial macro photograph of a sophisticated graphite-black printed circuit board, a central square unbranded FPGA package, fine copper traces, precision passive components, with elegant subtle lime-green reflected light and cool silver metallic details. Three-quarter low angle, extraordinary realistic material detail, selective depth of field. Board occupies right two thirds; left third fades into almost black negative space. Dark charcoal studio background. Restrained premium industrial photography, confident and technically credible, no sci-fi holograms, no glowing circuit lines, no people, no text, no logos, no watermark. Wide landscape 1792x1024 composition. This is a conceptual brand image, not an actual delivered product.

## Verification and operating notes

Previewed in Chrome at desktop, 1440px, 768px, 390px, and 320px widths. No horizontal overflow at tested sizes; hero asset and fragment links resolve. Checked mobile navigation, service selection, and browser console. Keyboard focus styles, skip link, reduced-motion support, visible form labels, and native required/email validation are included.

Run `node --test tests/site.test.cjs` for mocked submission success, HTTP/network/abort failure handling, and duplicate-send protection. These checks do not contact Formspree. Live inbox delivery has not been tested.

The existing Formspree endpoint is retained. Google Fonts and Formspree remain external services. Content is static HTML; the form has a native POST fallback when JavaScript is unavailable. Changes must be reviewed and merged through the PR before the production GitHub Pages site updates.
