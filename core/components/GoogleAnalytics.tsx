import Script from 'next/script';
import type { FC } from 'react';

interface GoogleAnalyticsProps {
  trackingId: string;
}

const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ trackingId }) => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
