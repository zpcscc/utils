import { hexToRgba, rgbaToHex } from '@dxsixpc/utils';
import { Button, Input, message, Space } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState } from 'react';
import Color from './Color';

const obj = {
  rgba: { resultType: 'hex', fun: rgbaToHex },
  hex: { resultType: 'rgba', fun: hexToRgba },
};

interface RgbaHexProps {
  initial: string;
  inputType: 'rgba' | 'hex';
}

const RgbaHex: React.FC<RgbaHexProps> = (props) => {
  const { initial, inputType } = props;
  const { resultType, fun } = obj[inputType];
  const btn = `copy-${resultType}-btn`;
  const [input, setInput] = useState<string>(initial);
  const [result, setResult] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(fun(input));
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(`.${btn}`);
    clipboard.on('success', () => message.success('复制成功'));
    clipboard.on('error', () => message.error('复制失败'));
    return () => clipboard.destroy();
  }, [btn]);

  return (
    <Space>
      <Input.Group compact>
        <Input
          style={{ width: '300px' }}
          addonBefore={inputType}
          defaultValue={input}
          onChange={onChange}
          suffix={<Color color={input} btn={btn} />}
        />
      </Input.Group>
      <Button
        type='primary'
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onClick();
          }
        }}
      >
        转换
      </Button>
      <Input
        style={{ width: '300px' }}
        addonBefore={resultType}
        value={result}
        suffix={<Color color={result} btn={btn} />}
      />
    </Space>
  );
};

export default RgbaHex;
