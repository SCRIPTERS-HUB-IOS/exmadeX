import '../styles/globals.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [brightness, setBrightness] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem('brightness');
    if (stored) setBrightness(parseFloat(stored));
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--site-brightness', brightness);
    localStorage.setItem('brightness', brightness);
  }, [brightness]);

  return <Component {...pageProps} brightness={brightness} setBrightness={setBrightness} />;
}
