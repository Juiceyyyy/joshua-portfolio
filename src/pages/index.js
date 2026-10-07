import React from 'react';
import Helmet from 'react-helmet';
import PortfolioStyle from '../styles/PortfolioStyle';

const projects = [
  {
    number: '01',
    name: 'Citeral',
    type: 'Applied AI / RAG',
    description:
      'Multi-tenant AI workspace for private documents and curated knowledge, with hybrid retrieval, scoped authorization and inspectable citations.',
    highlights: 'Hybrid RAG · PostgreSQL RLS · pgvector · source inspection',
    stack: 'Next.js · TypeScript · Supabase · Python · Cloudflare Workers AI',
    live: 'https://citeral.vercel.app/',
    code: 'https://github.com/Juiceyyyy/Citeral',
  },
  {
    number: '02',
    name: 'WhatsTheOdds',
    type: 'Sports intelligence',
    description:
      'Full-stack sports intelligence product combining historical and live data, match forecasting, odds comparison, bet tracking, authentication and payments.',
    highlights: '300k+ historical matches · prediction workflows · auth + payments',
    stack: 'Next.js · FastAPI · PostgreSQL · Supabase · Stripe · Python',
    live: 'https://whatstheodds.vercel.app/',
    code: null,
  },
  {
    number: '03',
    name: 'AlphEdge',
    type: 'Quantitative systems',
    description:
      'Open-source Indian-equity research system for momentum ranking, inverse-volatility sizing, regime controls, forward tracking and a guarded Zerodha workflow.',
    highlights: 'NSE research · backtesting · market-regime controls · broker-safe execution design',
    stack: 'Python · pandas · FastAPI · GitHub Actions · Zerodha Kite',
    live: 'https://alph-edge.vercel.app/',
    code: 'https://github.com/Juiceyyyy/AlphEdge',
  },
  {
    number: '04',
    name: 'FaceTrack',
    type: 'Computer vision',
    description:
      'Real-time recognition system with multi-angle registration, detection analytics and a FastAPI service layer.',
    highlights: '98% recognition accuracy · 40% fewer false negatives in project testing',
    stack: 'Python · OpenCV · InsightFace · FastAPI · React · Supabase',
    live: 'https://facetrack-dbit.vercel.app/',
    code: 'https://github.com/Juiceyyyy/FaceTrack',
  },
];

