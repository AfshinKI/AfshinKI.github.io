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

Submit changes through a pull request. The `main` branch is the production GitHub Pages source; merging updates the live site. Preview an unmerged branch with `https://raw.githack.com/AfshinKI/AfshinKI.github.io/BRANCH/index.html` or the local server.

See [design notes](docs/design-notes.md) for content provenance and original photography. The contact form uses Web3Forms for email delivery, with in-page confirmation and a branded native-POST fallback. See [contact delivery](docs/contact-delivery.md) for configuration, recipient changes, limits, and verification. Google Fonts provides typography with system-font fallbacks.
