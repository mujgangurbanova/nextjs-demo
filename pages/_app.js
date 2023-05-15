// pages/_app.js
import React from 'react';
import App from 'next/app';

function MyApp({ Component, pageProps }) {
  // Additional logic or global setup can be done here

  return <Component {...pageProps} />;
}

export default MyApp;
