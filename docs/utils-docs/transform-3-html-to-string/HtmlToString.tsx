import { htmlToString } from '@dxsixpc/utils';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

const HtmlToString: React.FC = () => {
  const [input, setInput] = useState<string>('&lt;内容&gt;');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(htmlToString(input));
  };

  return (
    <Space wrap>
      <Space.Compact>
        <Input
          style={{ width: '300px' }}
          addonBefore='html'
          defaultValue={input}
          onChange={onChange}
        />
      </Space.Compact>
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Space.Compact>
        <Input style={{ width: '300px' }} addonBefore='string' value={result} />
      </Space.Compact>
    </Space>
  );
};

export default HtmlToString;
