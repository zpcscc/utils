import { hexToRgba } from '@dxsixpc/utils';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import { Color } from './Style';

const HexToRgba: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [input, setInput] = useState<string>('#66ccff');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(hexToRgba(input));
  };

  return (
    <Space>
      <Input.Group compact>
        <Input
          style={{ width: '240px' }}
          addonBefore='16进制'
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
        addonBefore='rgba'
        value={result}
        suffix={<Color bg={result} />}
      />
    </Space>
  );
};

export default HexToRgba;