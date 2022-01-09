import styled from '@emotion/styled';
import Image from 'next/image';

const HeaderBlock = styled.header`
  @media (min-width: 1200px) {
    width: calc(100% - 281px);
    padding: 0px 40px;
  }
  height: 64px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-image: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
  box-shadow: none;
  backdrop-filter: blur(6px);
  background-color: rgba(236, 236, 236, 0.72);
  color: ${({ theme }) => theme.color.blueGray300};
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const RightButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AlertButton = styled.button`
  padding: 0 20px;
  color: ${({ theme }) => theme.color.blueGray300};
`;

const AvatarButton = styled.button`
  padding: 0 10px;
  color: ${({ theme }) => theme.color.blueGray300};
  img {
    border-radius: 20px;
  }
`;

function Header() {
  return (
    <HeaderBlock>
      <HeaderFlex>
        <div>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="20"
              height="20"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6z"
              />
            </svg>
            <span />
          </button>
        </div>
        <div />
        <RightButtonWrapper>
          <AlertButton>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="20"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.52 15.21l-1.8-1.81V8.94a6.86 6.86 0 0 0-5.82-6.88a6.74 6.74 0 0 0-7.62 6.67v4.67l-1.8 1.81A1.64 1.64 0 0 0 4.64 18H8v.34A3.84 3.84 0 0 0 12 22a3.84 3.84 0 0 0 4-3.66V18h3.36a1.64 1.64 0 0 0 1.16-2.79zM14 18.34A1.88 1.88 0 0 1 12 20a1.88 1.88 0 0 1-2-1.66V18h4z"
                />
              </svg>
              <span>2</span>
            </span>
            <span />
          </AlertButton>
          <AvatarButton>
            <div>
              <Image
                alt="기본 아바타"
                src="/avatar_default.jpeg"
                width={40}
                height={40}
              />
            </div>
            <span />
          </AvatarButton>
        </RightButtonWrapper>
      </HeaderFlex>
    </HeaderBlock>
  );
}

export default Header;
