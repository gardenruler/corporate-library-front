import { ReactNode } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const Section = styled.section`
  display: flex;
  min-height: 100%;
  overflow: hidden;
`;

const Main = styled.main`
  @media (min-width: 1200px) {
    padding-top: 116px;
    padding-left: 16px;
    padding-right: 16px;
  }
  min-height: 100%;
  padding-top: 88px;
  padding-bottom: 80px;
  flex-grow: 1;
`;

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>corporate-library</title>
        <meta name="description" content="corporate-library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Header />
        <Sidebar />
        <Main>{children}</Main>
      </Section>
    </>
  );
}

export default Layout;
