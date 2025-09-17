import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';
import Seo from '@core/components/Seo';
import siteConfig from 'config/site';
import type { Post, ReadingTime } from 'types/post';

interface WebmentionBlogDataProps {
  date: string;
  postUrl: string;
  subtitle?: string;
}

const WebmentionBlogData = ({
  date,
  postUrl,
  subtitle,
}: WebmentionBlogDataProps) => (
  <>
    <time
      className="hidden-layout dt-published"
      itemProp="datepublished"
      dateTime={date}
    >
      {new Date(date).toISOString().replace('Z', '') + '+01:00'}
    </time>
    <a className="hidden-layout u-url" href={postUrl} />
    {subtitle ? (
      <p className="hidden-layout p-summary e-content">{subtitle}</p>
    ) : null}
  </>
);

interface Props {
  children: React.ReactNode;
  frontMatter: Post & { readingTime: ReadingTime };
  ogImage: string;
}

const BlogLayout = ({ children, frontMatter, ogImage }: Props) => {
  const { date, updated, slug, subtitle, title, readingTime } = frontMatter;
  const path = `/posts/${slug}/`;
  const postUrl = `${siteConfig.url}${path}`;

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-1200">
      <Seo
        title={title}
        desc={subtitle}
        image={ogImage}
        path={path}
        date={date}
        updated={updated}
      />
      <article className="h-entry">
        <div className="mx-auto max-w-[692px] px-6 py-12 antialiased sm:py-32 md:py-16">
          <header className="mb-16 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-1100 no-underline transition-colors hover:text-gray-1200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                data-testid="home-link"
              >
                <span aria-hidden="true">←</span>
                Back
              </Link>
            </div>
            <div className="space-y-4">
              <h1
                className="text-3xl font-semibold leading-tight text-gray-1200 sm:text-[34px]"
                data-testid="post-title"
              >
                {title}
              </h1>
              {subtitle ? (
                <p className="text-base leading-relaxed text-gray-1100">
                  {subtitle}
                </p>
              ) : null}
            </div>
          </header>

          <div
            className="flex flex-col gap-10 text-gray-1100"
            data-testid="post-content"
          >
            {children}
          </div>

          <footer className="mt-16 border-t border-gray-200 pt-8 text-sm text-gray-900">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-900">
              <time dateTime={date}>
                {format(new Date(Date.parse(date)), 'MMMM d, yyyy')}
              </time>
              <span aria-hidden="true">•</span>
              <span>{readingTime.text}</span>
              <span className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-1100">
                Updated {format(new Date(Date.parse(updated)), 'MMMM d, yyyy')}
              </span>
            </div>
            <p>
              Found something interesting? Reach out on
              <a
                className="mx-1 underline"
                href="https://twitter.com/mustafasaracAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              or
              <a
                className="mx-1 underline"
                href="https://github.com/mustafasarac"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </footer>
        </div>
        <WebmentionBlogData date={date} postUrl={postUrl} subtitle={subtitle} />
      </article>
    </div>
  );
};

export default BlogLayout;
