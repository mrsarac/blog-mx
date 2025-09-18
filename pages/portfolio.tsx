/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';

type Media = {
  type: 'image' | 'gif' | 'video';
  src: string;
  alt: string;
  poster?: string;
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
  { label: 'Deneyim', value: '20+ yıl' },
  { label: 'Ödül', value: '3 global' },
  { label: 'Odak', value: 'Veri odaklı arayüzler' },
];

const projects: Project[] = [
  {
    title: 'TOMRA Insight Dashboard',
    summary:
      'Endüstriyel sıralama makineleri için gerçek zamanlı veri platformu.',
    period: '2020 – 2021',
    company: 'MIR MEDIA Digital Agentur',
    media: {
      type: 'video',
      src:
        'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      poster:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
      alt: 'Gerçek zamanlı veri panosu ekran görüntüsü',
    },
    tags: ['Vue 3', 'TypeScript', 'SignalR'],
    links: [
      {
        href: 'https://www.tomra.com/en/sorting/insight',
        label: 'TOMRA Insight',
      },
    ],
  },
  {
    title: 'AspenTech Inmation Data Platform',
    summary:
      'Fabrika verilerini izleyen ölçeklenebilir React tabanlı dashboard seti.',
    period: '2021 – 2024',
    company: 'TOMRA Sorting & AspenTech',
    media: {
      type: 'image',
      src:
        'https://pplx-res.cloudinary.com/image/upload/v1758144607/pplx_project_search_images/589ea3373573dc6665179a042f10f404d51572e5.png',
      alt: 'AspenTech platformu arayüzü',
    },
    tags: ['React', 'TypeScript', 'D3.js'],
  },
  {
    title: 'Phione ThemeForest Template',
    summary: 'Ajanslar için tasarlanmış modern, tek sayfa HTML şablonu.',
    period: '2014 – 2015',
    company: 'ThemeForest',
    media: {
      type: 'gif',
      src:
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHB3ZTFta2NzdTh5MG1nM3FndHIxNm8zb2VtbG40cWg0bGt1YTlkdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nGMnDqebzDcfm/giphy.gif',
      alt: 'Sayfa kaydırma animasyonu',
    },
    tags: ['HTML5', 'SASS', 'Bootstrap'],
    links: [
      {
        href: 'https://lab.mustafasarac.com/phione/',
        label: 'Canlı ön izleme',
      },
    ],
  },
  {
    title: 'PhinoTE Desktop Not Uygulaması',
    summary: 'Markdown destekli çok platformlu not alma deneyimi.',
    period: '2018 – 2020',
    company: 'Kişisel proje',
    media: {
      type: 'image',
      src:
        'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
      alt: 'Masaüstü uygulaması kullanıcı arayüzü',
    },
    tags: ['Electron', 'Vue.js', 'SQLite'],
    links: [{ href: 'https://phinote.com', label: 'phinote.com' }],
  },
  {
    title: 'EV Telemetry Dashboard',
    summary: 'Elektrikli araç verilerini canlı izleyen mobil uyumlu panel.',
    period: '2024',
    company: 'Açık kaynak',
    media: {
      type: 'image',
      src:
        'https://pplx-res.cloudinary.com/image/upload/v1755062025/pplx_project_search_images/e6569029f0d488286cb6a1ba757ce146716baf06.png',
      alt: 'EV dashboard ekranı',
    },
    tags: ['Vue', 'WebSocket', 'Chart.js'],
    links: [
      { href: 'https://github.com/mustafasarac/ev-telemetry', label: 'GitHub' },
    ],
  },
  {
    title: 'SenderKing Email Platformu',
    summary: 'Milyonlarca e-postayı yöneten sürükle-bırak şablon editörü.',
    period: '2015 – 2020',
    company: 'IHS Telekom',
    media: {
      type: 'image',
      src:
        'https://pplx-res.cloudinary.com/image/upload/v1754806364/pplx_project_search_images/1c7fa26fe42f1aa17c0072db6d2a0bc5fd63fb58.png',
      alt: 'Email kampanya panosu',
    },
    tags: ['Vue', 'PHP', 'MySQL'],
    links: [{ href: 'https://senderking.com', label: 'senderking.com' }],
  },
  {
    title: 'fCase Fraud Detection',
    summary: 'Makine öğrenmesiyle dolandırıcılık vakalarını yöneten sistem.',
    period: '2015 – 2020',
    company: 'IHS Telekom',
    media: {
      type: 'image',
      src:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
      alt: 'Siber güvenlik görselleştirmesi',
    },
    tags: ['React', 'Node.js', 'ML API'],
    links: [{ href: 'https://fraud.com', label: 'fraud.com' }],
  },
];

