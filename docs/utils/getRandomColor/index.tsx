import { getRandomColor, type ColorType } from '@zpcscc/utils';
import { Button, Input, Radio, Space, Tooltip, message, type RadioChangeEvent } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState, type FC } from 'react';

const GetRandomColor: FC = () => {
  const btn = 'copy-color-btn';
  const [type, setType] = useState<ColorType>('hex');
  const [result, setResult] = useState<string>('');

  const onChange = (radioValue: RadioChangeEvent) => {
    setType(radioValue?.target?.value);
    setResult(getRandomColor(radioValue?.target?.value));
  };

  const onClick = () => {
    setResult(getRandomColor(type));
  };

  useEffect(() => {
    const clipboard = new ClipboardJS(`.${btn}`);
    clipboard.on('success', () => message.success('复制成功'));
    clipboard.on('error', () => message.error('复制失败'));
    return () => clipboard.destroy();
  }, [btn]);

  return (
    <Space wrap>
      <Radio.Group onChange={onChange} value={type}>
        <Radio value={'hex'}>hex</Radio>
        <Radio value={'rgb'}>rgb</Radio>
        <Radio value={'hsl'}>hsl</Radio>
      </Radio.Group>
      <Button type='primary' onClick={onClick}>
        生成随机颜色
      </Button>
      <Input
        style={{ width: '300px' }}
        addonBefore={type}
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

export default GetRandomColor;
