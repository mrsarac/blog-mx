import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ConsentBanner from '@core/components/ConsentBanner';
import GoogleAnalytics from '@core/components/GoogleAnalytics';
import { DefaultSeo } from '@core/components/Seo';
import { Analytics } from '@vercel/analytics/react';
import 'styles/tailwind.css';
import 'styles/global.css';
import 'styles/font.css';

const GA_CONSENT_KEY = 'ga-consent-v1';

const App = ({ Component, pageProps }: AppProps) => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedValue = window.localStorage.getItem(GA_CONSENT_KEY);
    if (storedValue === 'granted') {
      setHasConsent(true);
    } else {
      setHasConsent(false);
    }
  }, []);

  const handleConsent = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(GA_CONSENT_KEY, 'granted');
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    setHasConsent(true);
  };

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="google-site-verification"
          content="f11boUvGIzjbYwQVuaCieN-J4vcA_BxJuO_S54WPf-U"
        />
      </Head>
      <DefaultSeo />
      {hasConsent && <GoogleAnalytics trackingId="G-Q5GQHSWLE6" />}
      <Component {...pageProps} />
      <Analytics />
      {hasConsent === false && <ConsentBanner onAccept={handleConsent} />}
    </>
  );
};

export default App;
