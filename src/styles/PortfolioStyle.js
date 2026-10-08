import { createGlobalStyle } from 'styled-components';

const PortfolioStyle = createGlobalStyle`

  :root {
    --bg: #0d1117;
    --bg-deep: #090d12;
    --section-a: #10161e;
    --section-b: #121923;
    --section-c: #0f151d;
    --surface: #161d27;
    --surface-2: #1a2330;
    --surface-3: #202b39;
    --text: #dce5ee;
    --text-strong: #f0f4f8;
    --muted: #a6b1bd;
    --muted-2: #8793a0;
    --line: rgba(196, 211, 226, 0.13);
    --line-strong: rgba(196, 211, 226, 0.23);
    --teal: #78b9ad;
    --blue: #91a9d7;
    --amber: #c3a06a;
    --purple: #a995c7;
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
      radial-gradient(circle at 8% -8%, rgba(120, 185, 173, 0.12), transparent 29%),
      radial-gradient(circle at 91% 1%, rgba(145, 169, 215, 0.13), transparent 28%),
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
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
    border-bottom: 1px solid var(--line);
  }

  .topline-name {
    color: var(--text-strong);
    font-size: 16px;
    font-weight: 770;
    letter-spacing: -0.02em;
  }

  .topline-links {
    display: flex;
    align-items: center;
    gap: 22px;
    color: #a8b4c0;
    font-size: 14px;
  }

  .topline-links > a:not(.resume-pill) {
    position: relative;
    transition: color 160ms ease, transform 160ms ease;
  }

  .topline-links > a:not(.resume-pill)::after {
    content: "";
    position: absolute;
    left: 0;
    right: 100%;
    bottom: -5px;
    height: 1px;
    background: var(--blue);
    transition: right 180ms ease;
  }

  .topline-links > a:not(.resume-pill):hover,
  .topline-links > a:not(.resume-pill):focus-visible {
    color: var(--text-strong);
    transform: translateY(-1px);
  }

  .topline-links > a:not(.resume-pill):hover::after,
  .topline-links > a:not(.resume-pill):focus-visible::after {
    right: 0;
  }

  .resume-pill {
    min-height: 39px;
    padding: 0 15px;
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(145, 169, 215, 0.42);
    border-radius: 10px;
    background: rgba(145, 169, 215, 0.12);
    color: #d3def1;
    font-weight: 740;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition:
      transform 170ms ease,
      background 170ms ease,
      border-color 170ms ease,
      box-shadow 170ms ease;
  }

  .resume-pill:hover,
  .resume-pill:focus-visible {
    transform: translateY(-3px) scale(1.025);
    background: rgba(145, 169, 215, 0.21);
    border-color: rgba(145, 169, 215, 0.7);
    box-shadow: 0 14px 32px rgba(34, 47, 67, 0.3), 0 0 0 4px rgba(145, 169, 215, 0.07);
  }

  .hero {
    min-height: 700px;
    padding: 106px 0 96px;
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
    letter-spacing: 0.13em;
    font-size: 12px;
    font-weight: 760;
  }

  .eyebrow,
  .section-kicker {
    color: #91c8be;
  }

  .hero h1,
  .section-heading h2,
  .proof-heading h2,
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
    color: #c0cdea;
    text-shadow: 0 0 32px rgba(145, 169, 215, 0.09);
  }

  .hero-intro {
    max-width: 780px;
    margin: 30px 0 0;
    color: #bac4ce;
    font-size: clamp(18px, 2vw, 21px);
    line-height: 1.65;
  }

  .hero-actions {
    margin-top: 34px;
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
  }

  .button {
    min-height: 50px;
    padding: 0 19px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 11px;
    font-size: 14px;
    font-weight: 750;
    box-shadow: 0 8px 22px rgba(0,0,0,0.12);
    transition:
      transform 170ms ease,
      background 170ms ease,
      border-color 170ms ease,
      color 170ms ease,
      box-shadow 170ms ease;
  }

  .button:hover,
  .button:focus-visible {
    transform: translateY(-4px) scale(1.02);
  }

  .button-primary {
    background: #9fb5dc;
    color: #10161d;
    border-color: rgba(176, 198, 234, 0.55);
  }

  .button-primary:hover,
  .button-primary:focus-visible {
    background: #b0c2e2;
    box-shadow: 0 16px 36px rgba(68, 91, 127, 0.34), 0 0 0 4px rgba(145, 169, 215, 0.08);
  }

  .button-secondary {
    border-color: rgba(120, 185, 173, 0.43);
    background: rgba(120, 185, 173, 0.11);
    color: #c2e0da;
  }

  .button-secondary:hover,
  .button-secondary:focus-visible {
    border-color: rgba(120, 185, 173, 0.72);
    background: rgba(120, 185, 173, 0.19);
    box-shadow: 0 16px 36px rgba(39, 92, 82, 0.25), 0 0 0 4px rgba(120, 185, 173, 0.07);
  }

  .button-quiet {
    border-color: var(--line-strong);
    background: rgba(255, 255, 255, 0.025);
    color: #adb8c4;
  }

  .button-quiet:hover,
  .button-quiet:focus-visible {
    color: var(--text-strong);
    border-color: rgba(196, 211, 226, 0.34);
    background: rgba(255, 255, 255, 0.055);
    box-shadow: 0 14px 30px rgba(0,0,0,0.22);
  }

  .hero-proof {
    margin-top: 27px;
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }

  .hero-proof span {
    padding: 8px 11px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,0.024);
    color: #a4b0bd;
    font-size: 12px;
  }

  .signal-card {
    padding: 23px;
    border: 1px solid rgba(145, 169, 215, 0.18);
    border-radius: 18px;
    background:
      linear-gradient(160deg, rgba(145, 169, 215, 0.075), rgba(120, 185, 173, 0.028) 48%, transparent 75%),
      var(--surface);
    box-shadow: 0 28px 70px rgba(0,0,0,0.28);
  }

  .signal-header {
    padding-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 9px;
    color: #99a6b3;
    border-bottom: 1px solid var(--line);
  }

  .signal-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: var(--teal);
    box-shadow: 0 0 0 5px rgba(120, 185, 173, 0.08);
  }

  .signal-row {
    padding: 18px 0;
    display: grid;
    gap: 7px;
    border-bottom: 1px solid var(--line);
  }

  .signal-row span {
    color: #8c99a7;
    font-size: 12px;
  }

  .signal-row strong {
    color: #d0d9e3;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 650;
  }

  .signal-actions {
    padding-top: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9px;
  }

  .signal-actions a {
    min-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--line-strong);
    border-radius: 9px;
    background: rgba(255,255,255,0.025);
    color: #bdc8d4;
    font-size: 13px;
    font-weight: 720;
    transition:
      transform 160ms ease,
      background 160ms ease,
      color 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .signal-actions a:hover,
  .signal-actions a:focus-visible {
    transform: translateY(-2px);
    background: var(--surface-3);
    color: var(--text-strong);
    border-color: rgba(145, 169, 215, 0.38);
    box-shadow: 0 10px 24px rgba(0,0,0,0.2);
  }

  .proof-band {
    padding: 82px 0;
    border-top: 1px solid rgba(145, 169, 215, 0.15);
    border-bottom: 1px solid rgba(145, 169, 215, 0.12);
    background:
      radial-gradient(circle at 8% 20%, rgba(145, 169, 215, 0.08), transparent 26%),
      #101722;
  }

  .proof-layout {
    display: grid;
    grid-template-columns: minmax(240px, 0.72fr) minmax(0, 1.28fr);
    gap: 48px;
    align-items: stretch;
  }

  .proof-heading {
    padding: 8px 0;
  }

  .proof-heading h2 {
    margin-top: 12px;
    max-width: 430px;
    font-size: clamp(32px, 4vw, 50px);
    line-height: 1.05;
  }

  .proof-heading > p:last-child {
    max-width: 430px;
    margin: 20px 0 0;
    color: #aab5c1;
    font-size: 15px;
    line-height: 1.68;
  }

  .metric-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .metric {
    min-height: 172px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--line);
    border-radius: 15px;
    background: rgba(255,255,255,0.026);
    box-shadow: 0 12px 28px rgba(0,0,0,0.12);
    transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
  }

  .metric:nth-child(1) { background: linear-gradient(145deg, rgba(145,169,215,0.09), rgba(255,255,255,0.018)); }
  .metric:nth-child(2) { background: linear-gradient(145deg, rgba(120,185,173,0.085), rgba(255,255,255,0.018)); }
  .metric:nth-child(3) { background: linear-gradient(145deg, rgba(195,160,106,0.08), rgba(255,255,255,0.018)); }
  .metric:nth-child(4) { background: linear-gradient(145deg, rgba(169,149,199,0.08), rgba(255,255,255,0.018)); }

  .metric:hover {
    transform: translateY(-3px);
    border-color: var(--line-strong);
    background-color: rgba(255,255,255,0.04);
  }

  .metric-kicker {
    color: #8f9ba8;
    font-size: 12px;
    font-weight: 720;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .metric strong {
    margin-top: 10px;
    color: var(--text-strong);
    font-size: clamp(36px, 4vw, 50px);
    letter-spacing: -0.045em;
  }

  .metric:nth-child(1) strong { color: #b9cae9; }
  .metric:nth-child(2) strong { color: #a9d0c8; }
  .metric:nth-child(3) strong { color: #d2b482; }
  .metric:nth-child(4) strong { color: #c4b2d7; }

  .metric p {
    margin: 9px 0 0;
    color: #aab4c0;
    font-size: 13px;
    line-height: 1.55;
  }

  .section {
    padding: 122px 0;
    border-top: 1px solid var(--line);
  }

  .section-work {
    background:
      radial-gradient(circle at 88% 12%, rgba(145, 169, 215, 0.055), transparent 25%),
      var(--section-a);
  }

  .section-toolkit {
    background:
      radial-gradient(circle at 10% 12%, rgba(120, 185, 173, 0.055), transparent 24%),
      var(--section-b);
  }

  .section-experience {
    background:
      radial-gradient(circle at 90% 22%, rgba(195, 160, 106, 0.045), transparent 24%),
      var(--section-c);
  }

  .section-about {
    background:
      radial-gradient(circle at 16% 18%, rgba(169, 149, 199, 0.05), transparent 25%),
      #111821;
  }

  .section-heading {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 0.48fr);
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
    max-width: 800px;
    margin-top: 12px;
    font-size: clamp(36px, 4.9vw, 64px);
    line-height: 1.04;
  }

  .section-copy {
    margin: 0;
    color: #aeb9c4;
    font-size: 16px;
    line-height: 1.72;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .project-card {
    min-height: 505px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line-strong);
    border-radius: 19px;
    background: var(--surface);
    box-shadow: 0 18px 42px rgba(0,0,0,0.18);
    transition:
      transform 190ms ease,
      border-color 190ms ease,
      background 190ms ease,
      box-shadow 190ms ease;
  }

  .project-card::before {
    content: "";
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 4px;
    opacity: 0.95;
  }

  .project-card:nth-child(1) {
    background: linear-gradient(155deg, rgba(120,185,173,0.07), transparent 35%), var(--surface);
  }
  .project-card:nth-child(2) {
    background: linear-gradient(155deg, rgba(145,169,215,0.08), transparent 35%), var(--surface);
  }
  .project-card:nth-child(3) {
    background: linear-gradient(155deg, rgba(195,160,106,0.07), transparent 35%), var(--surface);
  }
  .project-card:nth-child(4) {
    background: linear-gradient(155deg, rgba(169,149,199,0.07), transparent 35%), var(--surface);
  }

  .project-card:nth-child(1)::before { background: linear-gradient(90deg, var(--teal), transparent 72%); }
  .project-card:nth-child(2)::before { background: linear-gradient(90deg, var(--blue), transparent 72%); }
  .project-card:nth-child(3)::before { background: linear-gradient(90deg, var(--amber), transparent 72%); }
  .project-card:nth-child(4)::before { background: linear-gradient(90deg, var(--purple), transparent 72%); }

  .project-card:hover {
    transform: translateY(-7px);
    border-color: rgba(196, 211, 226, 0.30);
    background-color: var(--surface-2);
    box-shadow: 0 26px 54px rgba(0,0,0,0.30);
  }

  .project-meta {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    color: #8c99a7;
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
    font-size: clamp(31px, 3.9vw, 48px);
    letter-spacing: -0.04em;
  }

  .project-arrow {
    color: #91a8d0;
    font-size: 21px;
    transition: transform 180ms ease, color 180ms ease;
  }

  .project-card:hover .project-arrow {
    transform: translate(3px, -3px);
    color: #bfd0ec;
  }

  .project-card > p {
    margin: 22px 0 0;
    color: #b0bbc6;
    line-height: 1.7;
    font-size: 16px;
  }

  .project-proof {
    margin-top: 22px;
    color: #d0d8e1;
    font-size: 14px;
    line-height: 1.55;
    font-weight: 700;
  }

  .tag-list {
    margin: 23px 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
  }

  .tag-list li {
    padding: 7px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,0.025);
    color: #a2adba;
    font-size: 12px;
  }

  .project-links {
    margin-top: auto;
    padding-top: 29px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    font-size: 13px;
    font-weight: 720;
  }

  .project-links a {
    min-height: 38px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--line);
    border-radius: 9px;
    color: #adb9c5;
    background: rgba(255,255,255,0.024);
    transition:
      transform 160ms ease,
      background 160ms ease,
      color 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .project-links a:hover,
  .project-links a:focus-visible {
    transform: translateY(-2px);
    color: var(--text-strong);
    background: var(--surface-3);
    border-color: var(--line-strong);
    box-shadow: 0 9px 22px rgba(0,0,0,0.18);
  }

  .project-link-primary {
    color: #c1d0e9 !important;
    border-color: rgba(145,169,215,0.32) !important;
    background: rgba(145,169,215,0.08) !important;
  }

  .project-link-primary:hover,
  .project-link-primary:focus-visible {
    background: rgba(145,169,215,0.15) !important;
    border-color: rgba(145,169,215,0.5) !important;
  }

  .project-links span {
    padding: 0 2px;
    color: #7f8b98;
    font-size: 12px;
  }

  .earlier-work {
    margin-top: 18px;
    padding: 22px 25px;
    display: grid;
    grid-template-columns: 170px 1fr;
    gap: 26px;
    align-items: center;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: rgba(255,255,255,0.022);
    color: #a3aeba;
  }

  .earlier-work > span {
    color: #c0cad4;
    font-size: 13px;
    font-weight: 720;
  }

  .earlier-work p {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    line-height: 1.6;
    font-size: 14px;
  }

  .earlier-work strong { color: #d0d7df; }
  .earlier-work i { color: #65717d; font-style: normal; }

  .toolkit-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 13px;
  }

  .toolkit-card {
    min-height: 320px;
    padding: 23px;
    border: 1px solid var(--line-strong);
    border-radius: 17px;
    background: var(--surface);
    box-shadow: 0 14px 34px rgba(0,0,0,0.14);
    transition: transform 170ms ease, border-color 170ms ease, box-shadow 170ms ease;
  }

  .toolkit-card:nth-child(1) { background: linear-gradient(160deg, rgba(120,185,173,0.075), transparent 42%), var(--surface); }
  .toolkit-card:nth-child(2) { background: linear-gradient(160deg, rgba(145,169,215,0.08), transparent 42%), var(--surface); }
  .toolkit-card:nth-child(3) { background: linear-gradient(160deg, rgba(195,160,106,0.07), transparent 42%), var(--surface); }
  .toolkit-card:nth-child(4) { background: linear-gradient(160deg, rgba(169,149,199,0.07), transparent 42%), var(--surface); }

  .toolkit-card:hover {
    transform: translateY(-5px);
    border-color: rgba(196, 211, 226, 0.28);
    box-shadow: 0 22px 44px rgba(0,0,0,0.24);
  }

  .toolkit-top h3 {
    margin: 0;
    color: var(--text-strong);
    font-size: 17px;
    letter-spacing: -0.018em;
  }

  .toolkit-top span {
    display: block;
    min-height: 44px;
    margin-top: 9px;
    color: #929fac;
    font-size: 12px;
    line-height: 1.6;
  }

  .toolkit-card ul {
    list-style: none;
    margin: 22px 0 0;
    padding: 0;
  }

  .toolkit-card li {
    padding: 10px 0;
    border-top: 1px solid var(--line);
    color: #adb8c3;
    font-size: 14px;
  }

  .timeline {
    border-top: 1px solid var(--line-strong);
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 210px 1fr;
    gap: 40px;
    padding: 36px 0 38px;
    border-bottom: 1px solid var(--line);
  }

  .timeline-date {
    padding-top: 5px;
    color: #8b97a4;
  }

  .timeline-body {
    max-width: 840px;
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
    font-size: 27px;
    letter-spacing: -0.03em;
  }

  .role-line span {
    color: #a8b8d6;
    font-size: 14px;
  }

  .timeline-body p {
    margin: 18px 0 0;
    color: #abb6c1;
    font-size: 16px;
    line-height: 1.76;
  }

  .role-tags {
    margin-top: 19px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .role-tags span {
    padding: 7px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,0.018);
    color: #99a6b3;
    font-size: 12px;
  }

  .about-section {
    display: grid;
    grid-template-columns: 1.08fr 0.92fr;
    gap: 66px;
    align-items: start;
  }

  .about-copy p:not(.section-kicker) {
    max-width: 720px;
    color: #adb8c3;
    line-height: 1.78;
    font-size: 16px;
  }

  .about-copy h2 + p {
    margin-top: 28px;
  }

  .credential-stack {
    display: grid;
    gap: 14px;
  }

  .credential-card {
    padding: 24px;
    border: 1px solid var(--line-strong);
    border-radius: 17px;
    background: var(--surface);
    box-shadow: 0 14px 34px rgba(0,0,0,0.14);
  }

  .credential-accent {
    background:
      linear-gradient(135deg, rgba(120, 185, 173, 0.08), rgba(145,169,215,0.035) 50%, transparent 72%),
      var(--surface);
  }

  .credential-card > span {
    color: #8f9ba8;
  }

  .credential-card h3 {
    margin: 20px 0 8px;
    color: #d2dae3;
    font-size: 22px;
    letter-spacing: -0.025em;
  }

  .credential-card p,
  .credential-card small {
    margin: 0;
    color: #a6b1bd;
    font-size: 14px;
    line-height: 1.65;
  }

  .credential-card small {
    display: block;
    margin-top: 7px;
  }

  .contact-section {
    padding: 108px 0 114px;
    border-top: 1px solid rgba(120,185,173,0.14);
    background:
      radial-gradient(circle at 14% 28%, rgba(120,185,173,0.08), transparent 29%),
      radial-gradient(circle at 88% 80%, rgba(145,169,215,0.06), transparent 24%),
      #0d141b;
  }

  .contact-inner {
    display: grid;
    grid-template-columns: 1fr 0.86fr;
    gap: 74px;
    align-items: start;
  }

  .contact-inner > div:first-child p:not(.section-kicker) {
    max-width: 700px;
    margin: 24px 0 0;
    color: #aeb9c4;
    font-size: 16px;
    line-height: 1.72;
  }

  .contact-panel {
    border: 1px solid var(--line-strong);
    border-radius: 18px;
    overflow: hidden;
    background: var(--surface);
    box-shadow: 0 24px 60px rgba(0,0,0,0.24);
  }

  .contact-primary,
  .contact-row {
    min-height: 82px;
    padding: 18px 20px;
    display: grid;
    grid-template-columns: 92px 1fr auto;
    gap: 15px;
    align-items: center;
    border-bottom: 1px solid var(--line);
    transition:
      transform 160ms ease,
      background 160ms ease,
      box-shadow 160ms ease;
  }

  .contact-primary {
    background: linear-gradient(90deg, rgba(145,169,215,0.12), rgba(120,185,173,0.05));
  }

  .contact-row:last-child {
    border-bottom: 0;
  }

  .contact-primary:hover,
  .contact-primary:focus-visible,
  .contact-row:hover,
  .contact-row:focus-visible {
    background: var(--surface-2);
    box-shadow: inset 3px 0 0 #8fa5ce;
  }

  .contact-primary span,
  .contact-row span {
    color: #8f9ba8;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.11em;
    font-weight: 740;
  }

  .contact-primary strong,
  .contact-row strong {
    color: #d1dae3;
    font-size: 14px;
    line-height: 1.5;
  }

  .contact-primary b,
  .contact-row b {
    color: #9bb0d6;
    font-size: 18px;
    transition: transform 160ms ease;
  }

  .contact-primary:hover b,
  .contact-primary:focus-visible b,
  .contact-row:hover b,
  .contact-row:focus-visible b {
    transform: translate(3px, -2px);
  }

  .site-footer {
    border-top: 1px solid var(--line);
    background: var(--bg-deep);
  }

  .footer-inner {
    min-height: 94px;
    display: flex;
    justify-content: space-between;
    gap: 28px;
    align-items: center;
    color: #7b8794;
    font-size: 13px;
  }

  :focus-visible {
    outline: 2px solid #91a8d0;
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

    .proof-layout {
      grid-template-columns: 1fr;
    }

    .proof-heading h2,
    .proof-heading > p:last-child {
      max-width: 720px;
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
      min-height: 68px;
    }

    .topline-links {
      gap: 12px;
    }

    .topline-links > a:not(.resume-pill):not(:first-child) {
      display: none;
    }

    .hero {
      padding: 78px 0 74px;
    }

    .hero h1 {
      font-size: clamp(45px, 13vw, 67px);
    }

    .hero-intro {
      font-size: 17px;
    }

    .proof-band {
      padding: 70px 0;
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
      min-height: 36px;
      padding: 0 12px;
      font-size: 12px;
    }

    .hero-actions {
      display: grid;
    }

    .button {
      width: 100%;
    }

    .metric-grid,
    .toolkit-grid {
      grid-template-columns: 1fr;
    }

    .metric {
      min-height: 155px;
    }

    .project-card {
      padding: 23px;
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
      grid-template-columns: 80px 1fr auto;
      padding: 16px;
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


/* Interaction: a full-width color wipe, not an elevation or glowing button. */
.topline-name {
  display: inline-flex;
  align-items: center;
  gap: 11px;
}
.brand-mark {
  width: 34px;
  height: 34px;
  flex: none;
  border-radius: 9px;
}
.button,
.resume-pill,
.signal-actions a,
.project-links a,
.contact-primary,
.contact-row {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  transform: none !important;
  box-shadow: none !important;
  transition: color 220ms ease, border-color 220ms ease !important;
}
.button::before,
.resume-pill::before,
.signal-actions a::before,
.project-links a::before,
.contact-primary::before,
.contact-row::before {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 0;
  background: var(--wipe-color, #435f85);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 310ms cubic-bezier(.2,.75,.25,1);
}
.button:hover::before,
.button:focus-visible::before,
.resume-pill:hover::before,
.resume-pill:focus-visible::before,
.signal-actions a:hover::before,
.signal-actions a:focus-visible::before,
.project-links a:hover::before,
.project-links a:focus-visible::before,
.contact-primary:hover::before,
.contact-primary:focus-visible::before,
.contact-row:hover::before,
.contact-row:focus-visible::before {
  transform: scaleX(1);
}
.button-primary { --wipe-color: #6687ba; }
.button-secondary { --wipe-color: #2f756e; }
.button-quiet { --wipe-color: #34465e; }
.resume-pill { --wipe-color: #516e9b; }
.signal-actions a { --wipe-color: #395978; }
.project-links a { --wipe-color: #344f75; }
.project-links .project-link-primary { --wipe-color: #456c9f; }
.contact-primary { --wipe-color: #3e5e88; }
.contact-row { --wipe-color: #263d58; }
.button-primary:hover,
.button-primary:focus-visible { color: #f4f8fc; }
.button-secondary:hover,
.button-secondary:focus-visible,
.button-quiet:hover,
.button-quiet:focus-visible,
.resume-pill:hover,
.resume-pill:focus-visible,
.signal-actions a:hover,
.signal-actions a:focus-visible,
.project-links a:hover,
.project-links a:focus-visible,
.contact-primary:hover,
.contact-primary:focus-visible,
.contact-row:hover,
.contact-row:focus-visible {
  color: #f1f5f9 !important;
}
.contact-primary:hover strong,
.contact-primary:focus-visible strong,
.contact-row:hover strong,
.contact-row:focus-visible strong {
  color: #f2f6fa;
}
.contact-primary:hover span,
.contact-row:hover span,
.contact-primary:focus-visible span,
.contact-row:focus-visible span {
  color: #d0dceb;
}
@media (prefers-reduced-motion: reduce) {
  .button::before,
  .resume-pill::before,
  .signal-actions a::before,
  .project-links a::before,
  .contact-primary::before,
  .contact-row::before {
    transition-duration: 0.001ms !important;
  }
}


.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 24px;
}
.not-found p { font-size: 13px; font-weight: 700; letter-spacing: .12em; color: #82b9ae; }
.not-found h1 { font-size: clamp(40px, 7vw, 76px); letter-spacing: -.05em; line-height: 1.08; color: #f0f4f8; }
.not-found a { padding: 13px 17px; border: 1px solid #506b90; border-radius: 10px; font-weight: 700; color: #c0d5f3; }
.not-found a:hover { background: #405d81; color: #fff; }

`;

export default PortfolioStyle;
