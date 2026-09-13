# Innovetron

Static consulting website for [innovetron.com](https://innovetron.com/). HTML, CSS, and vanilla JavaScript; no build step.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. Run the isolated enquiry-form checks with:

```sh
node --test tests/site.test.cjs
```

## Review and deployment

Submit changes through a pull request. The `main` branch is the production GitHub Pages source; merging updates the live site. Preview an unmerged branch with `https://raw.githack.com/AfshinKI/AfshinKI.github.io/BRANCH/index.html` or the local server.

See [design notes](docs/design-notes.md) for content provenance, generated imagery, and verification details. The contact form uses the existing Formspree endpoint. Google Fonts provides typography with system-font fallbacks.