const capabilities = [
  ['Languages', 'Python, SQL, JavaScript / TypeScript, C/C++, UNIX'],
  ['Backend & data', 'FastAPI, PostgreSQL, Snowflake, Informatica / IICS, Supabase, ETL / ELT'],
  ['AI & quantitative', 'RAG, pgvector, computer vision, time-series research, backtesting, ML workflows'],
  ['Product & cloud', 'Next.js, React, GitHub Actions, Vercel, Cloudflare, AWS / GCP / Azure'],
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joshua Menezes',
  url: 'https://joshua-menezes.vercel.app/',
  email: 'mailto:joshuamenezes65@gmail.com',
  jobTitle: 'Software Developer',
  worksFor: { '@type': 'Organization', name: 'Capgemini' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Don Bosco Institute of Technology, Mumbai' },
  sameAs: [
    'https://github.com/Juiceyyyy',
    'https://www.linkedin.com/in/joshuamenezes-/',
  ],
};

const PortfolioPage = () => (
  <>
    <PortfolioStyle />

    <Helmet>
      <html lang="en" />
      <title>Joshua Menezes — Software Engineer</title>
      <meta
        name="description"
        content="Joshua Menezes is a software engineer in Mumbai working across Python, backend and data engineering, applied AI, and quantitative systems."
      />
      <meta
        name="keywords"
        content="Joshua Menezes, software engineer, Python developer, backend engineer, data engineer, FastAPI, Snowflake, applied AI, quantitative systems, Mumbai"
      />
      <meta name="theme-color" content="#f3f1ea" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://joshua-menezes.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Joshua Menezes — Software Engineer" />
      <meta
        property="og:description"
        content="Python, backend and data engineering, applied AI, and quantitative systems."
      />
      <meta property="og:url" content="https://joshua-menezes.vercel.app/" />
      <meta property="og:site_name" content="Joshua Menezes" />
      <meta name="twitter:card" content="summary" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    <a className="skip-link" href="#main">
      Skip to content
    </a>

    <header className="site-header">
      <a className="brand" href="#top" aria-label="Joshua Menezes — home">
        Joshua Menezes
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </nav>

      <div className="header-actions">
        <a
          className="header-link"
          href="https://www.linkedin.com/in/joshuamenezes-/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="resume-link" href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">
          Resume
        </a>
      </div>
    </header>

    <main id="main">
      <section className="hero shell" id="top">
        <div className="hero-main">
          <p className="eyebrow">Software Developer · Capgemini · Mumbai</p>
          <h1>Software engineer building data-intensive products.</h1>
          <p className="hero-intro">
            I work across Python, backend and data engineering, applied AI and quantitative
            systems. Professionally, I build enterprise data workflows. Independently, I ship
            end-to-end products spanning RAG, sports intelligence, market research and computer
            vision.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">
              Download resume
            </a>
            <a className="button button-outline" href="mailto:joshuamenezes65@gmail.com">
              Email me
            </a>
          </div>

          <div className="hero-links" aria-label="Profile links">
            <a href="https://github.com/Juiceyyyy" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/joshuamenezes-/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <aside className="profile-facts" aria-label="Professional summary">
          <div className="fact">
            <span>Current</span>
            <strong>Software Developer at Capgemini</strong>
          </div>
          <div className="fact">
            <span>Core</span>
            <strong>Python · Backend · Data Engineering</strong>
          </div>
          <div className="fact">
            <span>Also building</span>
            <strong>Applied AI · Quantitative Systems</strong>
          </div>
          <div className="fact">
            <span>Education</span>
            <strong>Computer Engineering · Honors in Cyber Security</strong>
          </div>
          <div className="fact fact-last">
            <span>Certifications</span>
            <strong>3× Anthropic Claude certified</strong>
          </div>
        </aside>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <div>
            <h2>Systems I’ve built.</h2>
            <p>
              These are the projects that best represent my current engineering work — data,
              backend architecture, applied models and production-facing product decisions.
            </p>
          </div>
        </div>

        <div className="project-list">
          {projects.map(project => (
            <article className="project-row" key={project.name}>
              <div className="project-number">{project.number}</div>

              <div className="project-body">
                <div className="project-heading">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                  </div>

                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live ↗
                    </a>
                    {project.code ? (
                      <a href={project.code} target="_blank" rel="noreferrer">
                        Code ↗
                      </a>
                    ) : (
                      <span>Private repo</span>
                    )}
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <dl className="project-details">
                  <div>
                    <dt>Highlights</dt>
                    <dd>{project.highlights}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{project.stack}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="earlier-work">
          <span>Earlier work</span>
          <p>
            <strong>UniPay</strong> — QR + biometric event payments
            <i>/</i>
            <strong>RedLife</strong> — donor mapping + blood-bank inventory
          </p>
        </div>
      </section>

      <section className="section shell split-section" id="experience">
        <div className="section-heading split-heading">
          <p className="section-label">Experience</p>
          <div>
            <h2>Professional experience.</h2>
          </div>
        </div>

        <div className="experience-grid">
          <div className="experience-list">
            <article className="experience-item">
              <div className="experience-top">
                <div>
                  <h3>Software Developer</h3>
                  <p>Capgemini · Mumbai</p>
                </div>
                <time>Aug 2025 — Present</time>
              </div>
              <ul>
                <li>
                  Build and support ETL/ELT pipelines for enterprise data warehousing and cloud
                  migration using Informatica, Snowflake, SQL and UNIX-based workflows.
                </li>
                <li>
                  Work across data integration, transformation and validation in enterprise
                  delivery environments, with Python as part of the broader engineering stack.
                </li>
              </ul>
            </article>

            <article className="experience-item">
              <div className="experience-top">
                <div>
                  <h3>Chairperson</h3>
                  <p>ACM-DBIT & TEKNACK Gaming Studios</p>
                </div>
                <time>2022 — 2025</time>
              </div>
              <ul>
                <li>
                  Progressed through chapter leadership to Chairperson and led a 27-member team
                  across technical events, workshops and student-community initiatives.
                </li>
              </ul>
            </article>
          </div>

          <aside className="capabilities" aria-label="Technical capabilities">
            <p className="aside-title">Technical focus</p>
            {capabilities.map(([title, items]) => (
              <div className="capability" key={title}>
                <span>{title}</span>
                <p>{items}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="section-heading">
          <p className="section-label">About</p>
          <div>
            <h2>Engineering with context, not just code.</h2>
            <p>
              I studied Computer Engineering at Don Bosco Institute of Technology, Mumbai, with
              Honors in Cyber Security. I’m drawn to problems where software has to make sense of
              real data and produce an outcome someone can act on.
            </p>
            <p>
              That has taken me from enterprise data engineering to sports prediction,
              evidence-grounded AI, systematic market research, computer vision and payments.
            </p>
          </div>
        </div>

        <div className="about-meta">
          <div>
            <span>Education</span>
            <strong>Bachelor’s in Computer Engineering</strong>
            <p>Don Bosco Institute of Technology, Mumbai · 2021–2025</p>
            <small>Honors in Cyber Security</small>
          </div>
          <div>
            <span>Anthropic certifications</span>
            <strong>Developer · Architect — Professional · Associate</strong>
            <p>Three Claude certifications across development, architecture and foundations.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="section-label section-label-light">Contact</p>
            <h2>Recruiting, collaboration or an interesting engineering problem.</h2>
          </div>

          <div className="contact-copy">
            <p>
              I’m particularly interested in software, Python/backend, data-intensive,
              applied-AI and quantitative engineering work.
            </p>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:joshuamenezes65@gmail.com">
                Email Joshua
              </a>
              <a
                className="button button-light-outline"
                href="/resume.pdf"
                download="Joshua_Menezes_Resume.pdf"
              >
                Download resume
              </a>
            </div>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/joshuamenezes-/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="https://github.com/Juiceyyyy" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>Joshua Menezes</span>
        <span>Mumbai, India · 2026</span>
      </div>
    </footer>
  </>
);

export default PortfolioPage;
