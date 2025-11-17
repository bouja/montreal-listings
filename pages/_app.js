import React from 'react';
import '../styles/globals.css';
import dynamic from 'next/dynamic';
const Analytics = dynamic(() => import('../utils/analytics'), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}