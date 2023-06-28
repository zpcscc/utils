import { SimpleCodeEditor, Space, Text, TextArea } from '@dxsixpc/components';
import { dataToString, stringToData } from '@dxsixpc/utils';
import { useState } from 'react';

const data = {
  width: '100px',
};

const DataOrString: React.FC = () => {
  const [value, setValue] = useState(data);

  const onChange = (value?: string) => {
    setValue(stringToData(value));
  };

  return (
    <Space align='end' wrap>
      <SimpleCodeEditor
        value={dataToString(value, null, 2)}
        language='javascript'
        onChange={onChange}
        styled={{ width: '400px', height: '300px' }}
      />
      <Space direction='vertical'>
        <Text>onChange返回的结果</Text>
        <TextArea
          value={dataToString(value, null, 0)}
          onChange={onChange}
          style={{ width: '400px', height: '300px' }}
        />
      </Space>
    </Space>
  );
};

export default DataOrString;
