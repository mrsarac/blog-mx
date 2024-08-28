import React from 'react';
import { Anchor, Box, Flex, Text, H1 } from '@maximeheckel/design-system';
import Layout from '@core/layout';

const CVPage = () => {
  return (
    <Layout footer header>
      <Box css={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <H1>Curriculum Vitae</H1>
        <Text as="p" css={{ marginBottom: '1rem' }}>
          Welcome to my CV page. Here you can find information about my
          professional background and experience.
        </Text>
        <Text as="p" css={{ marginBottom: '2rem' }}>
          For a detailed version of my CV, please download the PDF version
          below.
        </Text>
        <Flex justifyContent="center">
          <Anchor href="/MustafaSaracCV.pdf" download>
            Download CV (PDF)
          </Anchor>
        </Flex>
      </Box>
    </Layout>
  );
};

export default CVPage;
