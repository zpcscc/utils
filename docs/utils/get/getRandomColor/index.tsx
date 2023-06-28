import { getRandomColor } from '@dxsixpc/utils';
import type { RadioChangeEvent } from 'antd';
import { Button, Input, message, Radio, Space, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState } from 'react';

const RandomColor: React.FC = () => {
  const btn = 'copy-color-btn';
  const [type, setType] = useState<'hex' | 'rgb'>('hex');
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

export default RandomColor;