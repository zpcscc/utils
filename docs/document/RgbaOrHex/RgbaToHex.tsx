import { rgbaToHex } from '@dxsixpc/utils';

import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import { Color } from './Style';

const RgbaToHex: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [input, setInput] = useState<string>('rgba(102,204,255,1)');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(rgbaToHex(input));
  };

  return (
    <Space>
      <Input.Group compact>
        <Input
          style={{ width: '240px' }}
          addonBefore='rgba'
          defaultValue={input}
          onChange={onChange}
          suffix={<Color bg={input} />}
        />
      </Input.Group>
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Input
        style={{ width: '240px' }}
        addonBefore='16进制'
        value={result}
        suffix={<Color bg={result} />}
      />
    </Space>
  );
};

export default RgbaToHex;
