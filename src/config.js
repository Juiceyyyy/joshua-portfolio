module.exports = {
  siteTitle: 'Joshua Menezes',
  siteDescription:
    'Software engineer in Mumbai building Python, backend, data, applied-AI, and quantitative systems.',
  siteKeywords:
    'Joshua Menezes, software engineer, Python developer, backend engineer, data engineer, FastAPI, Snowflake, applied AI, quantitative systems, Mumbai',
  siteUrl: 'https://joshua-menezes.vercel.app/',
  siteLanguage: 'en_US',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Joshua Menezes',
  location: 'Mumbai, India',
  email: 'joshuamenezes65@gmail.com',
  github: 'https://github.com/Juiceyyyy',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Juiceyyyy',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/joshuamenezes-/',
    },
  ],

  navLinks: [
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Experience',
      url: '/#experience',
    },
    {
      name: 'Toolkit',
      url: '/#toolkit',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#92f7c5',
    navy: '#0b0d10',
    darkNavy: '#080a0c',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
