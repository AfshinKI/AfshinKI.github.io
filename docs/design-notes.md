# Innovetron consulting redesign

## Positioning and content

Independent engineering consultancy covering electronics/PCB, FPGA/DSP, embedded firmware/system software, and agentic development pipelines. The principal appears in the About section without a portrait. No client logos, testimonials, company-size claims, invented results, or guaranteed delivery timelines are included.

Background was checked against the existing website and the owner's Overleaf résumé (`main.tex`) on 2026-09-13. Public-facing details retained: name, PhD/P.Eng credentials, Edmonton location, University of Alberta PhD, and technical background. Employer projects are not presented as Innovetron client work. Personal contact information and the résumé itself are not included in this repository.

Agentic development is a service requested by the owner. The diagram is an illustrative proposed workflow, not a claim about measured performance or completed client work.

## Visual identity and assets

Graphite, warm off-white, and restrained green; Manrope headings and DM Sans body type with system-font fallbacks. The original `figures/Innovetron_Logo.png` is used without modification in the header, footer, favicon, and touch icon. No runtime UI libraries or animation libraries are required.

The final editorial pass uses specific engineering descriptions, open service columns, larger supporting text, and a simpler workflow illustration. A malformed electronics option in the enquiry selector was also corrected; all four service links must preselect their matching option during browser verification.

The hero and social-sharing image use the existing `figures/circuit_sample.jpg`, a real Innovetron board photograph. A security review removed its EXIF metadata losslessly; visible pixels are unchanged. No generated photography is included.

## Styling repair

The first PR revision contained an invalid multiline font import introduced during CSS formatting after the initial browser checks. This caused the stylesheet to fail on a fresh load. Font loading now uses a separate HTML stylesheet link, keeping the local CSS independent of font loading. Verification must reload the final files after all edits.

## Verification and operating notes

Previewed in Chrome at desktop, 1440px, 768px, 390px, and 320px widths. No horizontal overflow at tested sizes; hero asset and fragment links resolve. Checked mobile navigation, service selection, and browser console. Keyboard focus styles, skip link, reduced-motion support, visible form labels, and native required/email validation are included.

Run `node --test tests/*.test.cjs` for isolated submission checks, service-option mappings, and CSS regression protection. Automated checks do not send email. The replacement contact integration also has a live inbox verification; see [contact delivery](contact-delivery.md).

Web3Forms handles contact delivery externally; Google Fonts provides typography. Content remains static HTML and the form has a native POST fallback when JavaScript is unavailable. Changes must be reviewed and merged through the PR before the production GitHub Pages site updates.
