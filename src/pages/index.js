import React from 'react';
import Helmet from 'react-helmet';
import PortfolioStyle from '../styles/PortfolioStyle';

const projects = [
  {
    number: '01',
    name: 'Citeral',
    label: 'Evidence-grounded AI workspace',
    description:
      'A multi-tenant RAG platform for specialized assistants that work from private documents, curated knowledge and inspectable evidence. Built around hybrid retrieval, scoped access and citations rather than black-box answers.',
    proof: 'Hybrid RAG · PostgreSQL RLS · inspectable citations',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'Python', 'Cloudflare Workers AI'],
    live: 'https://citeral.vercel.app/',
    code: 'https://github.com/Juiceyyyy/Citeral',
  },
  {
    number: '02',
    name: 'WhatsTheOdds',
    label: 'Sports intelligence platform',
    description:
      'A data-heavy sports product that combines match data, statistics and prediction workflows with authentication, subscriptions and a production-facing interface. The data layer is designed around a 300k+ match historical corpus.',
    proof: '300k+ historical matches · auth + payments',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Stripe', 'Python'],
    live: 'https://whatstheodds.vercel.app/',
    code: null,
  },
  {
    number: '03',
    name: 'AlphEdge',
    label: 'Systematic NSE research',
    description:
      'An open-source Indian-equity research system for momentum ranking, inverse-volatility sizing, market-regime controls and forward tracking. It also includes a deliberately guarded, locally controlled Zerodha order-planning workflow.',
    proof: 'Momentum research · regime controls · broker-safe workflow',
    stack: ['Python', 'pandas', 'Backtesting', 'FastAPI', 'GitHub Actions', 'Zerodha Kite'],
    live: 'https://alph-edge.vercel.app/',
    code: 'https://github.com/Juiceyyyy/AlphEdge',
  },
  {
    number: '04',
    name: 'FaceTrack',
    label: 'Real-time computer vision',
    description:
      'A full-stack face-recognition system with multi-angle registration, detection analytics and a FastAPI service layer. Project testing reached 98% recognition accuracy, with multi-angle enrollment reducing false negatives by 40%.',
    proof: '98% recognition accuracy · 40% fewer false negatives',
    stack: ['Python', 'FastAPI', 'OpenCV', 'InsightFace', 'React', 'Supabase'],
    live: 'https://facetrack-dbit.vercel.app/',
    code: 'https://github.com/Juiceyyyy/FaceTrack',
  },
];

const toolkit = [
  {
    title: 'Core engineering',
    items: ['Python', 'SQL', 'JavaScript / TypeScript', 'UNIX', 'REST APIs', 'Git'],
  },
  {
    title: 'Backend & data',
    items: ['FastAPI', 'PostgreSQL', 'Snowflake', 'Informatica / IICS', 'Supabase', 'ETL / ELT'],
  },
  {
    title: 'AI & quantitative',
    items: ['RAG', 'pgvector', 'Computer Vision', 'Time-series research', 'Backtesting', 'ML workflows'],
  },
  {
    title: 'Product & cloud',
    items: ['Next.js', 'React', 'Vercel', 'Cloudflare', 'GitHub Actions', 'AWS / GCP / Azure'],
  },
];

const metrics = [
  { value: '300k+', label: 'historical matches in a sports-data corpus' },
  { value: '98%', label: 'recognition accuracy in FaceTrack project testing' },
  { value: '40%', label: 'fewer false negatives after multi-angle registration' },
  { value: '3', label: 'Anthropic Claude certifications' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joshua Menezes',
  url: 'https://joshua-menezes.vercel.app/',
  email: 'mailto:joshuamenezes65@gmail.com',
  jobTitle: 'Software Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Capgemini',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Don Bosco Institute of Technology, Mumbai',
  },
  sameAs: [
    'https://github.com/Juiceyyyy',
    'https://www.linkedin.com/in/joshuamenezes-/',
  ],
  knowsAbout: [
    'Python',
    'Backend Engineering',
    'Data Engineering',
    'Applied AI',
    'Quantitative Systems',
    'Snowflake',
    'FastAPI',
    'PostgreSQL',
  ],
};

