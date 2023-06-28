import { CopyOutlined } from '@ant-design/icons';
import { relativeToAbsolute } from '@dxsixpc/utils';
import { Button, Input, message, Space, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState } from 'react';

const clipboard = new ClipboardJS('.copy-btn');

const RelativeToAbsolute: React.FC = () => {
  const [input, setInput] = useState<string>('/utils/helpers-docs/request');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbValue: any) => {
    setInput(rgbValue.target.value);
  };

  const onClick = () => {
    setResult(relativeToAbsolute(input));
  };

  useEffect(() => {
    clipboard.on('success', () => message.success('复制成功'));
  }, []);

  return (
    <Space wrap>
      <Input
        style={{ width: '240px' }}
        addonBefore='相对路径'
        defaultValue={input}
        onChange={onChange}
      />
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Space>
        <Input style={{ width: '350px' }} addonBefore='绝对路径' value={result} />
        <Tooltip title='复制'>
          <Button icon={<CopyOutlined />} className='copy-btn' data-clipboard-text={result} />
        </Tooltip>
        <Button type='primary' href={result} target='_blank'>
          跳转
        </Button>
      </Space>
    </Space>
  );
};

export default RelativeToAbsolute;
