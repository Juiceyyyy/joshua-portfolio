import React from 'react';
import Helmet from 'react-helmet';
import PortfolioStyle from '../styles/PortfolioStyle';

const projects = [
  {
    number: '01',
    name: 'Citeral',
    type: 'Applied AI / RAG',
    description:
      'I built a multi-tenant AI workspace for private documents and curated knowledge, with hybrid retrieval, scoped authorization and inspectable citations instead of black-box answers.',
    proof:
      'I combined hybrid retrieval, PostgreSQL RLS, pgvector and source-level citations into one usable workflow.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'pgvector', 'Python', 'Cloudflare Workers AI'],
    live: 'https://citeral.vercel.app/',
    code: 'https://github.com/Juiceyyyy/Citeral',
  },
  {
    number: '02',
    name: 'WhatsTheOdds',
    type: 'Sports intelligence',
    description:
      'I built a full-stack sports intelligence product that combines historical and live data, match forecasting, odds comparison, bet tracking, authentication and payments.',
    proof:
      'I designed the data layer around 300k+ historical matches and carried the product through prediction, auth and payments.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase', 'Stripe', 'Python'],
    live: 'https://whatstheodds.vercel.app/',
    code: null,
  },
  {
    number: '03',
    name: 'AlphEdge',
    type: 'Quantitative systems',
    description:
      'I built an open-source Indian-equity research system for momentum ranking, inverse-volatility sizing, market-regime controls, forward tracking and a guarded Zerodha workflow.',
    proof:
      'I combined research, backtesting, regime controls and a deliberately guarded broker workflow in one system.',
    stack: ['Python', 'pandas', 'FastAPI', 'GitHub Actions', 'Zerodha Kite'],
    live: 'https://alph-edge.vercel.app/',
    code: 'https://github.com/Juiceyyyy/AlphEdge',
  },
  {
    number: '04',
    name: 'FaceTrack',
    type: 'Computer vision',
    description:
      'I built a real-time recognition system with multi-angle registration, detection analytics and a FastAPI service layer for end-to-end computer vision workflows.',
    proof:
      'I reached 98% recognition accuracy and reduced false negatives by 40% in project testing.',
    stack: ['Python', 'OpenCV', 'InsightFace', 'FastAPI', 'React', 'Supabase'],
    live: 'https://facetrack-dbit.vercel.app/',
    code: 'https://github.com/Juiceyyyy/FaceTrack',
  },
];

const toolkit = [
  {
    title: 'Core engineering',
    lead: 'These are the tools I reach for most.',
    items: ['Python', 'SQL', 'JavaScript / TypeScript', 'UNIX', 'REST APIs', 'Git'],
  },
  {
    title: 'Backend & data',
    lead: 'This is where most of my production work lives.',
    items: ['FastAPI', 'PostgreSQL', 'Snowflake', 'Informatica / IICS', 'Supabase', 'ETL / ELT'],
  },
  {
    title: 'AI & quantitative',
    lead: 'I use these when the system needs to reason over data.',
    items: ['RAG', 'pgvector', 'Computer Vision', 'Time-series research', 'Backtesting', 'ML workflows'],
  },
  {
    title: 'Product & cloud',
    lead: 'I use these to carry ideas through to something people can use.',
    items: ['Next.js', 'React', 'Vercel', 'Cloudflare', 'GitHub Actions', 'AWS / GCP / Azure'],
  },
];