const PortfolioPage = () => (
  <>
    <PortfolioStyle />
    <Helmet>
      <html lang="en" />
      <title>Joshua Menezes — Software Engineer | Python, Data & AI</title>
      <meta
        name="description"
        content="Joshua Menezes is a software engineer in Mumbai building Python, backend, data, applied-AI and quantitative systems."
      />
      <meta
        name="keywords"
        content="Joshua Menezes, software engineer, Python developer, backend engineer, data engineer, FastAPI, Snowflake, applied AI, quantitative systems, Mumbai"
      />
      <meta name="theme-color" content="#0b0d10" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://joshua-menezes.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Joshua Menezes — Software Engineer" />
      <meta
        property="og:description"
        content="Python, backend and data engineering, applied AI and quantitative systems."
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
        JM<span>/</span>
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#toolkit">Toolkit</a>
        <a href="#about">About</a>
      </nav>
      <a className="header-cta" href="mailto:joshuamenezes65@gmail.com">
        Get in touch
      </a>
    </header>

    <main id="main">
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer · Mumbai, India</p>
          <h1>I build systems where data, software and decisions meet.</h1>
          <p className="hero-intro">
            I&apos;m Joshua Menezes, a Software Developer at Capgemini. I work across Python,
            backend and data engineering, applied AI and quantitative systems — from enterprise
            data workflows to production-facing products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Juiceyyyy"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-link hero-link"
              href="https://www.linkedin.com/in/joshuamenezes-/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="signal-card" aria-label="Current engineering profile">
          <div className="signal-topline">
            <span className="status-dot" aria-hidden="true" />
            <span>Current signal</span>
          </div>
          <div className="signal-row">
            <span>Role</span>
            <strong>Software Developer · Capgemini</strong>
          </div>
          <div className="signal-row">
            <span>Focus</span>
            <strong>Python · Backend · Data</strong>
          </div>
          <div className="signal-row">
            <span>Edge</span>
            <strong>Applied AI · Quant systems</strong>
          </div>
          <div className="signal-row">
            <span>Building</span>
            <strong>Citeral · WhatsTheOdds · AlphEdge</strong>
          </div>
          <div className="signal-footer">
            <span>2026</span>
            <span>Mumbai / IST</span>
          </div>
        </aside>
      </section>

      <section className="metric-band" aria-label="Project highlights">
        <div className="shell metric-grid">
          {metrics.map(metric => (
            <div className="metric" key={metric.value + metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected systems</p>
            <h2>Work that reflects how I engineer now.</h2>
          </div>
          <p className="section-copy">
            Fewer demo projects, more end-to-end systems: real data models, APIs, retrieval,
            production constraints, deployment and user-facing surfaces.
          </p>
        </div>

        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.name}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.label}</span>
              </div>
              <div className="project-title-row">
                <h3>{project.name}</h3>
                <span className="project-mark" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p>{project.description}</p>
              <div className="project-proof">{project.proof}</div>
              <ul className="tag-list" aria-label={project.name + ' technology stack'}>
                {project.stack.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live product
                </a>
                {project.code ? (
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Source
                  </a>
                ) : (
                  <span>Private codebase</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="earlier-work">
          <span>Earlier shipped work</span>
          <p>
            <strong>UniPay</strong> — QR + biometric event payments
            <i aria-hidden="true">/</i>
            <strong>RedLife</strong> — donor mapping + blood-bank inventory
          </p>
        </div>
      </section>

      <section className="section shell experience-section" id="experience">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>Production context, then independent depth.</h2>
          </div>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">Aug 2025 — Present</div>
            <div className="timeline-body">
              <div className="role-line">
                <h3>Software Developer</h3>
                <span>Capgemini · Mumbai</span>
              </div>
              <p>
                Build and support enterprise ETL/ELT and data-warehouse workflows across
                Informatica, Snowflake, SQL and UNIX environments, with Python as part of the
                broader engineering stack.
              </p>
              <p>
                My professional work gives me the reliability, validation and production-support
                side of engineering; my independent products push deeper into backend systems,
                applied AI and quantitative research.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">2022 — 2025</div>
            <div className="timeline-body">
              <div className="role-line">
                <h3>Student technology leadership</h3>
                <span>ACM-DBIT · TEKNACK Gaming Studios</span>
              </div>
              <p>
                Progressed through ACM-DBIT leadership to Chairperson, leading a 27-member
                chapter team and organizing technical workshops, events and
                student-community initiatives. I also contributed to TEKNACK Gaming Studios for
                three years.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell" id="toolkit">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Engineering toolkit</p>
            <h2>The stack changes. The systems thinking stays.</h2>
          </div>
          <p className="section-copy">
            I&apos;m strongest where Python, data and backend engineering overlap, and comfortable
            carrying that work into the product layer when needed.
          </p>
        </div>

        <div className="toolkit-grid">
          {toolkit.map(group => (
            <article className="toolkit-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="about-copy">
          <p className="section-kicker">About</p>
          <h2>I like problems with messy data and a measurable outcome.</h2>
          <p>
            I studied Computer Engineering at Don Bosco Institute of Technology, Mumbai, with
            Honors in Cyber Security. The projects I keep building sit at the intersection of
            engineering and decision-making: sports prediction, evidence-grounded AI, systematic
            market research and computer vision.
          </p>
          <p>
            I care about shipping useful systems, being explicit about limitations, and making
            technical work understandable to the people who use it.
          </p>
        </div>

        <div className="credential-stack">
          <article className="credential-card">
            <span>Education</span>
            <h3>B.E. Computer Engineering</h3>
            <p>Don Bosco Institute of Technology, Mumbai · 2021–2025</p>
            <small>Honors in Cyber Security</small>
          </article>
          <article className="credential-card">
            <span>Anthropic certifications</span>
            <h3>Claude Developer · Architect · Associate</h3>
            <p>
              Claude Certified Developer, Claude Certified Architect — Professional, and Claude
              Certified Associate.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <p className="section-kicker">Contact</p>
          <h2>Have a hard data or engineering problem?</h2>
          <p>
            I&apos;m especially interested in software, Python/backend, data-intensive, applied-AI
            and quantitative engineering work.
          </p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:joshuamenezes65@gmail.com">
              joshuamenezes65@gmail.com
            </a>
            <a
              className="text-link light-link"
              href="https://www.linkedin.com/in/joshuamenezes-/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-link light-link"
              href="https://github.com/Juiceyyyy"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>Joshua Menezes · 2026</span>
        <span>Software engineering / data / AI / quantitative systems</span>
      </div>
    </footer>
  </>
);

export default PortfolioPage;
