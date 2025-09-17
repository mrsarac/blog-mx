import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from '@core/components/Seo';
import { Analytics } from '@vercel/analytics/react';
import 'styles/tailwind.css';
import 'styles/global.css';
import 'styles/font.css';

const App = ({ Component, pageProps }: AppProps) => {
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
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
