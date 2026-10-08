# Joshua Menezes — Portfolio

My personal software engineering portfolio, focused on Python, backend/data engineering, applied AI, and quantitative systems.

**Live:** https://joshua-menezes.vercel.app

## What’s on the site

A short introduction, results from selected projects (Citeral, WhatsTheOdds, AlphEdge, FaceTrack), an engineering toolkit, professional experience, certifications, and direct ways to reach me.

## Local development

The site uses Gatsby 2, React, and styled-components. The deployment is connected to Vercel. Node 18 is specified by `.nvmrc` for compatibility with this legacy Gatsby build.

```bash
corepack enable
yarn install --frozen-lockfile
yarn develop
```

Then open `http://localhost:8000`. For a production build:

```bash
yarn build
yarn serve
```

Gatsby's compiled `public/` and `.cache/` directories are generated build artifacts and are **not tracked**.

## Project structure

```text
src/pages/index.js            Main portfolio content
src/pages/404.js              Not-found page
src/styles/PortfolioStyle.js  Theme, layout, accessibility and hover styles
static/favicon.svg            JM monogram used on the site and browser tab
scripts/ensure-resume.js      Creates the downloadable resume before building
static/robots.txt             Crawler rules
static/sitemap.xml            Canonical homepage
gatsby-config.js              Minimal Gatsby configuration
```

The downloadable file is served at `/resume.pdf`. The build generates it from the compact, versioned resume payload in `scripts/ensure-resume.js`; it is intentionally not duplicated in the repository as a separate binary. The résumé combines content from the AI/FinTech, Core SWE, Data/Backend, and Quant resume variants, preserving their one-page, understated format.

## Maintenance

- Update copy, experience, projects and external links in `src/pages/index.js`.
- Adjust the dark theme and animation styles in `src/styles/PortfolioStyle.js`.
- Update the monogram in `static/favicon.svg`.
- Update the resume payload if the CV changes.
- Keep the repository free of generated builds, unused images/fonts, and retired portfolio templates.

## License

MIT for the site source; see [LICENSE](LICENSE). Includes attribution to the original MIT-licensed portfolio template by Brittany Chiang. Project descriptions, personal information and résumé belong to their respective owners.
