import { CopyOutlined } from '@ant-design/icons';
import { relativeToAbsolute } from '@dxsixpc/utils';
import { Button, Input, message, Space, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState } from 'react';

const clipboard = new ClipboardJS('.copy-btn');

const RelativeToAbsolute: React.FC = () => {
  const [input, setInput] = useState<string>('/utils/logo.png');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(relativeToAbsolute(input));
  };

  useEffect(() => {
    clipboard.on('success', () => message.success('复制成功'));
  }, []);

  return (
    <Space>
      <Input.Group compact>
        <Input
          style={{ width: '240px' }}
          addonBefore='相对路径'
          defaultValue={input}
          onChange={onChange}
        />
      </Input.Group>
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Input.Group compact>
        <Input style={{ width: '350px' }} addonBefore='绝对路径' value={result} />
        <Tooltip title='复制'>
          <Button icon={<CopyOutlined />} className='copy-btn' data-clipboard-text={result} />
        </Tooltip>
        <Button type='primary'>
          <a href={result} target='_blank' rel='noreferrer'>
            跳转
          </a>
        </Button>
      </Input.Group>
    </Space>
  );
};

export default RelativeToAbsolute;