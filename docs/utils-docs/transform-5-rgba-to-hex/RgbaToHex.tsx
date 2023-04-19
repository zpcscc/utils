import { rgbaToHex } from '@dxsixpc/utils';
import { Button, Input, Space, Tooltip, message } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState } from 'react';

const RgbaToHex: React.FC = () => {
  const btn = 'copy-hex-btn';
  const [input, setInput] = useState<string>('rgba(102,204,255,1)');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(rgbaToHex(input));
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
          addonBefore={'rgba'}
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
        addonBefore={'hex'}
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

export default RgbaToHex;
