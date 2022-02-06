import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Logo from './Logo';

const SidebarBlock = styled.nav`
  @media (min-width: 1200px) {
    display: block;
    width: 280px;
    display: flex;
  }
  display: none;
  width: 280px;
  color: ${({ theme }) => theme.color.blueGray500};
  flex-direction: column;
  height: 100vh;
  z-index: 1200;
  border-right: 1px solid ${({ theme }) => theme.color.blueGray100};
  background-color: ${({ theme }) => theme.color.white};
`;

const Menus = styled.ul`
  margin: 30px 0;
  list-style: none;
  margin: 0px;
  padding: 0px;
  position: relative;
`;

const Menu = styled.li<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  text-align: left;
  padding: 8px 20px 8px 40px;
  line-height: 1.4;
  font-size: 0.875rem;
  height: 48px;
  position: relative;
  color: ${({ theme }) => theme.color.blueGray300};
  ${({ selected, theme }) =>
    selected &&
    css`
      color: ${theme.color.green500};
      border-right: 2px solid ${theme.color.green500};
      font-weight: 600;
      background-color: ${theme.color.green50};
    `}
`;

const LogoBlock = styled.div`
  padding: 20px 20px 40px 20px;
`;

function Sidebar() {
  const router = useRouter();
  const navs = ['dashboard', 'users', 'books', 'login', 'register'];

  return (
    <SidebarBlock>
      <LogoBlock>
        <Logo />
      </LogoBlock>
      <Menus>
        {navs.map((nav) => (
          <a key={nav} href={`/${nav}`}>
            <Menu selected={`/${nav}` === router.pathname}>
              <div>{nav}</div>
            </Menu>
          </a>
        ))}
      </Menus>
    </SidebarBlock>
  );
}

export default Sidebar;
