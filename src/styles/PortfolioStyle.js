import { createGlobalStyle } from 'styled-components';

const PortfolioStyle = createGlobalStyle`

  :root {
    --bg: #0d1117;
    --bg-soft: #10151c;
    --surface: #141a22;
    --surface-2: #18202a;
    --surface-3: #1c2530;
    --text: #dce4ec;
    --text-strong: #eef3f7;
    --muted: #98a4b1;
    --muted-2: #74808d;
    --line: rgba(188, 205, 222, 0.11);
    --line-strong: rgba(188, 205, 222, 0.18);
    --teal: #78b9ad;
    --blue: #879fd0;
    --amber: #bd9963;
    --purple: #a18ac4;
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
    color: var(--text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background:
      radial-gradient(circle at 8% -8%, rgba(120, 185, 173, 0.10), transparent 28%),
      radial-gradient(circle at 90% 2%, rgba(135, 159, 208, 0.11), transparent 27%),
      var(--bg);
  }

  a { color: inherit; text-decoration: none; }

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
    border: 1px solid var(--line-strong);
    border-radius: 9px;
    background: var(--surface-2);
    color: var(--text-strong);
  }

  .skip-link:focus { transform: translateY(0); }

  .topline {
    min-height: 74px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
    border-bottom: 1px solid var(--line);
  }

  .topline-name {
    color: var(--text-strong);
    font-size: 15px;
    font-weight: 760;
    letter-spacing: -0.02em;
  }

  .topline-links {
    display: flex;
    align-items: center;
    gap: 22px;
    color: var(--muted);
    font-size: 13px;
  }

  .topline-links > a:not(.resume-pill) {
    transition: color 150ms ease;
  }

  .topline-links > a:not(.resume-pill):hover,
  .topline-links > a:not(.resume-pill):focus-visible {
    color: var(--text-strong);
  }

  .resume-pill {
    min-height: 37px;
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(135, 159, 208, 0.34);
    border-radius: 10px;
    background: rgba(135, 159, 208, 0.10);
    color: #c8d5ee;
    font-weight: 700;
    transition: background 150ms ease, border-color 150ms ease, transform 150ms ease;
  }

  .resume-pill:hover,
  .resume-pill:focus-visible {
    background: rgba(135, 159, 208, 0.16);
    border-color: rgba(135, 159, 208, 0.48);
    transform: translateY(-1px);
  }

  .hero {
    min-height: 690px;
    padding: 106px 0 92px;
    display: grid;
    grid-template-columns: minmax(0, 1.42fr) minmax(300px, 0.58fr);
    gap: 78px;
    align-items: center;
  }

  .eyebrow,
  .section-kicker,
  .project-meta,
  .signal-header,
  .timeline-date,
  .credential-card > span {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 11px;
    font-weight: 760;
  }

  .eyebrow,
  .section-kicker {
    color: var(--teal);
  }

  .hero h1,
  .section-heading h2,
  .about-copy h2,
  .contact-inner h2 {
    margin: 0;
    color: var(--text-strong);
    letter-spacing: -0.047em;
    font-weight: 710;
  }

  .hero h1 {
    max-width: 880px;
    margin-top: 18px;
    font-size: clamp(52px, 7vw, 98px);
    line-height: 0.98;
  }

  .hero h1 span {
    color: #b8c7e2;
  }

  .hero-intro {
    max-width: 770px;
    margin: 30px 0 0;
    color: #aeb8c3;
    font-size: clamp(18px, 2vw, 21px);
    line-height: 1.64;
  }

  .hero-actions {
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .button {
    min-height: 48px;
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 11px;
    font-size: 13px;
    font-weight: 740;
    transition: transform 150ms ease, background 150ms ease, border-color 150ms ease, color 150ms ease;
  }

  .button:hover,
  .button:focus-visible {
    transform: translateY(-2px);
  }

  .button-primary {
    background: #9ab0d6;
    color: #11161c;
  }

  .button-primary:hover,
  .button-primary:focus-visible {
    background: #a8badb;
  }

  .button-secondary {
    border-color: rgba(120, 185, 173, 0.34);
    background: rgba(120, 185, 173, 0.08);
    color: #b6d8d1;
  }

  .button-secondary:hover,
  .button-secondary:focus-visible {
    border-color: rgba(120, 185, 173, 0.52);
    background: rgba(120, 185, 173, 0.13);
  }

  .button-quiet {
    border-color: var(--line);
    background: rgba(255, 255, 255, 0.018);
    color: var(--muted);
  }

  .button-quiet:hover,
  .button-quiet:focus-visible {
    color: var(--text);
    border-color: var(--line-strong);
    background: rgba(255, 255, 255, 0.03);
  }

  .hero-proof {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }

  .hero-proof span {
    padding: 7px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,0.018);
    color: #8996a4;
    font-size: 11px;
  }

  .signal-card {
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background:
      linear-gradient(180deg, rgba(135, 159, 208, 0.045), transparent 34%),
      var(--surface);
    box-shadow: 0 26px 70px rgba(0,0,0,0.22);
  }

  .signal-header {
    padding-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 9px;
    color: #8b97a4;
    border-bottom: 1px solid var(--line);
  }

  .signal-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--teal);
    box-shadow: 0 0 0 5px rgba(120, 185, 173, 0.07);
  }

  .signal-row {
    padding: 17px 0;
    display: grid;
    gap: 6px;
    border-bottom: 1px solid var(--line);
  }

  .signal-row span {
    color: var(--muted-2);
    font-size: 11px;
  }

  .signal-row strong {
    color: #cad3dd;
    font-size: 14px;
    line-height: 1.48;
    font-weight: 650;
  }

  .signal-actions {
    padding-top: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
  }

  .signal-actions a {
    min-height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--line);
    border-radius: 9px;
    color: #abb7c4;
    font-size: 12px;
    font-weight: 700;
    transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
  }

  .signal-actions a:hover,
  .signal-actions a:focus-visible {
    background: var(--surface-2);
    color: var(--text-strong);
    border-color: var(--line-strong);
  }

  .metric-band {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: rgba(255,255,255,0.014);
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .metric {
    min-height: 150px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid var(--line);
  }

  .metric:first-child {
    border-left: 1px solid var(--line);
  }

  .metric strong {
    color: var(--text-strong);
    font-size: clamp(30px, 3.6vw, 48px);
    letter-spacing: -0.042em;
  }

  .metric:nth-child(2) strong { color: #aebee0; }
  .metric:nth-child(3) strong { color: #a7c8c0; }
  .metric:nth-child(4) strong { color: #c0accf; }

  .metric span {
    max-width: 220px;
    margin-top: 8px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.5;
  }

  .section {
    padding: 122px 0;
  }

  .section + .section {
    border-top: 1px solid var(--line);
  }

  .section-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.48fr);
    gap: 56px;
    align-items: end;
    margin-bottom: 50px;
  }

  .section-heading.compact {
    grid-template-columns: 1fr;
  }

  .section-heading h2,
  .about-copy h2,
  .contact-inner h2 {
    max-width: 780px;
    margin-top: 12px;
    font-size: clamp(36px, 4.9vw, 64px);
    line-height: 1.03;
  }

  .section-copy {
    margin: 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.72;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .project-card {
    min-height: 500px;
    padding: 27px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--surface);
    transition: transform 170ms ease, border-color 170ms ease, background 170ms ease;
  }

  .project-card::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 3px;
    opacity: 0.9;
  }

  .project-card:nth-child(1)::before { background: linear-gradient(90deg, var(--teal), transparent 72%); }
  .project-card:nth-child(2)::before { background: linear-gradient(90deg, var(--blue), transparent 72%); }
  .project-card:nth-child(3)::before { background: linear-gradient(90deg, var(--amber), transparent 72%); }
  .project-card:nth-child(4)::before { background: linear-gradient(90deg, var(--purple), transparent 72%); }

  .project-card:hover {
    transform: translateY(-4px);
    border-color: var(--line-strong);
    background: var(--surface-2);
  }

  .project-meta {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    color: var(--muted-2);
  }

  .project-title-row {
    margin-top: 38px;
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: flex-start;
  }

  .project-title-row h3 {
    margin: 0;
    color: var(--text-strong);
    font-size: clamp(30px, 3.9vw, 47px);
    letter-spacing: -0.04em;
  }

  .project-arrow {
    color: #8092b3;
    font-size: 20px;
  }

  .project-card > p {
    margin: 22px 0 0;
    color: #a8b3bf;
    line-height: 1.68;
    font-size: 15px;
  }

  .project-proof {
    margin-top: 22px;
    color: #cbd5df;
    font-size: 13px;
    line-height: 1.5;
    font-weight: 700;
  }

  .tag-list {
    margin: 23px 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    list-style: none;
  }

  .tag-list li {
    padding: 7px 9px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,0.018);
    color: #929eab;
    font-size: 11px;
  }

  .project-links {
    margin-top: auto;
    padding-top: 28px;
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    align-items: center;
    color: var(--muted);
    font-size: 12px;
    font-weight: 700;
  }

  .project-links a {
    transition: color 150ms ease;
  }

  .project-link-primary {
    color: #b7c8e6;
  }

  .project-links a:hover,
  .project-links a:focus-visible {
    color: var(--text-strong);
  }

  .project-links span {
    opacity: 0.55;
  }

  .earlier-work {
    margin-top: 16px;
    padding: 21px 24px;
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 26px;
    align-items: center;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255,255,255,0.012);
    color: var(--muted);
  }

  .earlier-work > span {
    color: #b5c0cb;
    font-size: 12px;
    font-weight: 700;
  }

  .earlier-work p {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    line-height: 1.55;
  }

  .earlier-work strong { color: #cbd3dc; }
  .earlier-work i { color: #596572; font-style: normal; }

  .toolkit-section {
    position: relative;
  }

  .toolkit-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .toolkit-card {
    min-height: 315px;
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: rgba(255,255,255,0.015);
  }

  .toolkit-card:nth-child(1) { border-top-color: rgba(120, 185, 173, 0.42); }
  .toolkit-card:nth-child(2) { border-top-color: rgba(135, 159, 208, 0.46); }
  .toolkit-card:nth-child(3) { border-top-color: rgba(189, 153, 99, 0.42); }
  .toolkit-card:nth-child(4) { border-top-color: rgba(161, 138, 196, 0.42); }

  .toolkit-top h3 {
    margin: 0;
    color: var(--text-strong);
    font-size: 16px;
    letter-spacing: -0.018em;
  }

  .toolkit-top span {
    display: block;
    min-height: 40px;
    margin-top: 8px;
    color: var(--muted-2);
    font-size: 11px;
    line-height: 1.55;
  }

  .toolkit-card ul {
    list-style: none;
    margin: 22px 0 0;
    padding: 0;
  }

  .toolkit-card li {
    padding: 10px 0;
    border-top: 1px solid var(--line);
    color: #a0abb7;
    font-size: 13px;
  }

  .experience-section {
    border-top: 1px solid var(--line);
  }

  .timeline {
    border-top: 1px solid var(--line);
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 210px 1fr;
    gap: 40px;
    padding: 34px 0 36px;
    border-bottom: 1px solid var(--line);
  }

  .timeline-date {
    padding-top: 5px;
    color: var(--muted-2);
  }

  .timeline-body {
    max-width: 830px;
  }

  .role-line {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    align-items: baseline;
  }

  .role-line h3 {
    margin: 0;
    color: var(--text-strong);
    font-size: 26px;
    letter-spacing: -0.03em;
  }

  .role-line span {
    color: #9eb0d0;
    font-size: 13px;
  }

  .timeline-body p {
    margin: 18px 0 0;
    color: var(--muted);
    line-height: 1.75;
  }

  .role-tags {
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .role-tags span {
    padding: 6px 9px;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: #8e9aa7;
    font-size: 11px;
  }

  .about-section {
    display: grid;
    grid-template-columns: 1.08fr 0.92fr;
    gap: 66px;
    align-items: start;
  }

  .about-copy p:not(.section-kicker) {
    max-width: 720px;
    color: var(--muted);
    line-height: 1.78;
    font-size: 16px;
  }

  .about-copy h2 + p {
    margin-top: 28px;
  }

  .credential-stack {
    display: grid;
    gap: 13px;
  }

  .credential-card {
    padding: 23px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--surface);
  }

  .credential-accent {
    background:
      linear-gradient(135deg, rgba(120, 185, 173, 0.055), transparent 58%),
      var(--surface);
  }

  .credential-card > span {
    color: var(--muted-2);
  }

  .credential-card h3 {
    margin: 20px 0 8px;
    color: #cfd8e1;
    font-size: 21px;
    letter-spacing: -0.025em;
  }

  .credential-card p,
  .credential-card small {
    margin: 0;
    color: var(--muted);
    line-height: 1.62;
  }

  .credential-card small {
    display: block;
    margin-top: 7px;
  }

  .contact-section {
    padding: 108px 0 112px;
    border-top: 1px solid var(--line);
    background:
      radial-gradient(circle at 15% 30%, rgba(120, 185, 173, 0.055), transparent 30%),
      var(--bg-soft);
  }

  .contact-inner {
    display: grid;
    grid-template-columns: 1fr 0.85fr;
    gap: 74px;
    align-items: start;
  }

  .contact-inner > div:first-child p:not(.section-kicker) {
    max-width: 700px;
    margin: 24px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.72;
  }

  .contact-panel {
    border: 1px solid var(--line);
    border-radius: 17px;
    overflow: hidden;
    background: var(--surface);
  }

  .contact-primary,
  .contact-row {
    min-height: 78px;
    padding: 17px 19px;
    display: grid;
    grid-template-columns: 80px 1fr auto;
    gap: 15px;
    align-items: center;
    border-bottom: 1px solid var(--line);
    transition: background 150ms ease;
  }

  .contact-primary {
    background: rgba(135, 159, 208, 0.075);
  }

  .contact-row:last-child {
    border-bottom: 0;
  }

  .contact-primary:hover,
  .contact-primary:focus-visible,
  .contact-row:hover,
  .contact-row:focus-visible {
    background: var(--surface-2);
  }

  .contact-primary span,
  .contact-row span {
    color: var(--muted-2);
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 740;
  }

  .contact-primary strong,
  .contact-row strong {
    color: #cbd5df;
    font-size: 13px;
    line-height: 1.45;
  }

  .contact-primary b,
  .contact-row b {
    color: #8ea3ca;
    font-size: 16px;
  }

  .site-footer {
    border-top: 1px solid var(--line);
    background: #0a0e13;
  }

  .footer-inner {
    min-height: 92px;
    display: flex;
    justify-content: space-between;
    gap: 28px;
    align-items: center;
    color: #65717e;
    font-size: 12px;
  }

  :focus-visible {
    outline: 2px solid #8fa4ca;
    outline-offset: 4px;
  }

  @media (max-width: 980px) {
    .hero {
      min-height: auto;
      grid-template-columns: 1fr;
      gap: 48px;
      padding-top: 92px;
    }

    .signal-card {
      max-width: 650px;
    }

    .metric-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .metric:nth-child(n + 3) {
      border-top: 1px solid var(--line);
    }

    .section-heading,
    .about-section,
    .contact-inner {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .toolkit-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 760px) {
    .topline {
      min-height: 66px;
    }

    .topline-links {
      gap: 12px;
    }

    .topline-links > a:not(.resume-pill):not(:first-child) {
      display: none;
    }

    .hero {
      padding: 78px 0 72px;
    }

    .hero h1 {
      font-size: clamp(45px, 13vw, 67px);
    }

    .hero-intro {
      font-size: 17px;
    }

    .section {
      padding: 90px 0;
    }

    .project-grid {
      grid-template-columns: 1fr;
    }

    .project-card {
      min-height: 0;
    }

    .earlier-work {
      grid-template-columns: 1fr;
      gap: 9px;
    }

    .timeline-item {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .role-line {
      display: grid;
      gap: 8px;
    }
  }

  @media (max-width: 560px) {
    .shell {
      width: min(calc(100% - 28px), var(--max));
    }

    .topline-name {
      font-size: 14px;
    }

    .topline-links > a:not(.resume-pill) {
      display: none;
    }

    .resume-pill {
      min-height: 34px;
      padding: 0 11px;
      font-size: 12px;
    }

    .metric-grid,
    .toolkit-grid {
      grid-template-columns: 1fr;
    }

    .metric {
      border-left: 1px solid var(--line);
      border-top: 1px solid var(--line);
    }

    .metric:first-child {
      border-top: 0;
    }

    .hero-actions {
      display: grid;
    }

    .button {
      width: 100%;
    }

    .project-card {
      padding: 22px;
    }

    .project-meta {
      display: grid;
      gap: 7px;
    }

    .project-title-row {
      margin-top: 28px;
    }

    .contact-primary,
    .contact-row {
      grid-template-columns: 68px 1fr auto;
      padding: 15px;
    }

    .footer-inner {
      padding: 25px 0;
      min-height: 0;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }

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
