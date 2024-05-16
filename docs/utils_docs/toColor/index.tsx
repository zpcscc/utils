import { toColor, type ColorType } from '@zpcscc/utils';
import { Button, Input, Select, Space, Tooltip, message } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState, type ChangeEvent, type FC } from 'react';

const ToColor: FC = () => {
  const btn = 'copy-color-btn';
  const [input, setInput] = useState<string>('');
  const [type, setType] = useState<ColorType>('rgb');
  const [result, setResult] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value || '';
    setInput(value);
    setResult(toColor(value, type));
  };

  const onTypeChange = (typeValue: ColorType) => {
    setType(typeValue);
    setResult(toColor(input, typeValue));
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(`.${btn}`);
    clipboard.on('success', () => message.success('复制成功'));
    clipboard.on('error', () => message.error('复制失败'));
    return () => clipboard.destroy();
  }, [btn]);

  return (
    <Space wrap>
      <Input
        style={{ width: '300px' }}
        value={input}
        placeholder='请输入需要转换的颜色'
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
      <Input
        style={{ width: '300px' }}
        value={String(result)}
        addonBefore={
          <Select defaultValue={type} onChange={onTypeChange} style={{ width: '100px' }}>
            {['rgb', 'hex', 'hsl'].map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        }
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

export default ToColor;
