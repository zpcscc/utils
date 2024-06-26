import { CopyOutlined } from '@ant-design/icons';
import { toAbsolutePath } from '@zpcscc/utils';
import { Button, Input, message, Space, Tooltip } from 'antd';
import ClipboardJS from 'clipboard';
import { useEffect, useState, type ChangeEvent, type FC } from 'react';

const clipboard = new ClipboardJS('.copy-btn');

const ToAbsolutePath: FC = () => {
  const [input, setInput] = useState<string>('/utils/utils_docs/get-random-color');
  const [result, setResult] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    setResult(toAbsolutePath(input));
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

export default ToAbsolutePath;
