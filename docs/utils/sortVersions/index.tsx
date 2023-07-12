import { sortVersions } from '@dxsixpc/utils';
import { Button, Input, Space } from 'antd';
import { useState, type FC } from 'react';

const VersionSort: FC = () => {
  const [input, setInput] = useState<string>(
    [
      '1.2.1',
      '1.1.1',
      '1.1.1-release.2',
      '1.1.1-alpha.10',
      '1.1.1-release.1',
      '1.1.1-beta.1',
      '1.1.1-experimental.1',
      '1.1.1-rc.1',
      '1.1.1-rc.1',
      '1.1.2-alpha.1',
    ].join('\n'),
  );
  const [result, setResult] = useState<string[]>([]);

  const onChange = (e: any) => {
    setInput(e?.target?.value);
  };

  const onClick = () => {
    setResult(sortVersions(input.split('\n')));
  };

  return (
    <Space wrap>
      <Input.TextArea
        style={{ width: '300px', height: '300px' }}
        value={input}
        onChange={onChange}
      />
      <Button type='primary' onClick={onClick}>
        排序
      </Button>
      <Input.TextArea style={{ width: '300px', height: '300px' }} value={result.join('\n')} />
    </Space>
  );
};

export default VersionSort;
