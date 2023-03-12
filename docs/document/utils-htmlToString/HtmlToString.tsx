import { htmlToString } from '@dxsixpc/utils';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

const HtmlToString: React.FC = () => {
  const [input, setInput] = useState<string>('<div>&lt;内容&gt;</div>');
  const [result, setResult] = useState<string>('');

  const onChange = (rgbaValue: any) => {
    setInput(rgbaValue.target.value);
  };

  const onClick = () => {
    setResult(htmlToString(input));
  };

  return (
    <Space>
      <Input.Group compact>
        <Input
          style={{ width: '300px' }}
          addonBefore='html'
          defaultValue={input}
          onChange={onChange}
        />
      </Input.Group>
      <Button type='primary' onClick={onClick}>
        转换
      </Button>
      <Input.Group compact>
        <Input style={{ width: '300px' }} addonBefore='string' value={result} />
      </Input.Group>
    </Space>
  );
};

export default HtmlToString;
