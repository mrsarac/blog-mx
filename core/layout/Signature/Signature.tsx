import { styled, Anchor, Text, Box, Flex } from '@maximeheckel/design-system';


// const NewsletterForm = dynamic(() => import('@core/components/NewsletterForm'));

const StyledSection = styled('section', {
  background: 'var(--foreground)',
  color: 'var(--text-primary)',
  paddingBottom: 48,
  paddingTop: 48,
  width: '100%',

  '@media (max-width: 700px)': {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
});



const Signature = ({ title, url }: { title: string; url: string }) => {
  const text = `${title} by @MaximeHeckel ${url}`;

  return (
    <StyledSection data-testid="signature">
      <Flex
        alignItems="start"
        direction="column"
        css={{
          maxWidth: 700,
          margin: '0 auto',
        }}
        gap="5"
      >
        <Text as="p">
          Liked this article? {/* @ts-ignore */}
          <Anchor
            favicon
            href={`https://twitter.com/intent/tweet?text=${encodeURI(text)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share it with a friend on Twitter
          </Anchor>{' '}
          or{' '}
          <Anchor
            href="https://www.buymeacoffee.com/maximeheckel"
            target="_blank"
            rel="noopener noreferrer"
          >
            support me
          </Anchor>{' '}
          to take on more ambitious projects to write about. Have a question,
          feedback or simply wish to contact me privately?{' '}
          <Anchor
            href="http://twitter.com/MaximeHeckel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shoot me a DM
          </Anchor>{' '}
          and I&apos;ll do my best to get back to you.
        </Text>

        <Box>
          {/* <Text as="p" variant="primary">
            Have a wonderful day.
          </Text> */}
          <Flex alignItems="start">
            {/* <Text as="p" variant="primary">
              – Maxime
            </Text> */}
          </Flex>
        </Box>
        {/* <SignatureSVG /> */}
      </Flex>
      {/* <NewsletterForm /> */}
    </StyledSection>
  );
};

export { Signature };
