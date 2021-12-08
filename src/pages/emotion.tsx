import styled from '@emotion/styled';
import { css } from '@emotion/css';

const Button = styled.button<{ primary?: boolean }>`
  padding: 32px;
  background-color: ${(props) => (props.primary ? 'hotpink' : 'pink')};
  font-size: 24px;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.blueGray200};
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export type BasicProps = {
  className?: string;
};

const Basic = ({ className }: BasicProps) => (
  <div className={className}>Some text</div>
);

const Fancy = styled(Basic)`
  color: hotpink;
`;

const Section = styled.section`
  background: #333;
  color: #fff;
`;
const Aside = Section.withComponent('aside');

function Emotion() {
  return (
    <div>
      <Button>This my button component.</Button>
      <Button primary>primary button</Button>
      <Basic />
      <Fancy />
      <Section>스타일은 같지만 태그를 다르게 할 때</Section>
      <Aside>스타일은 같지만 aside 태그</Aside>
      <div className={css({ background: 'black', color: 'white' })}>black</div>
    </div>
  );
}

export default Emotion;