const metrics = [
  {
    value: '300k+',
    kicker: 'Data scale',
    label: 'historical matches I structured into the sports-data platform',
  },
  {
    value: '98%',
    kicker: 'Computer vision',
    label: 'recognition accuracy I reached in FaceTrack project testing',
  },
  {
    value: '27',
    kicker: 'Leadership',
    label: 'people I led as ACM-DBIT Chairperson',
  },
  {
    value: '3×',
    kicker: 'AI credentials',
    label: 'Anthropic Claude certifications across developer, architect and associate tracks',
  },
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
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
      <a className="topline-name" href="#top" aria-label="Joshua Menezes — back to top">
        <img className="brand-mark" src="/favicon.svg" width="34" height="34" alt="" />
        <span>Joshua Menezes</span>
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
              Download my resume
            </a>
            <a className="button button-secondary" href="mailto:joshuamenezes65@gmail.com">
              Get in touch
            </a>
            <a className="button button-quiet" href="#work">
              Explore my work ↓
            </a>
          </div>

          <div className="hero-proof">
            <span>Python / Backend / Data</span>
            <span>Applied AI</span>
            <span>Quantitative systems</span>
            <span>Full-stack shipping</span>
          </div>
        </div>

        <aside className="signal-card" aria-label="Quick introduction">
          <div className="signal-header">
            <span className="signal-dot" aria-hidden="true" />
            <span>A quick introduction</span>
          </div>
          <div className="signal-row">
            <span>What I do now</span>
            <strong>I’m a Software Developer at Capgemini.</strong>
          </div>
          <div className="signal-row">
            <span>What I’m strongest at</span>
            <strong>Python · Backend · Data Engineering</strong>
          </div>
          <div className="signal-row">
            <span>What sets my work apart</span>
            <strong>Applied AI · Quantitative Systems</strong>
          </div>
          <div className="signal-row">
            <span>What I studied</span>
            <strong>Computer Engineering · Cyber Security Honors</strong>
          </div>
          <div className="signal-actions">
            <a href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">My resume ↗</a>
            <a href="mailto:joshuamenezes65@gmail.com">Email me ↗</a>
          </div>
        </aside>
      </section>

      <section className="proof-band" aria-label="A few numbers behind my work">
        <div className="shell proof-layout">
          <div className="proof-heading">
            <p className="section-kicker">At a glance</p>
            <h2>A few numbers behind my work.</h2>
            <p>
              I care about measurable outcomes, so I like showing the scale, results and
              responsibility behind the projects — not just the technology names.
            </p>
          </div>

          <div className="metric-grid">
            {metrics.map(metric => (
              <article className="metric" key={metric.value + metric.label}>
                <span className="metric-kicker">{metric.kicker}</span>
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-work" id="work">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2>These projects show how I think and build.</h2>
            </div>
            <p className="section-copy">
              I picked these because each one goes beyond a demo. I had to make decisions around
              data models, APIs, deployment, product behavior and reliability — and carry those
              decisions through to something usable.
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
                    View what I built ↗
                  </a>
                  {project.code ? (
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Read the code ↗
                    </a>
                  ) : (
                    <span>Private codebase</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="earlier-work">
            <span>I’ve also shipped</span>
            <p>
              <strong>UniPay</strong> — QR + biometric event payments
              <i aria-hidden="true">/</i>
              <strong>RedLife</strong> — donor mapping + blood-bank inventory
            </p>
          </div>
        </div>
      </section>

      <section className="section section-toolkit" id="toolkit">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Engineering toolkit</p>
              <h2>Here’s the stack I use to get from idea to working system.</h2>
            </div>
            <p className="section-copy">
              I’m strongest where Python, data and backend engineering overlap. I’m also
              comfortable moving into product, cloud and applied AI when the problem needs it.
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
        </div>
      </section>

      <section className="section section-experience" id="experience">
        <div className="shell">
          <div className="section-heading compact">
            <div>
              <p className="section-kicker">Experience</p>
              <h2>My professional work gives me production context; my own projects let me go deeper.</h2>
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
                  I build and support enterprise ETL/ELT and data-warehouse workflows across
                  Informatica, Snowflake, SQL and UNIX environments, with Python as part of my
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
                  I progressed through ACM-DBIT leadership to Chairperson, led a 27-member chapter
                  team across technical workshops and events, and contributed to TEKNACK Gaming
                  Studios for three years.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-about" id="about">
        <div className="shell about-section">
          <div className="about-copy">
            <p className="section-kicker">About me</p>
            <h2>I like messy data, measurable outcomes and systems that actually get used.</h2>
            <p>
              I studied Computer Engineering at Don Bosco Institute of Technology, Mumbai, with
              Honors in Cyber Security. I keep gravitating toward problems where software has to
              make sense of real data and produce an outcome someone can act on.
            </p>
            <p>
              That’s taken me from enterprise data engineering to evidence-grounded AI, sports
              prediction, systematic market research, computer vision and payments.
            </p>
          </div>

          <div className="credential-stack">
            <article className="credential-card credential-accent">
              <span>What I studied</span>
              <h3>Bachelor’s in Computer Engineering</h3>
              <p>Don Bosco Institute of Technology, Mumbai · 2021–2025</p>
              <small>Honors in Cyber Security</small>
            </article>
            <article className="credential-card">
              <span>What I’m certified in</span>
              <h3>Claude Developer · Architect · Associate</h3>
              <p>
                I hold three Anthropic Claude certifications across development, architecture and
                foundational platform knowledge.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div>
            <p className="section-kicker">Let’s connect</p>
            <h2>If my work looks relevant to what you’re building, I’d be glad to talk.</h2>
            <p>
              I’m particularly interested in software, Python/backend, data-intensive, applied-AI
              and quantitative engineering opportunities.
            </p>
          </div>

          <div className="contact-panel">
            <a className="contact-primary" href="mailto:joshuamenezes65@gmail.com">
              <span>Email me</span>
              <strong>joshuamenezes65@gmail.com</strong>
              <b>↗</b>
            </a>
            <a className="contact-row" href="/resume.pdf" download="Joshua_Menezes_Resume.pdf">
              <span>My resume</span>
              <strong>Download my latest CV</strong>
              <b>↓</b>
            </a>
            <a
              className="contact-row"
              href="https://www.linkedin.com/in/joshuamenezes-/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>See my professional profile</strong>
              <b>↗</b>
            </a>
            <a
              className="contact-row"
              href="https://github.com/Juiceyyyy"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <strong>Browse my code and open-source work</strong>
              <b>↗</b>
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>Joshua Menezes · 2026</span>
        <span>I build across software, data, AI and quantitative systems.</span>
      </div>
    </footer>
  </>
);

export default PortfolioPage;
