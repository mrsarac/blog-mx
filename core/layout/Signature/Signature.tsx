import { styled, Box, Flex } from '@maximeheckel/design-system';


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
