import {
  styled,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  VisuallyHidden,
  H1,
  H2,
} from '@maximeheckel/design-system';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '@core/layout';
import { getAllFilesFrontMatter } from 'lib/mdx';
import { Post } from 'types/post';
import React from 'react';
import { templateColumnsMedium } from 'styles/grid';

interface Props {
  posts: Post[];
}

const WavingHand = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      style={{
        marginBottom: '-20px',
        marginRight: '-45px',
        paddingBottom: '20px',
        paddingRight: '45px',
        display: 'inline-block',
      }}
      animate={isClient ? { rotate: 20 } : {}}
      transition={
        isClient
          ? {
              repeat: 7,
              repeatType: 'mirror',
              duration: 0.2,
              delay: 0.5,
              ease: 'easeInOut',
              type: 'tween',
            }
          : {}
      }
    >
      👋🏻
    </motion.div>
  );
};

let year = 0;

const IndexPage = (props: Props) => {
  const { posts } = props;

  return (
    <Layout footer header headerProps={{ offsetHeight: 256 }}>
      <Grid gapX={4} gapY={12} templateColumns={templateColumnsMedium}>
        <Grid.Item col={2}>
          <Flex alignItems="start" direction="column" gap="5">
            <H1>
              Hi <WavingHand /> I&apos;m Mustafa, and this is my blog.{' '}
              <Text
                css={{
                  lineHeight: 'unset',
                  letterSpacing: '-0.5px',
                }}
                variant="secondary"
                size="7"
                weight="4"
              >
                Here, I share through my writing my experience as a frontend
                engineer and everything I&apos;m learning about on Vue.js,
                TypeScript, TailwindCSS, and more. I also share insights on my
                personal projects, music journey, and thoughts on personal
                knowledge management.
              </Text>
            </H1>
            <Flex
              gap={4}
              css={{
                marginLeft: '-var(--space-3)',
                marginRight: '-var(--space-3)',
              }}
            >
              <a
                href="https://twitter.com/mustafasaracAI"
                style={{ textDecoration: 'none' }}
                tabIndex={-1}
              >
                <Button variant="secondary" endIcon={<Icon.Twitter size="4" />}>
                  @mustafasaracAI
                </Button>
                <VisuallyHidden as="p">
                  Link redirects to my Twitter profile page
                  https://twitter.com/mustafasaracAI.
                </VisuallyHidden>
              </a>
            </Flex>
          </Flex>
        </Grid.Item>
        <Grid.Item col={2} as="section">
          <Flex alignItems="start" direction="column" gap="5">
            <H2></H2>
            <Grid
              as="ul"
              css={{
                margin: 0,
                padding: 0,
              }}
              data-testid="article-list"
              gapY={1}
            >
              {posts.map((post) => {
                const currentYear = new Date(post.date).getFullYear();
                let printYear;

                if (currentYear !== year) {
                  printYear = true;
                  year = currentYear;
                } else {
                  printYear = false;
                }

                return (
                  <Box
                    as="li"
                    css={{
                      listStyle: 'none',
                      cursor: 'pointer',
                      lineHeight: '1.8',
                      letterSpacing: '0.3px',
                    }}
                    key={post.slug}
                    data-testid="article-item"
                  >
                    {printYear ? (
                      <Text
                        as="p"
                        weight="4"
                        css={{
                          padding: 'var(--space-6) 0px',
                        }}
                      >
                        {currentYear}
                      </Text>
                    ) : null}
                    <Link
                      href={`/posts/${post.slug}/`}
                      passHref
                      style={{ textDecoration: 'none', fontWeight: 500 }}
                    >
                      <Block data-testid="article-link">
                        <Text
                          as="p"
                          size="1"
                          variant="tertiary"
                          weight="3"
                          css={{
                            minWidth: '52px',
                            marginRight: '32px',
                            marginTop: '2px',
                          }}
                        >
                          {format(new Date(Date.parse(post.date)), 'MMM dd')}
                        </Text>
                        <Text weight="3">{post.title}</Text>
                      </Block>
                    </Link>
                  </Box>
                );
              })}
            </Grid>
          </Flex>
        </Grid.Item>
      </Grid>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();

  return { props: { posts } };
}

const Block = styled(Box, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'start',
  width: '100%',
  borderRadius: 'var(--border-radius-2)',
  marginLeft: '-8px',
  padding: '16px 8px',
  boxShadow: 'none',
  backgroundColor: 'var(--article-block-background-color, "transparent")',
  color: 'var(--article-block-color, var(--text-primary))',
  transition: 'background-color 0.25s, box-shadow 0.25s, color 0.25s',

  '&:focus': {
    '--article-block-background-color': 'var(--emphasis)',
    '--article-block-color': 'var(--accent)',
  },

  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      '--article-block-background-color': 'var(--emphasis)',
      '--article-block-color': 'var(--accent)',
    },
  },
});

export default IndexPage;
