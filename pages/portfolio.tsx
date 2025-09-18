import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type Media =
  | {
      type: 'image' | 'gif';
      src: string;
      alt: string;
    }
  | {
      type: 'video';
      src: string;
      alt: string;
      poster?: string;
    }
  | {
      type: 'none';
      alt: string;
    };

type Project = {
  title: string;
  summary: string;
  period: string;
  company: string;
  media: Media;
  tags: string[];
  links?: { href: string; label: string }[];
};

const stats = [
  { label: 'Experience', value: '20+ years' },
  { label: 'Awards', value: '3 global' },
  { label: 'Focus', value: 'Data-driven interfaces' },
];

const projects: Project[] = [
  {
    title: 'AspenTech Inmation WebStudio',
    summary:
      'Built high-performance industrial data visualization interfaces on the AspenTech Inmation WebStudio platform with React and TypeScript.',
    period: 'Jan 2025 – Jun 2025',
    company: 'AspenTech',
    media: {
      type: 'image',
      src: '/portfolio/aspentech-inmation/platform-overview.png',
      alt: 'AspenTech Inmation control dashboard view',
    },
    tags: ['Frontend Team', 'React', 'TypeScript', 'Industrial Data'],
    links: [
      {
        href: 'https://www.aspentech.com/en/products/aspentech-inmation',
        label: 'aspentech.com/inmation',
      },
    ],
  },
  {
    title: 'TOMRA Insight Dashboard',
    summary:
      'Scaled the real-time TOMRA Insight analytics platform with Vue 3 and TypeScript, orchestrating live data streams via SignalR.',
    period: 'Jul 2021 – Nov 2024',
    company: 'TOMRA Sorting',
    media: {
      type: 'image',
      src: '/portfolio/tomra-insight/dashboard-overview.png',
      alt: 'TOMRA Insight real-time analytics dashboard',
    },
    tags: ['Frontend Team', 'Vue 3', 'TypeScript', 'SignalR'],
    links: [
      {
        href: 'https://www.tomra.com/en/sorting/insight',
        label: 'tomra.com/insight',
      },
    ],
  },
  {
    title: 'Recalibrate Healthcare',
    summary:
      'Delivered personalized care plan management tools backed by a Strapi headless CMS, using Vue 3, Vite, and Tailwind CSS.',
    period: '2024',
    company: 'Freelance',
    media: {
      type: 'video',
      src: '/portfolio/recalibrate-healthcare/recalibrate-demo.mp4',
      poster: '/portfolio/recalibrate-healthcare/recalibrate-overview.png',
      alt: 'Recalibrate Health platform interaction preview',
    },
    tags: ['Vue 3', 'Vite', 'Tailwind CSS', 'Strapi'],
    links: [
      {
        href: 'https://recalibratehealthcare.com/',
        label: 'recalibratehealthcare.com',
      },
    ],
  },
  {
    title: 'EV Telemetry Dashboard',
    summary:
      'Created a real-time electric vehicle telemetry dashboard with Next.js, React, Zustand, and Tailwind CSS.',
    period: '2025',
    company: 'Open Source',
    media: {
      type: 'gif',
      src: '/portfolio/ev-telemetry/overview.gif',
      alt: 'EV Telemetry live chart stream',
    },
    tags: ['Next.js', 'React', 'Zustand', 'Tailwind CSS'],
    links: [
      {
        href: 'https://github.com/mustafasarac/ev-telemetry',
        label: 'GitHub',
      },
    ],
  },
  {
    title: 'FF Readwise Translator',
    summary:
      'Firefox extension that translates on the fly and sends highlights to Readwise while reading.',
    period: '2025',
    company: 'Open Source',
    media: {
      type: 'gif',
      src: '/portfolio/ff-translator/panel.gif',
      alt: 'Readwise translation extension interaction',
    },
    tags: ['Firefox Add-on', 'TypeScript', 'API'],
    links: [
      {
        href: 'https://github.com/mrsarac/ffreadwise-translator-plugin',
        label: 'GitHub',
      },
    ],
  },
  {
    title: 'Powercepts',
    summary:
      "This website I developed for Powercepts was built with React and Next.js to showcase the company's services in a modern and user-friendly way.",
    period: '2025',
    company: 'Freelance',
    media: {
      type: 'gif',
      src: '/portfolio/powercepts/dashboard.gif',
      alt: 'Powercepts intelligent dashboard prototype',
    },
    tags: ['Next.js', 'React', 'Tailwind CSS', 'i18next'],
    links: [
      {
        href: 'https://powercepts.com',
        label: 'powercepts.com',
      },
    ],
  },
  {
    title: 'Elbphilharmonie',
    summary:
      'Joined the frontend team to shape the Elbphilharmonie visitor journey, helping implement the interface and motion details.',
    period: '2021',
    company: 'Mir Media',
    media: {
      type: 'gif',
      src: '/portfolio/elbphilharmonie/home.gif',
      alt: 'Elbphilharmonie website homepage interaction',
    },
    tags: ['Frontend Team', 'UX', 'Motion', 'Culture'],
    links: [
      {
        href: 'https://www.elbphilharmonie.de/',
        label: 'elbphilharmonie.de',
      },
    ],
  },
  {
    title: 'Wiener Philharmoniker',
    summary:
      'Contributed to the frontend team for the Wiener Philharmoniker archive interface prototype, focusing on accessibility and user experience.',
    period: '2023',
    company: 'Mir Media',
    media: {
      type: 'gif',
      src: '/portfolio/vienna-philharmonic/performance.gif',
      alt: 'Vienna Philharmonic archive interface prototype',
    },
    tags: ['Frontend Team', 'Vue.js', 'UX', 'Accessibility'],
    links: [
      {
        href: 'https://www.wienerphilharmoniker.at/en/',
        label: 'wienerphilharmoniker.at',
      },
    ],
  },
  {
    title: 'Do Something for a Minute',
    summary:
      'Built dosomethingforaminute.com in 2025 as an open-source React tool that launches ultra-short focus sessions with curated prompts.',
    period: '2025',
    company: 'Open Source',
    media: {
      type: 'gif',
      src: '/portfolio/do-something-for-a-minute/interaction.gif',
      alt: 'Do Something for a Minute application flow',
    },
    tags: ['React', 'Next.js', 'TypeScript'],
    links: [
      {
        href: 'https://github.com/mrsarac/DoSomethingForAMinute',
        label: 'GitHub',
      },
      {
        href: 'https://www.dosomethingforaminute.com',
        label: 'dosomethingforaminute.com',
      },
    ],
  },
  {
    title: 'Phinote Desktop',
    summary: 'Cross-platform note taking experience with Markdown support.',
    period: '2018 – 2020',
    company: 'Personal Project',
    media: {
      type: 'video',
      src: '/portfolio/phinote/editor-demo.mp4',
      poster: '/portfolio/phinote/editor-overview.png',
      alt: 'Phinote desktop application preview',
    },
    tags: ['Electron', 'Vue', 'SQLite'],
    links: [
      { href: 'https://github.com/mrsarac/phinote', label: 'GitHub' },
      { href: 'https://phinote.com', label: 'phinote.com' },
    ],
  },
  {
    title: 'fCase Fraud Detection',
    summary:
      'Implemented machine-learning powered fraud operations dashboards and automation for the fCase platform.',
    period: 'Jun 2015 – Jan 2020',
    company: 'IHS Telekom',
    media: {
      type: 'image',
      src: '/portfolio/fcase/dashboard-overview.png',
      alt: 'fCase risk analytics dashboard',
    },
    tags: ['Angular', 'e2e', 'Data Viz'],
    links: [{ href: 'https://fraud.com', label: 'fraud.com' }],
  },
  {
    title: 'SenderKing Email Automation',
    summary:
      'Led the cloud-based SenderKing platform, shipping template editors, A/B testing, and analytics while launching two startups.',
    period: 'Jun 2015 – Jan 2020',
    company: 'IHS Telekom',
    media: {
      type: 'none',
      alt: 'Visual not available for SenderKing email automation project',
    },
    tags: ['Angular', 'A/B Testing', 'Product Lead'],
  },
  {
    title: 'Phione HTML5 Theme',
    summary:
      'Themeforest  HTML5 template with a modern, clean design and responsive layout.',
    period: 'Mar 2014',
    company: 'Freelance',
    media: {
      type: 'image',
      src: '/portfolio/phione/theme-overview.png',
      alt: '',
    },
    tags: ['JavaScript', 'HTML', 'CSS', 'UI/UX'],
    links: [
      {
        href: 'https://lab.mustafasarac.com/phione/',
        label: 'View Live Demo',
      },
    ],
  },
];

