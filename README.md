# Joshua Menezes — Portfolio

My personal software engineering portfolio. I work with Python, backend and data engineering, applied AI, and quantitative systems.

**Website:** https://joshua-menezes.vercel.app

## About

A focused, responsive, dark-themed portfolio featuring:
- Selected projects: Citeral, WhatsTheOdds, AlphEdge, and FaceTrack
- Technology stack, measurable work, and professional experience
- Education, certifications, and contact links
- A downloadable one-page résumé

## Run locally

The site is built with Gatsby 2, React, and styled-components. Node 18 is specified in `.nvmrc` for compatibility with the existing Gatsby build.

```bash
corepack enable
yarn install
yarn develop
```

Open `http://localhost:8000`.

Build and preview the production site:

```bash
yarn build
yarn serve
```

Vercel deploys automatically from the GitHub `main` branch. No paid services or environment secrets are required.

## Source layout

```text
src/
  pages/
    index.js                 Portfolio content, projects, links, SEO
    404.js                   Custom not-found page
  styles/
    PortfolioStyle.js        Theme, sections, responsive design, interactions
static/
  favicon.svg               JM brand mark
  robots.txt                Search-crawler rules
  sitemap.xml               Sitemap
scripts/
  ensure-resume.js          Produces /resume.pdf before each build
gatsby-config.js            Gatsby plugin and site configuration
gatsby-browser.js           Removes obsolete service-worker registrations
package.json                Dependencies and scripts
yarn.lock                   Dependency lockfile
.nvmrc                      Node version
.gitignore                  Ignored build artifacts
LICENSE                     Source-code license
```

The résumé file is generated before builds from the validated embedded PDF payload in `scripts/ensure-resume.js`. The generated `static/resume.pdf` is ignored in Git and served at `/resume.pdf`. The résumé combines the four role-focused CV versions into one general software-engineering version while retaining a single-page layout.

## Maintain

- Edit project details, copy, skills, experience, and links in `src/pages/index.js`.
- Edit layouts, colors, hover-fill animations, and breakpoints in `src/styles/PortfolioStyle.js`.
- Edit the favicon in `static/favicon.svg`.
- Replace the validated résumé payload when the resume changes.
- Keep `public/`, `.cache/`, generated PDFs, and `node_modules/` out of version control.

## License

MIT License. Copyright © 2026 Joshua Menezes. See [LICENSE](LICENSE) for the terms.
