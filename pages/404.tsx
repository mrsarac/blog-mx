import Link from 'next/link';
import { DefaultSeo } from '@core/components/Seo';
import siteConfig from '../config/site';

const NotFoundPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 text-gray-1200">
    <DefaultSeo title={`404: Not found - ${siteConfig.title}`} />
    <div className="max-w-xl text-center">
      <h1 className="text-4xl font-semibold">404 – Not Found</h1>
      <p className="mt-6 text-gray-1100">
        Oh no! You just got lost 😱 Don&apos;t worry, I&apos;ve got you.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-1200 shadow-border transition-colors hover:bg-[#F5F4F4]"
      >
        Go back home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
