import { createGlobalStyle } from 'styled-components';

const PortfolioStyle = createGlobalStyle`

  :root {
    --paper: #f3f1ea;
    --paper-2: #ece9df;
    --ink: #161616;
    --muted: #65645f;
    --line: #d3d0c6;
    --blue: #2155d6;
    --dark: #111213;
    --dark-muted: #a7a8aa;
    --max: 1180px;
  }

  * { box-sizing: border-box; }

  html {
    scroll-behavior: smooth;
    background: var(--paper);
  }

  body {
    margin: 0;
    min-width: 320px;
    background: var(--paper);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a { color: inherit; text-decoration: none; }

  .shell {
    width: min(calc(100% - 48px), var(--max));
    margin: 0 auto;
  }

  .skip-link {
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: 1000;
    padding: 10px 14px;
    border: 1px solid var(--ink);
    background: var(--paper);
    transform: translateY(-150%);
  }

  .skip-link:focus { transform: translateY(0); }

  .site-header {
    width: min(calc(100% - 48px), var(--max));
    height: 78px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 28px;
    position: sticky;
    top: 0;
    z-index: 40;
    border-bottom: 1px solid rgba(22, 22, 22, 0.18);
    background: rgba(243, 241, 234, 0.94);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .brand {
    justify-self: start;
    font-size: 15px;
    font-weight: 760;
    letter-spacing: -0.02em;
  }

  .site-nav {
    display: flex;
    gap: 26px;
    font-size: 13px;
    color: var(--muted);
  }

  .site-nav a, .header-link, .hero-links a, .project-links a, .contact-links a {
    position: relative;
  }

  .site-nav a::after, .header-link::after, .hero-links a::after,
  .project-links a::after, .contact-links a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: -3px;
    height: 1px;
    background: currentColor;
    transition: right 160ms ease;
  }

  .site-nav a:hover::after, .site-nav a:focus-visible::after,
  .header-link:hover::after, .header-link:focus-visible::after,
  .hero-links a:hover::after, .hero-links a:focus-visible::after,
  .project-links a:hover::after, .project-links a:focus-visible::after,
  .contact-links a:hover::after, .contact-links a:focus-visible::after { right: 0; }

  .header-actions {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 13px;
  }

  .header-link { color: var(--muted); }

  .resume-link {
    min-height: 36px;
    padding: 0 13px;
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--ink);
    border-radius: 999px;
    font-weight: 700;
    transition: background 160ms ease, color 160ms ease;
  }

  .resume-link:hover, .resume-link:focus-visible {
    background: var(--ink);
    color: var(--paper);
  }

  .hero {
    min-height: 690px;
    padding: 112px 0 98px;
    display: grid;
    grid-template-columns: minmax(0, 1.58fr) minmax(280px, 0.62fr);
    gap: 92px;
    align-items: end;
  }

  .eyebrow, .section-label, .project-type, .aside-title, .fact span,
  .about-meta span, .project-details dt {
    margin: 0;
    font-size: 11px;
    line-height: 1.4;
    font-weight: 760;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .eyebrow { color: var(--blue); }

  .hero h1 {
    max-width: 820px;
    margin: 18px 0 0;
    font-size: clamp(56px, 7.4vw, 96px);
    line-height: 0.96;
    font-weight: 720;
    letter-spacing: -0.055em;
  }

  .hero-intro {
    max-width: 730px;
    margin: 30px 0 0;
    font-size: clamp(18px, 1.75vw, 21px);
    line-height: 1.58;
    color: #4f4e49;
  }

  .hero-actions, .contact-actions {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .button {
    min-height: 46px;
    padding: 0 17px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 760;
    transition: background 160ms ease, color 160ms ease, transform 160ms ease;
  }

  .button:hover, .button:focus-visible { transform: translateY(-1px); }
  .button-dark { background: var(--ink); color: var(--paper); }
  .button-dark:hover, .button-dark:focus-visible { background: var(--blue); }
  .button-outline { border-color: var(--ink); }
  .button-outline:hover, .button-outline:focus-visible { background: var(--paper-2); }

  .hero-links {
    margin-top: 24px;
    display: flex;
    gap: 22px;
    color: var(--muted);
    font-size: 13px;
  }

  .profile-facts { border-top: 1px solid var(--ink); }

  .fact {
    padding: 17px 0;
    display: grid;
    gap: 6px;
    border-bottom: 1px solid var(--line);
  }

  .fact span { color: var(--muted); }
  .fact strong { font-size: 14px; line-height: 1.45; font-weight: 660; }
  .fact-last { border-bottom-color: var(--ink); }

  .section {
    padding: 118px 0;
    border-top: 1px solid var(--line);
  }

  .section-heading {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    gap: 56px;
    margin-bottom: 56px;
  }

  .section-label {
    padding-top: 8px;
    color: var(--muted);
  }

  .section-heading h2, .contact-grid h2 {
    margin: 0;
    max-width: 780px;
    font-size: clamp(38px, 5.2vw, 67px);
    line-height: 1.02;
    font-weight: 700;
    letter-spacing: -0.048em;
  }

  .section-heading > div > p {
    max-width: 760px;
    margin: 22px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.7;
  }

  .section-heading > div > p + p { margin-top: 12px; }

  .project-list { border-top: 1px solid var(--ink); }

  .project-row {
    display: grid;
    grid-template-columns: 86px minmax(0, 1fr);
    border-bottom: 1px solid var(--line);
    transition: background 160ms ease;
  }

  .project-row:hover { background: rgba(33, 85, 214, 0.035); }

  .project-number {
    padding: 29px 20px 28px 0;
    color: var(--muted);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
  }

  .project-body { padding: 28px 0 31px; }

  .project-heading {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: flex-start;
  }

  .project-type { color: var(--blue); }

  .project-heading h3 {
    margin: 8px 0 0;
    font-size: clamp(29px, 3.7vw, 48px);
    font-weight: 690;
    letter-spacing: -0.04em;
  }

  .project-links {
    padding-top: 4px;
    display: flex;
    gap: 17px;
    flex-shrink: 0;
    color: var(--muted);
    font-size: 12px;
    font-weight: 650;
  }

  .project-links span { opacity: 0.55; }

  .project-description {
    max-width: 790px;
    margin: 20px 0 0;
    color: #4f4e49;
    font-size: 16px;
    line-height: 1.66;
  }

  .project-details {
    margin: 28px 0 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 30px;
  }

  .project-details div {
    padding-top: 14px;
    border-top: 1px solid var(--line);
  }

  .project-details dt { color: var(--muted); }

  .project-details dd {
    margin: 8px 0 0;
    font-size: 13px;
    line-height: 1.55;
    color: #3d3c38;
  }

  .earlier-work {
    padding: 22px 0 0 86px;
    display: flex;
    gap: 30px;
    align-items: baseline;
    color: var(--muted);
    font-size: 13px;
  }

  .earlier-work > span {
    min-width: 90px;
    font-weight: 700;
    color: var(--ink);
  }

  .earlier-work p {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }

  .earlier-work strong { color: var(--ink); }
  .earlier-work i { font-style: normal; color: #a09d94; }

  .split-section { padding-bottom: 126px; }
  .split-heading { margin-bottom: 44px; }

  .experience-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.55fr);
    gap: 72px;
    align-items: start;
  }

  .experience-list { border-top: 1px solid var(--ink); }

  .experience-item {
    padding: 27px 0 30px;
    border-bottom: 1px solid var(--line);
  }

  .experience-top {
    display: flex;
    justify-content: space-between;
    gap: 28px;
    align-items: flex-start;
  }

  .experience-top h3 {
    margin: 0;
    font-size: 24px;
    letter-spacing: -0.03em;
  }

  .experience-top p, .experience-top time {
    margin: 6px 0 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.45;
  }

  .experience-top time {
    margin-top: 4px;
    white-space: nowrap;
  }

  .experience-item ul {
    max-width: 790px;
    margin: 19px 0 0;
    padding-left: 18px;
    color: #4f4e49;
    font-size: 15px;
    line-height: 1.68;
  }

  .experience-item li + li { margin-top: 7px; }

  .capabilities { border-top: 1px solid var(--ink); }

  .aside-title {
    padding: 17px 0;
    color: var(--ink);
    border-bottom: 1px solid var(--line);
  }

  .capability {
    padding: 16px 0 17px;
    border-bottom: 1px solid var(--line);
  }

  .capability span {
    color: var(--muted);
    font-size: 11px;
    font-weight: 760;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .capability p {
    margin: 7px 0 0;
    color: #3f3e3a;
    font-size: 13px;
    line-height: 1.58;
  }

  .about-section { padding-bottom: 126px; }

  .about-meta {
    margin-left: 246px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .about-meta > div {
    padding: 20px 0 0;
    border-top: 1px solid var(--ink);
  }

  .about-meta span { color: var(--muted); }

  .about-meta strong {
    margin-top: 17px;
    display: block;
    font-size: 20px;
    line-height: 1.35;
    letter-spacing: -0.02em;
  }

  .about-meta p, .about-meta small {
    margin: 8px 0 0;
    display: block;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.55;
  }

  .contact-section {
    padding: 106px 0 110px;
    background: var(--dark);
    color: #f2f0e9;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
    gap: 90px;
    align-items: start;
  }

  .section-label-light { color: var(--dark-muted); }

  .contact-grid h2 {
    margin-top: 17px;
    max-width: 760px;
  }

  .contact-copy > p {
    margin: 28px 0 0;
    color: var(--dark-muted);
    font-size: 16px;
    line-height: 1.7;
  }

  .button-light { background: #f2f0e9; color: var(--dark); }
  .button-light:hover, .button-light:focus-visible { background: #ffffff; }
  .button-light-outline { border-color: #767779; color: #f2f0e9; }
  .button-light-outline:hover, .button-light-outline:focus-visible { border-color: #f2f0e9; }

  .contact-links {
    margin-top: 25px;
    display: flex;
    gap: 22px;
    color: var(--dark-muted);
    font-size: 13px;
  }

  .site-footer {
    background: var(--dark);
    color: var(--dark-muted);
    border-top: 1px solid #2f3032;
  }

  .footer-inner {
    min-height: 82px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    font-size: 12px;
  }

  :focus-visible {
    outline: 2px solid var(--blue);
    outline-offset: 4px;
  }

  @media (max-width: 950px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 56px;
      min-height: auto;
      padding-top: 94px;
    }

    .profile-facts { max-width: 680px; }

    .experience-grid, .contact-grid {
      grid-template-columns: 1fr;
      gap: 50px;
    }

    .about-meta { margin-left: 0; }
  }

  @media (max-width: 720px) {
    .shell, .site-header {
      width: min(calc(100% - 30px), var(--max));
    }

    .site-header {
      height: 68px;
      grid-template-columns: 1fr auto;
    }

    .site-nav, .header-link { display: none; }
    .header-actions { gap: 0; }

    .hero { padding: 78px 0; }
    .hero h1 { font-size: clamp(47px, 14vw, 67px); }
    .hero-intro { font-size: 17px; }
    .section { padding: 86px 0; }

    .section-heading {
      grid-template-columns: 1fr;
      gap: 18px;
      margin-bottom: 40px;
    }

    .section-label { padding-top: 0; }

    .project-row { grid-template-columns: 44px minmax(0, 1fr); }
    .project-number { padding-right: 10px; }

    .project-heading, .experience-top {
      display: grid;
      gap: 15px;
    }

    .project-links { padding-top: 0; }

    .project-details {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .earlier-work {
      padding-left: 44px;
      display: grid;
      gap: 9px;
    }

    .about-meta {
      grid-template-columns: 1fr;
      gap: 28px;
    }

    .contact-grid { gap: 34px; }
  }

  @media (max-width: 480px) {
    .hero-actions, .contact-actions { display: grid; }
    .button { width: 100%; }
    .project-row { grid-template-columns: 1fr; }
    .project-number { padding: 20px 0 0; }
    .project-body { padding-top: 13px; }
    .earlier-work { padding-left: 0; }

    .footer-inner {
      padding: 24px 0;
      min-height: 0;
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