const skillColumns = [
  ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular'],
  ['TailwindCSS', 'SASS', 'Design Systems', 'Storybook'],
  ['REST & WebSocket', 'GraphQL', 'UX Araştırması', 'A/B Testleri'],
];

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-1200">
      <Head>
        <title>Portfolyo | Mustafa Saraç</title>
        <meta
          name="description"
          content="Mustafa Saraç'ın seçilmiş projeleri, becerileri ve ödülleri. Frontend odaklı portfolyo."
        />
      </Head>
      <main className="mx-auto max-w-[692px] px-6 py-12 antialiased sm:py-24">
        <header className="mb-16 sm:mb-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-1100 no-underline transition-colors hover:text-gray-1200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <span aria-hidden="true">←</span>
            Ana sayfa
          </Link>
          <div className="mt-8 flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight sm:text-[40px]">
                Mustafa Saraç Portfolyo
              </h1>
              <p className="mt-3 max-w-[540px] text-sm leading-6 text-gray-1100 sm:text-base">
                Veri odaklı arayüzler ve performanslı frontend ürünleri
                tasarlayıp inşa ediyorum. Aşağıda son yıllarda yönettiğim ve
                katkı sağladığım projelerden kısa notlar var.
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-3 text-sm text-gray-1100 sm:grid-cols-3">
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
              Projeler
            </h2>
            <span className="text-xs text-gray-900">Seçilmiş 7 çalışma</span>
          </div>
          <div className="flex flex-col gap-10">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-lg border border-gray-300 bg-white px-4 pb-5 pt-4 shadow-border transition-colors hover:border-gray-500"
              >
                <div
                  className="overflow-hidden rounded-md border border-gray-300 bg-gray-200"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  {project.media.type === 'video' ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      preload="metadata"
                      poster={project.media.poster}
                    >
                      <source src={project.media.src} type="video/mp4" />
                      Video desteklenmiyor.
                    </video>
                  ) : (
                    <img
                      src={project.media.src}
                      alt={project.media.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
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
            Odak Alanları
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

        <section aria-labelledby="awards-heading" className="mt-16 sm:mt-24">
          <h2
            id="awards-heading"
            className="text-[15px] font-medium uppercase tracking-wide text-gray-1000"
          >
            Ödüller & Eğitim
          </h2>
          <div className="mt-6 grid gap-6 text-sm text-gray-1100 sm:grid-cols-2">
            <div className="rounded-md border border-gray-300 bg-white px-4 py-4 shadow-border">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-1000">
                Ödüller
              </h3>
              <ul className="mt-2 space-y-2">
                <li>Red Dot Design Award · TOMRA Insight · 2021</li>
                <li>German Design Award · TOMRA Insight · 2021</li>
                <li>iF Design Award · TOMRA Insight · 2021</li>
              </ul>
            </div>
            <div className="rounded-md border border-gray-300 bg-white px-4 py-4 shadow-border">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-1000">
                Eğitim
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  Sabancı Üniversitesi · Bilgi Teknolojileri Yüksek Lisansı ·
                  2018
                </li>
                <li>Anadolu Üniversitesi · İşletme Lisansı · 2008</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-heading" className="mt-16 sm:mt-24">
          <h2
            id="contact-heading"
            className="text-[15px] font-medium uppercase tracking-wide text-gray-1000"
          >
            İletişim
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-sm text-gray-1100">
            <p>
              İşbirliği ve danışmanlık talepleri için{' '}
              <a className="underline" href="mailto:mr.sarac@gmail.com">
                mr.sarac@gmail.com
              </a>{' '}
              adresine yazabilir veya LinkedIn üzerinden mesaj bırakabilirsiniz.
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
                href="https://github.com/saracmustafa"
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
