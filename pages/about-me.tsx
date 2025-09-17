import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-1200">
      <main className="mx-auto max-w-[750px] px-6 py-12 antialiased sm:py-24">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-1100 no-underline transition-colors hover:text-gray-1200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
          >
            <span aria-hidden="true">←</span>
            Back
          </Link>
        </div>
        <h1 className="text-3xl font-semibold">About Me</h1>
        <div className="mt-8 flex flex-col gap-6 text-gray-1100">
          <div className="overflow-hidden rounded-md">
            <Image
              src="/static/images/about-me/my-family.jpg"
              alt="My family"
              width={750}
              height={1000}
              className="h-auto w-full rounded-md object-cover"
              priority
            />
          </div>
          <p>This is my family.</p>
          <p>
            Hello, I am Mustafa Saraç. I am a technology enthusiast, software
            developer, designer, and musician. I have been working in web design
            and development since 2000. I completed my masters degree in
            Information Technologies at Sabancı University.
          </p>
          <p>
            Throughout my career, I have worked for leading media companies in
            Turkey. I conducted UX tests, designed web interfaces, and played an
            active role in bringing them to life. For a period, I led a frontend
            team of five people. Currently, I am living in Cologne, Germany, and
            working as a front-end developer for the TOMRA Sorting Digital team.
          </p>
          <p>
            Outside of work, I love being productive. I have been playing drums
            as an amateur for 15 years and have been learning to play the cajón
            for the past year. I am actively involved in a music band, and we
            give small concerts.
          </p>
          <p>
            I value personal development. I keep a daily journal, enjoy reading
            books, and like to research time management. I have a special
            interest in Personal Knowledge Management (PKM) and conduct
            experimental work in this area. I even developed and published my
            own note-taking application called Phinote for a short time. You can
            check it out at{' '}
            <a className="underline" href="https://phinote.com">
              phinote.com
            </a>
            . I also published the Phinote HTML template on{' '}
            <a
              className="underline"
              href="https://lab.mustafasarac.com/phione/"
            >
              ThemeForest
            </a>
            .
          </p>
          <p>
            I enjoy sharing my ideas. I write articles on my personal blog at
            irregular intervals and create content for my{' '}
            <a
              className="underline"
              href="https://www.youtube.com/@mustafasarac/videos"
            >
              YouTube
            </a>{' '}
            channel.
          </p>
          <p>
            Additionally, I am deeply fascinated by the advancements in
            artificial intelligence. I eagerly follow the latest AI
            technologies, open-source projects, and potential opportunities in
            this field. I am particularly excited about discovering how AI is
            transforming our daily lives and the business world. Keeping
            up-to-date with AI developments has become a passion of mine, and I
            am constantly exploring ways to incorporate AI capabilities into my
            own projects.
          </p>
          <p>
            I love cycling, walking, and thinking while walking. I have noticed
            that during these activities, my mind opens up, and I generate
            creative ideas. I use talking to myself as an effective method for
            solving problems.
          </p>
          <p>
            My wife Ayşegül, my son Jerfi, and I have been living in Cologne
            since 2020. This new life experience has given me the opportunity to
            encounter different cultures and ways of working.
          </p>
          <p>
            I have a tendency to think quickly and respond promptly, which can
            sometimes be a weakness. However, my determination to finish a task
            once I set my mind to it is one of my favorite qualities.
          </p>
          <p>
            I always enjoy sharing my experiences in technology, design, music,
            and personal development, and learning new things. If you&apos;d
            like to get in touch with me, you can reach me through my social
            media accounts or via email.
          </p>
          <div className="pt-6 flex gap-4">
            <a
              className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-1200 shadow-border transition-colors hover:bg-[#F5F4F4]"
              href="/static/cv/mustafa-sarac-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm underline"
              href="https://app.netlify.com/sites/mustafasarac/deploys"
            >
              <Image
                src="https://api.netlify.com/api/v1/badges/ce005a00-4fde-4ede-abfe-1f59285ae3bb/deploy-status"
                alt="Netlify deployment status"
                width={16}
                height={16}
              />
              Netlify Deploy Status
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
