import React from 'react';
import Helmet from 'react-helmet';
import PortfolioStyle from '../styles/PortfolioStyle';

const projects = [
  {
    number: '01',
    name: 'Citeral',
    type: 'Applied AI / RAG',
    description:
      'A multi-tenant AI workspace for private documents and curated knowledge, built around hybrid retrieval, scoped authorization and inspectable citations instead of black-box answers.',
    proof: 'Hybrid RAG · PostgreSQL RLS · pgvector · source inspection',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'Python', 'Cloudflare Workers AI'],
    live: 'https://citeral.vercel.app/',
    code: 'https://github.com/Juiceyyyy/Citeral',
  },
  {
    number: '02',
    name: 'WhatsTheOdds',
    type: 'Sports intelligence',
    description:
      'A full-stack sports intelligence product combining historical and live data, match forecasting, odds comparison, bet tracking, authentication and payments.',
    proof: '300k+ historical matches · prediction workflows · auth + payments',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Stripe', 'Python'],
    live: 'https://whatstheodds.vercel.app/',
    code: null,
  },
  {
    number: '03',
    name: 'AlphEdge',
    type: 'Quantitative systems',
    description:
      'An open-source Indian-equity research system for momentum ranking, inverse-volatility sizing, market-regime controls, forward tracking and a guarded Zerodha workflow.',
    proof: 'NSE research · backtesting · regime controls · broker-safe design',
    stack: ['Python', 'pandas', 'FastAPI', 'GitHub Actions', 'Zerodha Kite'],
    live: 'https://alph-edge.vercel.app/',
    code: 'https://github.com/Juiceyyyy/AlphEdge',
  },
  {
    number: '04',
    name: 'FaceTrack',
    type: 'Computer vision',
    description:
      'A real-time recognition system with multi-angle registration, detection analytics and a FastAPI service layer for end-to-end computer vision workflows.',
    proof: '98% recognition accuracy · 40% fewer false negatives in project testing',
    stack: ['Python', 'OpenCV', 'InsightFace', 'FastAPI', 'React', 'Supabase'],
    live: 'https://facetrack-dbit.vercel.app/',
    code: 'https://github.com/Juiceyyyy/FaceTrack',
  },
];

const toolkit = [
  {
    title: 'Core engineering',
    lead: 'The tools I reach for most.',
    items: ['Python', 'SQL', 'JavaScript / TypeScript', 'UNIX', 'REST APIs', 'Git'],
  },
  {
    title: 'Backend & data',
    lead: 'Where most of my production work lives.',
    items: ['FastAPI', 'PostgreSQL', 'Snowflake', 'Informatica / IICS', 'Supabase', 'ETL / ELT'],
  },
  {
    title: 'AI & quantitative',
    lead: 'Systems that reason over data.',
    items: ['RAG', 'pgvector', 'Computer Vision', 'Time-series research', 'Backtesting', 'ML workflows'],
  },
  {
    title: 'Product & cloud',
    lead: 'Enough frontend and infra to ship end-to-end.',
    items: ['Next.js', 'React', 'Vercel', 'Cloudflare', 'GitHub Actions', 'AWS / GCP / Azure'],
  },
];

