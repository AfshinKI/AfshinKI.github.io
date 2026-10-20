# Innovetron

Static consulting website for [innovetron.com](https://innovetron.com/). HTML, CSS, and vanilla JavaScript; no build step.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Run the isolated enquiry-form checks with:

```sh
node --test tests/*.test.cjs
```

## Review and deployment

Submit changes through a pull request. The `main` branch is the production GitHub Pages source; merging updates the live site. Preview an unmerged branch with `https://raw.githack.com/INNOVETRON/innovetron.github.io/BRANCH/index.html` or the local server.

See [design notes](docs/design-notes.md) for content provenance and original photography. The contact form uses Web3Forms for email delivery, with in-page confirmation and a branded native-POST fallback. See [contact delivery](docs/contact-delivery.md) for configuration, recipient changes, limits, and verification. Google Fonts provides typography with system-font fallbacks.

## Hosting

The production repository is `INNOVETRON/innovetron.github.io`, transferred from
`AfshinKI/AfshinKI.github.io`. GitHub Pages publishes `main` from the repository
root with custom domain `innovetron.com` and HTTPS enforced. Keep the `CNAME`
file and Pages domain setting consistent. The `www` DNS CNAME should target
`innovetron.github.io`; the apex uses GitHub Pages A records.

OpenPaint remains in the personal account at
<https://afshinki.github.io/openpaint/>. Its website no longer inherits the
Innovetron organization domain.
