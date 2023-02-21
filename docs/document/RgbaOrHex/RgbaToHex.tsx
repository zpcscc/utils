import { rgbaToHex } from '@dxsixpc/utils';
import type React from 'react';
import { useState } from 'react';

const RgbaToHex: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [input, setInput] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(rgbaToHex(input));
  };

  return (
    <>
      <input type='text' defaultValue={input} onChange={onChange} />
      <button onClick={onClick}>转换</button>
      <span>{result}</span>
    </>
  );
};

export default RgbaToHex;
