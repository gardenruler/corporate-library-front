import styled from '@emotion/styled';

const LogoLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.color.green500};
  font-weight: 800;
  font-size: 1.6rem;
`;

function Logo() {
  return <LogoLink href="/dashboard">Okbut</LogoLink>;
}

export default Logo;
