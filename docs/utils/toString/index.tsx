import { SimpleCodeEditor, Space, Text, TextArea } from '@dxsixpc/components';
import { toData, toString } from '@dxsixpc/utils';
import { useState, type FC } from 'react';

const data = {
  width: '100px',
};

const DataOrString: FC = () => {
  const [value, setValue] = useState(data);

  const onChange = (value?: string) => {
    setValue(toData(value));
  };

  return (
    <Space align='end' wrap>
      <SimpleCodeEditor
        value={toString(value, null, 2)}
        language='javascript'
        onChange={onChange}
        styled={{ width: '400px', height: '300px' }}
      />
      <Space direction='vertical'>
        <Text>onChange返回的结果</Text>
        <TextArea
          value={toString(value, null, 0)}
          onChange={onChange}
          style={{ width: '400px', height: '300px' }}
        />
      </Space>
    </Space>
  );
};

export default DataOrString;
