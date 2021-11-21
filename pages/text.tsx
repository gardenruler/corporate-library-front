import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../recoil/atoms';
import { charCountState } from '../recoil/selectors';

function Text() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Recoil Test page입니다.</h1>
      <input type="text" value={text} onChange={onChange} />
      <p>
        입력 텍스트: {text} <br />
        입력 텍스트 길이: {count}
      </p>
    </div>
  );
}

export default Text;
