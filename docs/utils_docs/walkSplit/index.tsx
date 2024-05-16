import { walkSplit } from '@zpcscc/utils';
import { Button, Input, Space } from 'antd';
import { useState, type ChangeEvent, type FC } from 'react';

const WalkSplit: FC = () => {
  const [input, setInput] = useState<string>('1.2.3-alpha.5');
  const [split, setSplit] = useState<string>('.,-');
  const [result, setResult] = useState<string>('');
  const [iterator, setIterator] = useState<Generator<string, any, string>>();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onSplitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSplit(e.target.value);
  };

  const onInitGenerator = () => {
    setIterator(walkSplit(input, split.split(',')));
  };

  const onClick = () => {
    setResult(iterator?.next().value as string);
  };

  return (
    <Space wrap direction='vertical'>
      <Space>
        <Input
          style={{ width: '300px' }}
          addonBefore='需要拆分的字符串'
          defaultValue={input}
          onChange={onInputChange}
        />
        <Input
          style={{ width: '300px' }}
          addonBefore='终止符，用英文逗号分隔终止符'
          defaultValue={split}
          onChange={onSplitChange}
        />
      </Space>
      <Space>
        <Button type='primary' onClick={onInitGenerator}>
          生成迭代器
        </Button>
        <Button type='primary' onClick={onClick}>
          下一步
        </Button>
      </Space>
      <Input style={{ width: '300px' }} value={result} />
    </Space>
  );
};

export default WalkSplit;
