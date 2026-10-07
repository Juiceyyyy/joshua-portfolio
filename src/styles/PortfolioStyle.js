import { createGlobalStyle } from 'styled-components';

const PortfolioStyle = createGlobalStyle`

  :root {
    --bg: #0b0d10;
    --surface: #12151a;
    --surface-2: #171b21;
    --text: #f5f7fa;
    --muted: #9aa3ad;
    --line: rgba(255, 255, 255, 0.1);
    --line-strong: rgba(255, 255, 255, 0.16);
    --accent: #92f7c5;
    --accent-2: #b7c7ff;
    --max: 1180px;
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    background: var(--bg);
  }

  body {
    margin: 0;
    min-width: 320px;
    background:
      radial-gradient(circle at 15% 0%, rgba(111, 137, 255, 0.12), transparent 30%),
      radial-gradient(circle at 85% 8%, rgba(70, 226, 166, 0.09), transparent 28%),
      var(--bg);
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a { color: inherit; text-decoration: none; }
  button, input, textarea, select { font: inherit; }

  .shell {
    width: min(calc(100% - 40px), var(--max));
    margin: 0 auto;
  }

  .skip-link {
    position: fixed;
    left: 16px;
    top: 16px;
    z-index: 1000;
    transform: translateY(-160%);
    padding: 10px 14px;
    border-radius: 10px;
    background: var(--text);
    color: var(--bg);
    transition: transform 160ms ease;
  }
  .skip-link:focus { transform: translateY(0); }

  .site-header {
    width: min(calc(100% - 32px), 1220px);
    margin: 16px auto 0;
    height: 66px;
    padding: 0 18px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 24px;
    position: sticky;
    top: 14px;
    z-index: 50;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: rgba(13, 16, 20, 0.82);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .brand {
    font-weight: 800;
    letter-spacing: -0.04em;
    font-size: 18px;
  }
  .brand span { color: var(--accent); }

  .site-nav {
    justify-self: center;
    display: flex;
    gap: 28px;
    color: var(--muted);
    font-size: 14px;
  }

  .site-nav a, .header-cta, .text-link, .project-links a {
    transition: color 160ms ease, opacity 160ms ease;
  }

  .site-nav a:hover, .site-nav a:focus-visible,
  .project-links a:hover, .project-links a:focus-visible,
  .text-link:hover, .text-link:focus-visible {
    color: var(--text);
  }

  .header-cta {
    padding: 10px 14px;
    border: 1px solid var(--line-strong);
    border-radius: 12px;
    font-size: 14px;
    font-weight: 650;
  }
  .header-cta:hover, .header-cta:focus-visible { border-color: var(--accent); }

  main { display: block; }

  .hero {
    min-height: 730px;
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(300px, 0.6fr);
    gap: 80px;
    align-items: center;
    padding: 120px 0 92px;
  }

  .eyebrow, .section-kicker, .signal-topline, .project-meta, .timeline-date,
  .credential-card > span, .earlier-work > span {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 12px;
    font-weight: 700;
  }

  .eyebrow, .section-kicker { color: var(--accent); }

  .hero h1, .section-heading h2, .about-copy h2, .contact-inner h2 {
    margin: 0;
    letter-spacing: -0.045em;
    font-weight: 730;
  }

  .hero h1 {
    max-width: 860px;
    margin-top: 18px;
    font-size: clamp(54px, 7.3vw, 104px);
    line-height: 0.96;
  }

  .hero-intro {
    max-width: 760px;
    margin: 30px 0 0;
    color: #b4bcc6;
    font-size: clamp(18px, 2vw, 22px);
    line-height: 1.62;
  }

  .hero-actions, .contact-actions {
    margin-top: 34px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .button {
    min-height: 48px;
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: 1px solid transparent;
    font-size: 14px;
    font-weight: 750;
    transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
  }
  .button:hover, .button:focus-visible { transform: translateY(-2px); }

  .button-primary { background: var(--text); color: var(--bg); }
  .button-secondary {
    border-color: var(--line-strong);
    background: rgba(255, 255, 255, 0.025);
  }

  .text-link {
    padding: 12px 8px;
    color: var(--muted);
    font-size: 14px;
    font-weight: 650;
  }

  .signal-card {
    align-self: center;
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: 20px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.025), transparent),
      var(--surface);
    box-shadow: 0 26px 80px rgba(0, 0, 0, 0.28);
  }

  .signal-topline {
    display: flex;
    align-items: center;
    gap: 9px;
    padding-bottom: 18px;
    color: var(--muted);
    border-bottom: 1px solid var(--line);
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 0 5px rgba(146, 247, 197, 0.08);
  }

  .signal-row {
    padding: 18px 0;
    display: grid;
    gap: 6px;
    border-bottom: 1px solid var(--line);
  }
  .signal-row span { color: var(--muted); font-size: 12px; }
  .signal-row strong { font-size: 15px; line-height: 1.45; }

  .signal-footer {
    padding-top: 18px;
    display: flex;
    justify-content: space-between;
    color: #717b85;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .metric-band {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.018);
  }

  .metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); }

  .metric {
    min-height: 156px;
    padding: 30px 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid var(--line);
  }
  .metric:first-child { border-left: 1px solid var(--line); }
  .metric strong { font-size: clamp(34px, 4vw, 52px); letter-spacing: -0.045em; }
  .metric span {
    max-width: 220px;
    margin-top: 8px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.45;
  }

  .section { padding: 128px 0; }

  .section-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.48fr);
    gap: 60px;
    align-items: end;
    margin-bottom: 52px;
  }
  .section-heading.compact { grid-template-columns: 1fr; }

  .section-heading h2, .about-copy h2, .contact-inner h2 {
    max-width: 760px;
    margin-top: 12px;
    font-size: clamp(36px, 5vw, 66px);
    line-height: 1.02;
  }

  .section-copy {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
    font-size: 15px;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .project-card {
    min-height: 510px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--line);
    border-radius: 20px;
    background:
      radial-gradient(circle at 100% 0%, rgba(183, 199, 255, 0.07), transparent 34%),
      var(--surface);
    transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
  }

  .project-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.18);
    background:
      radial-gradient(circle at 100% 0%, rgba(183, 199, 255, 0.105), transparent 38%),
      #14181e;
  }

  .project-meta {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    color: #707984;
  }

  .project-title-row {
    margin-top: 42px;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
  }

  .project-title-row h3 {
    margin: 0;
    font-size: clamp(30px, 4vw, 48px);
    letter-spacing: -0.04em;
  }
  .project-mark { color: var(--accent); font-size: 22px; }

  .project-card > p {
    margin: 24px 0 0;
    color: #aeb6c0;
    line-height: 1.65;
    font-size: 15px;
  }

  .project-proof {
    margin-top: 22px;
    color: var(--text);
    font-size: 13px;
    font-weight: 700;
  }

  .tag-list {
    margin: 24px 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
  }

  .tag-list li {
    padding: 7px 9px;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: #9ea7b1;
    background: rgba(255, 255, 255, 0.015);
    font-size: 11px;
  }

  .project-links {
    margin-top: auto;
    padding-top: 28px;
    display: flex;
    gap: 22px;
    color: var(--muted);
    font-size: 13px;
    font-weight: 700;
  }
  .project-links span { opacity: 0.55; }

  .earlier-work {
    margin-top: 20px;
    padding: 22px 26px;
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 28px;
    align-items: center;
    border: 1px solid var(--line);
    border-radius: 16px;
    color: var(--muted);
  }

  .earlier-work p {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    line-height: 1.55;
  }
  .earlier-work strong { color: var(--text); }
  .earlier-work i { color: #5d6670; font-style: normal; }

  .experience-section { border-top: 1px solid var(--line); }
  .timeline { border-top: 1px solid var(--line); }

  .timeline-item {
    display: grid;
    grid-template-columns: 210px 1fr;
    gap: 40px;
    padding: 34px 0 36px;
    border-bottom: 1px solid var(--line);
  }
  .timeline-date { padding-top: 5px; color: #79838e; }
  .timeline-body { max-width: 800px; }

  .role-line {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: baseline;
  }
  .role-line h3 { margin: 0; font-size: 26px; letter-spacing: -0.03em; }
  .role-line span { color: var(--accent-2); font-size: 13px; }

  .timeline-body p {
    margin: 18px 0 0;
    color: var(--muted);
    line-height: 1.72;
  }

  .toolkit-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .toolkit-card {
    padding: 22px;
    min-height: 300px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.018);
  }
  .toolkit-card h3 { margin: 0 0 22px; font-size: 15px; letter-spacing: -0.01em; }
  .toolkit-card ul { list-style: none; margin: 0; padding: 0; }
  .toolkit-card li {
    padding: 10px 0;
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 13px;
  }

  .about-section {
    display: grid;
    grid-template-columns: 1.08fr 0.92fr;
    gap: 70px;
    align-items: start;
    border-top: 1px solid var(--line);
  }

  .about-copy p:not(.section-kicker) {
    max-width: 710px;
    color: var(--muted);
    line-height: 1.75;
    font-size: 16px;
  }
  .about-copy h2 + p { margin-top: 28px; }

  .credential-stack { display: grid; gap: 14px; }

  .credential-card {
    padding: 24px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--surface);
  }
  .credential-card > span { color: #74808a; }
  .credential-card h3 { margin: 22px 0 8px; font-size: 22px; letter-spacing: -0.025em; }
  .credential-card p, .credential-card small {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
  }
  .credential-card small { display: block; margin-top: 8px; }

  .contact-section {
    margin-top: 10px;
    padding: 108px 0 112px;
    background: var(--text);
    color: var(--bg);
  }
  .contact-inner .section-kicker { color: #427c63; }
  .contact-inner p:not(.section-kicker) {
    max-width: 720px;
    margin: 24px 0 0;
    color: #41464c;
    font-size: 17px;
    line-height: 1.65;
  }
  .button-light { background: var(--bg); color: var(--text); }
  .light-link { color: #4c535a; }
  .light-link:hover, .light-link:focus-visible { color: var(--bg); }

  .site-footer {
    border-top: 1px solid var(--line);
    background: #080a0c;
  }

  .footer-inner {
    min-height: 96px;
    display: flex;
    justify-content: space-between;
    gap: 28px;
    align-items: center;
    color: #6e7781;
    font-size: 12px;
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  @media (max-width: 980px) {
    .hero {
      min-height: auto;
      grid-template-columns: 1fr;
      gap: 52px;
      padding-top: 104px;
    }
    .signal-card { max-width: 620px; }
    .metric-grid { grid-template-columns: repeat(2, 1fr); }
    .metric:nth-child(2) { border-right: 1px solid var(--line); }
    .metric:nth-child(n + 3) { border-top: 1px solid var(--line); }
    .section-heading, .about-section { grid-template-columns: 1fr; gap: 30px; }
    .toolkit-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 760px) {
    .site-header {
      grid-template-columns: auto 1fr;
      height: 60px;
      padding: 0 14px;
    }
    .site-nav { display: none; }
    .header-cta {
      justify-self: end;
      padding: 8px 11px;
      font-size: 12px;
    }
    .hero { padding: 88px 0 70px; }
    .hero h1 { font-size: clamp(46px, 14vw, 68px); }
    .hero-intro { font-size: 17px; }
    .section { padding: 92px 0; }
    .project-grid { grid-template-columns: 1fr; }
    .project-card { min-height: 0; }
    .earlier-work { grid-template-columns: 1fr; gap: 10px; }
    .timeline-item { grid-template-columns: 1fr; gap: 14px; }
    .role-line { display: grid; gap: 8px; }
    .toolkit-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 560px) {
    .shell { width: min(calc(100% - 28px), var(--max)); }
    .site-header {
      width: calc(100% - 20px);
      margin-top: 10px;
      top: 8px;
      border-radius: 14px;
    }
    .metric-grid, .toolkit-grid { grid-template-columns: 1fr; }
    .metric {
      border-right: 1px solid var(--line);
      border-top: 1px solid var(--line);
    }
    .metric:first-child { border-top: 0; }
    .hero-actions, .contact-actions { align-items: stretch; }
    .button { width: 100%; }
    .hero-link, .light-link { padding-left: 2px; }
    .project-card { padding: 22px; }
    .project-meta { display: grid; gap: 8px; }
    .project-title-row { margin-top: 30px; }
    .footer-inner {
      padding: 26px 0;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      transition-duration: 0.001ms !important;
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
    }
  }

`;

export default PortfolioStyle;
