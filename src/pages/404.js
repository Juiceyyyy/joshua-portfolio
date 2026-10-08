import React from 'react';
import Helmet from 'react-helmet';
import PortfolioStyle from '../styles/PortfolioStyle';

export default function NotFound() {
  return (
    <>
      <PortfolioStyle />
      <Helmet>
        <title>Page not found — Joshua Menezes</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
      <main className="not-found">
        <p>404 / PAGE NOT FOUND</p>
        <h1>This page doesn't exist.</h1>
        <a href="/">Return to my portfolio →</a>
      </main>
    </>
  );
}