const skillColumns = [
  ['JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js'],
  ['Design Systems', 'TailwindCSS', 'Motion', 'Storybook'],
  ['Real-time Data', 'UX Research', 'A/B Testing', 'Design Ops'],
];

const mediaSizes =
  '(min-width: 768px) 656px, (min-width: 640px) 592px, calc(100vw - 48px)';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-1200">
      <Head>
        <title>Portfolio | Mustafa Saraç</title>
        <meta
          name="description"
          content="Selected projects by Mustafa Saraç focusing on product design and frontend engineering."
        />
      </Head>
      <main className="mx-auto max-w-[692px] px-6 py-12 antialiased sm:py-24">
        <header className="mb-16 sm:mb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-1100 no-underline transition-colors hover:text-gray-1200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <span aria-hidden="true">←</span>
            Home
          </Link>
          <div className="mt-8 flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-[40px]">
                Mustafa Saraç Portfolio
              </h1>
              <p className="mt-3 max-w-[540px] text-sm leading-6 text-gray-1100 sm:text-base">
                I design and build data-driven interfaces and high-performance
                frontend products. Here are highlights from selected projects
                and the outcomes they delivered.
              </p>
            </div>
            <dl className="hidden grid-cols-1 gap-3 text-sm text-gray-1100 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-md border border-gray-400 bg-white px-4 py-3 shadow-border"
                >
                  <dt className="text-[13px] uppercase tracking-wide text-gray-1000">
                    {item.label}
                  </dt>
                  <dd className="text-lg font-medium text-gray-1200">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section aria-labelledby="projects-heading" className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h2
              id="projects-heading"
              className="text-[15px] font-medium uppercase tracking-wide text-gray-1000"
            >
              Projects
            </h2>
            <span className="text-xs text-gray-900">
              Selected {projects.length} works
            </span>
          </div>
          <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="rounded-lg border border-gray-300 bg-white px-4 pb-5 pt-4 shadow-border transition-colors hover:border-gray-500"
              >
                <div
                  className="relative overflow-hidden rounded-md border border-gray-300 bg-gray-200"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  {project.media.type === 'video' ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      preload="metadata"
                      poster={project.media.poster}
                      aria-label={project.media.alt}
                    >
                      <source src={project.media.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.media.type === 'none' ? (
                    <div className="flex h-full w-full items-center justify-center bg-gray-300 text-center text-sm text-gray-1000">
                      <span>{project.media.alt}</span>
                    </div>
                  ) : (
                    <Image
                      src={project.media.src}
                      alt={project.media.alt}
                      fill
                      priority={index < 2}
                      className="object-cover"
                      sizes={mediaSizes}
                      unoptimized={project.media.type === 'gif'}
                    />
                  )}
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-1200">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-1000">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 text-xs text-gray-900">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.period}</span>
                  </div>
                  <ul className="flex flex-wrap gap-2 text-xs font-medium text-gray-1000">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-gray-400 bg-gray-200 px-2 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 text-sm">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-gray-1100 underline transition-colors hover:text-gray-1200"
                        >
                          {link.label}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="mt-16 sm:mt-24">
          <h2
            id="skills-heading"
            className="text-[15px] font-medium uppercase tracking-wide text-gray-1000"
          >
            Focus Areas
          </h2>
          <div className="mt-6 grid gap-4 text-sm text-gray-1100 sm:grid-cols-3">
            {skillColumns.map((column, columnIndex) => (
              <ul
                key={columnIndex}
                className="rounded-md border border-gray-300 bg-white px-4 py-4 shadow-border"
              >
                {column.map((skill) => (
                  <li key={skill} className="py-1">
                    {skill}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="awards-heading"
          className="mt-16 hidden sm:mt-24"
        >
          <h2
            id="awards-heading"
            className="text-[15px] font-medium uppercase tracking-wide text-gray-1000"
          >
            Awards & Education
          </h2>
          <div className="mt-6 grid gap-6 text-sm text-gray-1100 sm:grid-cols-2">
            <div className="rounded-md border border-gray-300 bg-white px-4 py-4 shadow-border">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-1000">
                Awards
              </h3>
              <ul className="mt-2 space-y-2">
                <li>Red Dot Design Award · TOMRA Insight · 2021</li>
                <li>German Design Award · TOMRA Insight · 2021</li>
                <li>iF Design Award · TOMRA Insight · 2021</li>
              </ul>
            </div>
            <div className="rounded-md border border-gray-300 bg-white px-4 py-4 shadow-border">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-1000">
                Education
              </h3>
              <ul className="mt-2 space-y-2">
                <li>Sabanci University · MSc Information Technology · 2018</li>
                <li>Anadolu University · BSc Business Administration · 2008</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="mt-16 sm:mt-24">
          <h2
            id="contact-heading"
            className="text-[15px] font-medium uppercase tracking-wide text-gray-1000"
          >
            Contact
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-sm text-gray-1100">
            <p>
              For collaboration or consulting inquiries, email{' '}
              <a className="underline" href="mailto:mr.sarac@gmail.com">
                mr.sarac@gmail.com
              </a>{' '}
              or drop a note on LinkedIn.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://linkedin.com/in/mrsarac"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-400 bg-white px-3 py-2 text-sm font-medium text-gray-1100 shadow-border transition-colors hover:bg-[#F5F4F4]"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mrsarac"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-400 bg-white px-3 py-2 text-sm font-medium text-gray-1100 shadow-border transition-colors hover:bg-[#F5F4F4]"
              >
                GitHub
              </a>
              <a
                href="https://www.mustafasarac.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-400 bg-white px-3 py-2 text-sm font-medium text-gray-1100 shadow-border transition-colors hover:bg-[#F5F4F4]"
              >
                mustafasarac.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
