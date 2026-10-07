import { createGlobalStyle } from 'styled-components';

const PortfolioStyle = createGlobalStyle`

  :root {
    --bg: #101317;
    --bg-deep: #0d1013;
    --surface: #151a20;
    --surface-soft: #13171c;
    --surface-hover: #181e25;
    --text: #dfe5eb;
    --text-strong: #edf1f4;
    --muted: #919ba6;
    --muted-2: #727c87;
    --line: #262d35;
    --line-strong: #343d47;
    --accent: #8197b8;
    --accent-soft: #91a99f;
    --max: 1180px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: var(--bg);
  }

  body {
    margin: 0;
    min-width: 320px;
    background: var(--bg);
    color: var(--text);
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

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
    border: 1px solid var(--line-strong);
    border-radius: 8px;
    background: var(--surface);
    color: var(--text-strong);
    transform: translateY(-150%);
  }

  .skip-link:focus {
    transform: translateY(0);
  }

  .site-header {
    width: min(calc(100% - 48px), var(--max));
    height: 76px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 28px;
    position: sticky;
    top: 0;
    z-index: 40;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(16, 19, 23, 0.9);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .brand {
    justify-self: start;
    color: var(--text-strong);
    font-size: 15px;
    font-weight: 760;
    letter-spacing: -0.02em;
  }

  .site-nav {
    display: flex;
    gap: 26px;
    color: var(--muted);
    font-size: 13px;
  }

  .site-nav a,
  .header-link,
  .hero-links a,
  .project-links a,
  .contact-links a {
    position: relative;
    transition: color 150ms ease;
  }

  .site-nav a:hover,
  .site-nav a:focus-visible,
  .header-link:hover,
  .header-link:focus-visible,
  .hero-links a:hover,
  .hero-links a:focus-visible,
  .project-links a:hover,
  .project-links a:focus-visible,
  .contact-links a:hover,
  .contact-links a:focus-visible {
    color: var(--text-strong);
  }

  .site-nav a::after,
  .header-link::after,
  .hero-links a::after,
  .project-links a::after,
  .contact-links a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: -4px;
    height: 1px;
    background: var(--accent);
    transition: right 150ms ease;
  }

  .site-nav a:hover::after,
  .site-nav a:focus-visible::after,
  .header-link:hover::after,
  .header-link:focus-visible::after,
  .hero-links a:hover::after,
  .hero-links a:focus-visible::after,
  .project-links a:hover::after,
  .project-links a:focus-visible::after,
  .contact-links a:hover::after,
  .contact-links a:focus-visible::after {
    right: 0;
  }

  .header-actions {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 18px;
    font-size: 13px;
  }

  .header-link {
    color: var(--muted);
  }

  .resume-link {
    min-height: 36px;
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--line-strong);
    border-radius: 9px;
    background: var(--surface);
    color: var(--text-strong);
    font-weight: 700;
    transition:
      background 150ms ease,
      border-color 150ms ease,
      transform 150ms ease;
  }

  .resume-link:hover,
  .resume-link:focus-visible {
    background: var(--surface-hover);
    border-color: #485463;
    transform: translateY(-1px);
  }

  .hero {
    min-height: 700px;
    padding: 112px 0 96px;
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(300px, 0.62fr);
    gap: 82px;
    align-items: center;
  }

  .eyebrow,
  .section-label,
  .project-type,
  .aside-title,
  .fact span,
  .about-meta span,
  .project-details dt {
    margin: 0;
    font-size: 11px;
    line-height: 1.4;
    font-weight: 760;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .eyebrow,
  .project-type {
    color: var(--accent);
  }

  .hero h1 {
    max-width: 850px;
    margin: 18px 0 0;
    color: var(--text-strong);
    font-size: clamp(54px, 7.1vw, 94px);
    line-height: 0.98;
    font-weight: 700;
    letter-spacing: -0.052em;
  }

  .hero-intro {
    max-width: 740px;
    margin: 30px 0 0;
    color: #adb6c0;
    font-size: clamp(18px, 1.75vw, 21px);
    line-height: 1.62;
  }

  .hero-actions,
  .contact-actions {
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
    border-radius: 9px;
    font-size: 13px;
    font-weight: 740;
    transition:
      background 150ms ease,
      color 150ms ease,
      border-color 150ms ease,
      transform 150ms ease;
  }

  .button:hover,
  .button:focus-visible {
    transform: translateY(-1px);
  }

  .button-dark {
    background: #778ba9;
    color: #11161b;
  }

  .button-dark:hover,
  .button-dark:focus-visible {
    background: #8699b5;
  }

  .button-outline {
    border-color: var(--line-strong);
    background: var(--surface-soft);
    color: var(--text);
  }

  .button-outline:hover,
  .button-outline:focus-visible {
    background: var(--surface-hover);
    border-color: #47515d;
  }

  .hero-links {
    margin-top: 24px;
    display: flex;
    gap: 22px;
    color: var(--muted);
    font-size: 13px;
  }

  .profile-facts {
    padding: 5px 22px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--surface);
  }

  .fact {
    padding: 17px 0;
    display: grid;
    gap: 6px;
    border-bottom: 1px solid var(--line);
  }

  .fact span {
    color: var(--muted-2);
  }

  .fact strong {
    color: #cbd2da;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 640;
  }

  .fact-last {
    border-bottom: 0;
  }

  .section {
    padding: 116px 0;
    border-top: 1px solid var(--line);
  }

  .section-heading {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    gap: 56px;
    margin-bottom: 54px;
  }

  .section-label {
    padding-top: 8px;
    color: var(--muted-2);
  }

  .section-heading h2,
  .contact-grid h2 {
    margin: 0;
    max-width: 780px;
    color: var(--text-strong);
    font-size: clamp(38px, 5.1vw, 65px);
    line-height: 1.03;
    font-weight: 690;
    letter-spacing: -0.045em;
  }

  .section-heading > div > p {
    max-width: 760px;
    margin: 22px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.72;
  }

  .section-heading > div > p + p {
    margin-top: 12px;
  }

  .project-list {
    display: grid;
    gap: 12px;
  }

  .project-row {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    border: 1px solid var(--line);
    border-radius: 15px;
    background: var(--surface-soft);
    overflow: hidden;
    transition:
      background 150ms ease,
      border-color 150ms ease,
      transform 150ms ease;
  }

  .project-row:hover {
    background: var(--surface);
    border-color: #313a44;
    transform: translateY(-2px);
  }

  .project-number {
    padding: 30px 16px 28px 20px;
    color: var(--muted-2);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    border-right: 1px solid var(--line);
  }

  .project-body {
    padding: 28px 28px 30px;
  }

  .project-heading {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: flex-start;
  }

  .project-heading h3 {
    margin: 8px 0 0;
    color: var(--text-strong);
    font-size: clamp(29px, 3.7vw, 46px);
    font-weight: 680;
    letter-spacing: -0.038em;
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

  .project-links span {
    opacity: 0.6;
  }

  .project-description {
    max-width: 790px;
    margin: 20px 0 0;
    color: #a8b1bb;
    font-size: 16px;
    line-height: 1.68;
  }

  .project-details {
    margin: 28px 0 0;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 26px;
  }

  .project-details div {
    padding-top: 14px;
    border-top: 1px solid var(--line);
  }

  .project-details dt {
    color: var(--muted-2);
  }

  .project-details dd {
    margin: 8px 0 0;
    color: #9fa9b4;
    font-size: 13px;
    line-height: 1.58;
  }

  .earlier-work {
    margin-top: 14px;
    padding: 20px 22px;
    display: flex;
    gap: 30px;
    align-items: baseline;
    border: 1px solid var(--line);
    border-radius: 13px;
    background: var(--surface-soft);
    color: var(--muted);
    font-size: 13px;
  }

  .earlier-work > span {
    min-width: 90px;
    color: #bec6ce;
    font-weight: 700;
  }

  .earlier-work p {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }

  .earlier-work strong {
    color: #cdd4dc;
  }

  .earlier-work i {
    color: #57616c;
    font-style: normal;
  }

  .split-section {
    padding-bottom: 124px;
  }

  .split-heading {
    margin-bottom: 44px;
  }

  .experience-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.55fr);
    gap: 64px;
    align-items: start;
  }

  .experience-list {
    display: grid;
    gap: 12px;
  }

  .experience-item {
    padding: 24px 24px 26px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--surface-soft);
  }

  .experience-top {
    display: flex;
    justify-content: space-between;
    gap: 28px;
    align-items: flex-start;
  }

  .experience-top h3 {
    margin: 0;
    color: var(--text-strong);
    font-size: 24px;
    letter-spacing: -0.028em;
  }

  .experience-top p,
  .experience-top time {
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
    color: #aab3bd;
    font-size: 15px;
    line-height: 1.7;
  }

  .experience-item li + li {
    margin-top: 7px;
  }

  .capabilities {
    padding: 0 20px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--surface);
  }

  .aside-title {
    padding: 18px 0;
    color: #c5ccd4;
    border-bottom: 1px solid var(--line);
  }

  .capability {
    padding: 16px 0 17px;
    border-bottom: 1px solid var(--line);
  }

  .capability:last-child {
    border-bottom: 0;
  }

  .capability span {
    color: var(--muted-2);
    font-size: 11px;
    font-weight: 760;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .capability p {
    margin: 7px 0 0;
    color: #a7b0ba;
    font-size: 13px;
    line-height: 1.6;
  }

  .about-section {
    padding-bottom: 124px;
  }

  .about-meta {
    margin-left: 246px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .about-meta > div {
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--surface-soft);
  }

  .about-meta span {
    color: var(--muted-2);
  }

  .about-meta strong {
    margin-top: 17px;
    display: block;
    color: #cfd6de;
    font-size: 20px;
    line-height: 1.38;
    letter-spacing: -0.02em;
  }

  .about-meta p,
  .about-meta small {
    margin: 8px 0 0;
    display: block;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.58;
  }

  .contact-section {
    padding: 104px 0 108px;
    background: var(--bg-deep);
    color: var(--text);
    border-top: 1px solid var(--line);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
    gap: 84px;
    align-items: start;
  }

  .section-label-light {
    color: var(--muted-2);
  }

  .contact-grid h2 {
    margin-top: 17px;
  }

  .contact-copy > p {
    margin: 28px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.7;
  }

  .button-light {
    background: #798da9;
    color: #11161b;
  }

  .button-light:hover,
  .button-light:focus-visible {
    background: #879ab4;
  }

  .button-light-outline {
    border-color: var(--line-strong);
    background: var(--surface-soft);
    color: #cbd2da;
  }

  .button-light-outline:hover,
  .button-light-outline:focus-visible {
    border-color: #485463;
    background: var(--surface);
  }

  .contact-links {
    margin-top: 25px;
    display: flex;
    gap: 22px;
    color: var(--muted);
    font-size: 13px;
  }

  .site-footer {
    background: var(--bg-deep);
    color: var(--muted-2);
    border-top: 1px solid var(--line);
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
    outline: 2px solid #879ab4;
    outline-offset: 4px;
  }

  @media (max-width: 950px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 52px;
      min-height: auto;
      padding-top: 94px;
    }

    .profile-facts {
      max-width: 680px;
    }

    .experience-grid,
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 44px;
    }

    .about-meta {
      margin-left: 0;
    }
  }

  @media (max-width: 720px) {
    .shell,
    .site-header {
      width: min(calc(100% - 30px), var(--max));
    }

    .site-header {
      height: 68px;
      grid-template-columns: 1fr auto;
    }

    .site-nav,
    .header-link {
      display: none;
    }

    .header-actions {
      gap: 0;
    }

    .hero {
      padding: 78px 0;
    }

    .hero h1 {
      font-size: clamp(46px, 14vw, 66px);
    }

    .hero-intro {
      font-size: 17px;
    }

    .section {
      padding: 86px 0;
    }

    .section-heading {
      grid-template-columns: 1fr;
      gap: 18px;
      margin-bottom: 40px;
    }

    .section-label {
      padding-top: 0;
    }

    .project-row {
      grid-template-columns: 48px minmax(0, 1fr);
    }

    .project-number {
      padding: 24px 10px 0 14px;
    }

    .project-body {
      padding: 24px 20px 26px;
    }

    .project-heading,
    .experience-top {
      display: grid;
      gap: 14px;
    }

    .project-links {
      padding-top: 0;
    }

    .project-details {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .earlier-work {
      display: grid;
      gap: 9px;
    }

    .about-meta {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .contact-grid {
      gap: 32px;
    }
  }

  @media (max-width: 480px) {
    .hero-actions,
    .contact-actions {
      display: grid;
    }

    .button {
      width: 100%;
    }

    .project-row {
      grid-template-columns: 1fr;
    }

    .project-number {
      padding: 18px 20px 0;
      border-right: 0;
    }

    .project-body {
      padding-top: 12px;
    }

    .footer-inner {
      min-height: 0;
      padding: 24px 0;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.001ms !important;
      animation-duration: 0.001ms !important;
      animation-iteration-count: 1 !important;
    }
  }

`;

export default PortfolioStyle;