const metrics = [
  { value: 'Capgemini', label: 'Software Developer · enterprise data engineering' },
  { value: '300k+', label: 'historical matches powering sports-data workflows' },
  { value: '98%', label: 'FaceTrack recognition accuracy in project testing' },
  { value: '3×', label: 'Anthropic Claude certifications' },
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
      <meta name="theme-color" content="#0d1117" />
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

    <div className="topline shell" aria-label="Quick links">
      <a className="topline-name" href="#top">
        Joshua Menezes
      </a>
      <div className="topline-links">
        <a href="mailto:joshuamenezes65@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/joshuamenezes-/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Juiceyyyy" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="resume-pill" href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">
          Resume ↓
        </a>
      </div>
    </div>

    <main id="main">
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software Developer · Capgemini · Mumbai</p>
          <h1>
            I build <span>data-intensive systems</span> that turn complexity into useful decisions.
          </h1>
          <p className="hero-intro">
            I work across Python, backend and data engineering, applied AI and quantitative
            systems — from enterprise data workflows to products spanning RAG, sports
            intelligence, market research and computer vision.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">
              Download resume
            </a>
            <a className="button button-secondary" href="mailto:joshuamenezes65@gmail.com">
              Connect with me
            </a>
            <a className="button button-quiet" href="#work">
              See selected work ↓
            </a>
          </div>

          <div className="hero-proof">
            <span>Python / Backend / Data</span>
            <span>Applied AI</span>
            <span>Quantitative systems</span>
            <span>Full-stack shipping</span>
          </div>
        </div>

        <aside className="signal-card" aria-label="Professional snapshot">
          <div className="signal-header">
            <span className="signal-dot" aria-hidden="true" />
            <span>Recruiter snapshot</span>
          </div>
          <div className="signal-row">
            <span>Current role</span>
            <strong>Software Developer at Capgemini</strong>
          </div>
          <div className="signal-row">
            <span>Strongest fit</span>
            <strong>Python · Backend · Data Engineering</strong>
          </div>
          <div className="signal-row">
            <span>Differentiator</span>
            <strong>Applied AI · Quantitative Systems</strong>
          </div>
          <div className="signal-row">
            <span>Education</span>
            <strong>Computer Engineering · Cyber Security Honors</strong>
          </div>
          <div className="signal-actions">
            <a href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">Resume ↗</a>
            <a href="mailto:joshuamenezes65@gmail.com">Email ↗</a>
          </div>
        </aside>
      </section>

      <section className="metric-band" aria-label="Selected proof points">
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
            <p className="section-kicker">Selected work</p>
            <h2>Projects that show how I think and build.</h2>
          </div>
          <p className="section-copy">
            Each one combines engineering depth with a real product outcome — data models, APIs,
            deployment, interfaces and the decisions around making the system reliable enough to use.
          </p>
        </div>

        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.name}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>

              <div className="project-title-row">
                <h3>{project.name}</h3>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>

              <p>{project.description}</p>
              <div className="project-proof">{project.proof}</div>

              <ul className="tag-list" aria-label={project.name + ' technology stack'}>
                {project.stack.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="project-links">
                <a className="project-link-primary" href={project.live} target="_blank" rel="noreferrer">
                  View live product ↗
                </a>
                {project.code ? (
                  <a href={project.code} target="_blank" rel="noreferrer">
                    Source code ↗
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

      <section className="section shell toolkit-section" id="toolkit">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Engineering toolkit</p>
            <h2>The stack recruiters usually want to scan first.</h2>
          </div>
          <p className="section-copy">
            My strongest overlap is Python + data + backend engineering, with enough product,
            cloud and AI experience to carry systems end-to-end.
          </p>
        </div>

        <div className="toolkit-grid">
          {toolkit.map(group => (
            <article className="toolkit-card" key={group.title}>
              <div className="toolkit-top">
                <h3>{group.title}</h3>
                <span>{group.lead}</span>
              </div>
              <ul>
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell experience-section" id="experience">
        <div className="section-heading compact">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>Production work first. Independent depth alongside it.</h2>
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
              <div className="role-tags">
                <span>Snowflake</span>
                <span>Informatica</span>
                <span>SQL</span>
                <span>Python</span>
                <span>UNIX</span>
              </div>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">2022 — 2025</div>
            <div className="timeline-body">
              <div className="role-line">
                <h3>Chairperson & technology leadership</h3>
                <span>ACM-DBIT · TEKNACK Gaming Studios</span>
              </div>
              <p>
                Progressed through ACM-DBIT leadership to Chairperson, leading a 27-member chapter
                team across technical workshops, events and student-community initiatives while
                contributing to TEKNACK Gaming Studios for three years.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="about-copy">
          <p className="section-kicker">About</p>
          <h2>I like messy data, measurable outcomes and systems that actually get used.</h2>
          <p>
            I studied Computer Engineering at Don Bosco Institute of Technology, Mumbai, with
            Honors in Cyber Security. The work I keep gravitating toward sits at the intersection
            of software, data and decision-making.
          </p>
          <p>
            That has taken me from enterprise data engineering to evidence-grounded AI, sports
            prediction, systematic market research, computer vision and payments.
          </p>
        </div>

        <div className="credential-stack">
          <article className="credential-card credential-accent">
            <span>Education</span>
            <h3>Bachelor’s in Computer Engineering</h3>
            <p>Don Bosco Institute of Technology, Mumbai · 2021–2025</p>
            <small>Honors in Cyber Security</small>
          </article>
          <article className="credential-card">
            <span>Anthropic certifications</span>
            <h3>Claude Developer · Architect · Associate</h3>
            <p>
              Three Claude certifications across development, architecture and foundational
              platform knowledge.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Seen enough? Here’s the fastest way to reach me.</h2>
            <p>
              I’m particularly interested in software, Python/backend, data-intensive, applied-AI
              and quantitative engineering opportunities.
            </p>
          </div>

          <div className="contact-panel">
            <a className="contact-primary" href="mailto:joshuamenezes65@gmail.com">
              <span>Email</span>
              <strong>joshuamenezes65@gmail.com</strong>
              <b>↗</b>
            </a>
            <a className="contact-row" href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">
              <span>Resume</span>
              <strong>Download latest CV</strong>
              <b>↓</b>
            </a>
            <a
              className="contact-row"
              href="https://www.linkedin.com/in/joshuamenezes-/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Professional profile</strong>
              <b>↗</b>
            </a>
            <a
              className="contact-row"
              href="https://github.com/Juiceyyyy"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>Code & open-source work</strong>
              <b>↗</b>
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
