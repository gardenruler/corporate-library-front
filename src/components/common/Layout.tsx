import { ReactNode } from 'react';
import styled from '@emotion/styled';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const Section = styled.section`
  background: #333;
  color: #fff;
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
    <Section>
      <Sidebar />
      <Main>{children}</Main>
    </Section>
  );
}

export default Layout;
