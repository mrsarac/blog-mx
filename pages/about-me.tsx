import React from 'react';
import { Box, Text, H1 } from '@maximeheckel/design-system';
import Image from 'next/legacy/image';
import Layout from '@core/layout';

const AboutPage = () => {
  return (
    <Layout footer header>
      <Box css={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <H1 css={{ marginBottom: '2rem' }}>About Me</H1>
        <Image
          src="/static/images/about-me/my-family.jpg"
          alt="My Family"
          width={500}
          height={667}
          layout="intrinsic"
        />
        <Text as="p" css={{ marginBottom: '1rem' }}>
          This is my family.
        </Text>

        <Text as="p" css={{ marginBottom: '1rem' }}>
          Hello, I am Mustafa Saraç. I am a technology enthusiast, software
          developer, designer, and musician. I have been working in web design
          and development since 2000. I completed my masters degree in
          Information Technologies at Sabancı University.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          Throughout my career, I have worked for leading media companies in
          Turkey. I conducted UX tests, designed web interfaces, and played an
          active role in bringing them to life. For a period, I led a frontend
          team of five people. Currently, I am living in Cologne, Germany, and
          working as a front-end developer for the TOMRA Sorting Digital team.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          Outside of work, I love being productive. I have been playing drums as
          an amateur for 15 years and have been learning to play the cajón for
          the past year. I am actively involved in a music band, and we give
          small concerts.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          I value personal development. I keep a daily journal, enjoy reading
          books, and like to research time management. I have a special interest
          in Personal Knowledge Management (PKM) and conduct experimental work
          in this area. I even developed and published my own note-taking
          application called Phinote for a short time. You can check it out at{' '}
          <a href="https://phinote.com">phinote.com</a>. I also published the
          Phinote HTML template on{' '}
          <a href="https://lab.mustafasarac.com/phione/">ThemeForest</a>.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          I enjoy sharing my ideas. I write articles on my personal blog at
          irregular intervals and create content for my{' '}
          <a href="https://www.youtube.com/@mustafasarac/videos">YouTube</a>{' '}
          channel.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          Additionally, I am deeply fascinated by the advancements in artificial
          intelligence. I eagerly follow the latest AI technologies, open-source
          projects, and potential opportunities in this field. I am particularly
          excited about discovering how AI is transforming our daily lives and
          the business world. Keeping up-to-date with AI developments has become
          a passion of mine, and I am constantly exploring ways to incorporate
          AI capabilities into my own projects.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          I love cycling, walking, and thinking while walking. I have noticed
          that during these activities, my mind opens up, and I generate
          creative ideas. I use talking to myself as an effective method for
          solving problems.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          My wife Ayşegül, my son Jerfi, and I have been living in Cologne since
          2020. This new life experience has given me the opportunity to
          encounter different cultures and ways of working.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          I have a tendency to think quickly and respond promptly, which can
          sometimes be a weakness. However, my determination to finish a task
          once I set my mind to it is one of my favorite qualities.
        </Text>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          I always enjoy sharing my experiences in technology, design, music,
          and personal development, and learning new things. If you &apos; d
          like to get in touch with me, you can reach me through my social media
          accounts or via email.
        </Text>
      </Box>
      <Box>
        <a href="https://app.netlify.com/sites/mustafasarac/deploys">
          <Image
            src="https://api.netlify.com/api/v1/badges/ce005a00-4fde-4ede-abfe-1f59285ae3bb/deploy-status"
            alt="Netlify Status"
            width={16}
            height={16}
          />
        </a>
      </Box>
    </Layout>
  );
};

export default AboutPage;
