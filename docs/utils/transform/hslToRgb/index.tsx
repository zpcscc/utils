import { hslToRgb } from '@dxsixpc/utils';
import { Button, Input, message, Space, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState, type FC } from 'react';

const HslToRgb: FC = () => {
  const btn = 'copy-rgb-btn';
  const [input, setInput] = useState<string>('hsl(200,100%,70%)');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbValue: any) => {
    setInput(rgbValue.target.value);
  };

  const onClick = () => {
    setResult(hslToRgb(input));
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(`.${btn}`);
    clipboard.on('success', () => message.success('复制成功'));
    clipboard.on('error', () => message.error('复制失败'));
    return () => clipboard.destroy();
  }, [btn]);

  return (
    <Space wrap>
      <Space.Compact>
        <Input
          style={{ width: '300px' }}
          addonBefore={'hsl'}
          defaultValue={input}
          onChange={onChange}
          suffix={
            <Tooltip title='点击复制'>
              <Button
                className={btn}
                data-clipboard-text={input}
                style={{ backgroundColor: input, width: '24px', height: '24px', padding: 0 }}
              />
            </Tooltip>
          }
        />
      </Space.Compact>
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
        addonBefore={'rgb'}
        value={result}
        suffix={
          <Tooltip title='点击复制'>
            <Button
              className={btn}
              data-clipboard-text={result}
              style={{ backgroundColor: result, width: '24px', height: '24px', padding: 0 }}
            />
          </Tooltip>
        }
      />
    </Space>
  );
};

export default HslToRgb;
