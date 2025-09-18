import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllFilesFrontMatter } from 'lib/mdx';
import type { Post } from 'types/post';

interface Props {
  posts: Post[];
}

const projects = [
  {
    title: 'Phinote',
    description:
      'A personal knowledge management app I designed to make my reading notes more useful.',
    href: 'https://phinote.com',
  },
  {
    title: 'ThemeForest Templates',
    description:
      'Premium web templates crafted for creators, including the Phione HTML themes.',
    href: 'https://lab.mustafasarac.com/phione/',
  },
  {
    title: 'YouTube Channel',
    description:
      'Videos about productivity, PKM, and the systems I build to stay curious.',
    href: 'https://www.youtube.com/@mustafasarac/videos',
  },
];

const HomePage = ({ posts }: Props) => {
  const writing = posts
    .filter((post) => post.language === 'en')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8);

  const turkishWriting = posts
    .filter((post) => post.language === 'tr')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-1200">
      <div className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 antialiased sm:py-32 md:overflow-x-visible md:py-16">
        <header className="mb-32 flex flex-col items-start leading-7 ">
          <Link
            href="/"
            className="inline-block font-medium no-underline"
          >
            Mustafa Saraç
          </Link>
          <span className="text-[15px] font-medium leading-none text-gray-1100">
            Frontend Engineer
          </span>
        </header>

        <main>
          <span className="mb-5 block text-[15px] font-medium sm:mb-6 leading-6 leading-7">
            Today
          </span>
          <p className="text-gray-1100">
            Scouting my next role, doubling down on AI experiments,
            and documenting the process. Balance comes from studying German and
            chasing grooves on the drums.
          </p>

          <section className="-mb-3 mt-16 sm:mt-32">
            <span className="mb-5 block text-[15px] font-medium sm:mb-4">
              Projects
            </span>
            <div className="flex flex-col gap-7 sm:gap-4">
              {projects.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 flex flex-col rounded-md px-3 py-2 no-underline transition-colors hover:bg-[#F5F4F4] sm:py-3"
                >
                  <span className="font-medium">{project.title}</span>
                  <span className="text-sm text-gray-1100">
                    {project.description}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 sm:mt-32">
            <span className="mb-5 block text-[15px] font-medium sm:mb-4">
              Writing
            </span>
            <div className="flex flex-col gap-7 sm:gap-4">
              {writing.map((post) => (
                <Link
                  key={post.slug}
                  href={`/posts/${post.slug}/`}
                  className="-mx-3 flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-[#F5F4F4] sm:py-3"
                >
                  <span className="font-medium">{post.title}</span>
                  <span className="text-sm text-gray-1100">
                    {post.subtitle || '—'}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {turkishWriting.length > 0 && (
            <section className="mt-16 sm:mt-32">
              <span className="mb-5 block text-[15px] font-medium sm:mb-4">
                Türkçe Yazılar
              </span>
              <div className="flex flex-col gap-7 sm:gap-4">
                {turkishWriting.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}/`}
                    className="-mx-3 flex flex-col rounded-md px-3 py-2 transition-colors hover:bg-[#F5F4F4] sm:py-3"
                  >
                    <span className="font-medium">{post.title}</span>
                    <span className="text-sm text-gray-1100">
                      {post.subtitle || '—'}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16 pb-1 sm:mt-32 hidden">
            <span className="mb-5 block text-[15px] font-medium sm:mb-6">
              Newsletter
            </span>
            <span className="block text-gray-1100">
              Monthly insights on PKM, productivity systems, and learning with
              AI. No spam, just what I&apos;m experimenting with.
            </span>
            <form
              action="https://newsletter.mustafasarac.com"
              method="post"
              target="_blank"
              className="mt-6 flex h-10 items-center justify-between gap-2 overflow-hidden rounded-md border border-gray-200 bg-white shadow-border transition-colors focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-black/20"
            >
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-full w-[40%] grow border-none bg-transparent px-3.5 text-[15px] text-gray-1200 placeholder:text-gray-900 outline-none"
              />
              <button
                type="submit"
                className="mr-1 h-[30px] w-[80px] rounded-[4px] bg-gray-1200 px-1.5 text-sm font-medium text-gray-100 outline-none transition-colors hover:bg-gray-1200/90 focus:shadow-focus-ring md:w-[104px] md:px-3.5"
              >
                Subscribe
              </button>
            </form>
          </section>

          <section className="mt-16 sm:mt-32">
            <span className="mb-5 block text-[15px] font-medium sm:mb-6">
              More
            </span>
            <span className="text-gray-1100">
              You can see more of my work on{' '}
              <a
                href="https://twitter.com/mustafasaracAI"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Twitter
              </a>{' '}
              and more of my code on{' '}
              <a
                href="https://github.com/mustafasarac"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
              .
            </span>
          </section>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllFilesFrontMatter();

  return {
    props: {
      posts,
    },
  };
};

export default HomePage;
