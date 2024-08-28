import {
  styled,
  Anchor,
  Grid,
  Text,
  EM,
  Flex,
} from '@maximeheckel/design-system';
import Logo from '@core/components/Logo';
import Link from 'next/link';
import React from 'react';
import { templateColumnsMedium } from 'styles/grid';

const FooterBlock = styled('footer', {
  background: 'var(--background)',
  transition: '0.5s',
  width: '100%',
  borderTop: '1px solid var(--border-color)',
});

const FooterContent = styled(Flex, {
  height: 'var(--space-8)',
  width: '100%',
});

const Footer = () => (
  <FooterBlock data-testid="footer" css={{
    marginTop: '100px'
  }}>
    <Grid gapX={4} templateColumns={templateColumnsMedium}>
      <Flex
        as={Grid.Item}
        col={2}
        css={{
          padding: 'var(--space-5) 0px',
        }}
        direction="column"
        justifyContent="space-evenly"
        gap={6}
      >
        <Grid css={{ width: '100%' }} templateColumns="repeat(1, 1fr)">
          <Grid.Item>
            <Text size={1}>
              <Flex justifyContent="space-between">
                <Link href="/" legacyBehavior passHref>
                  <Anchor discreet>Home</Anchor>
                </Link>
                <Anchor
                  discreet
                  href="https://twitter.com/mustafasaracAI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Anchor>

                <Anchor
                  discreet
                  href="https://linkedin.com/in/mrsarac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Anchor>
              </Flex>
            </Text>
          </Grid.Item>
        </Grid>
        <FooterContent 

         justifyContent="end">
          <Text
            as="p"
            css={{ margin: 0 }}
            size="1"
            variant="primary"
            weight="3"
          >
            © {new Date().getFullYear()} Mustafa Saraç ——{' '}
            <EM size="1">Cologne</EM>
          </Text>
          <Logo alt="Mustafa Saraç's logo" size={30} />
        </FooterContent>
      </Flex>
    </Grid>
  </FooterBlock>
);

export default Footer;