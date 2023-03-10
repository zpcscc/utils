import { SimpleCodeEditor, Space, Text, TextArea } from '@dxsixpc/components';
import type { StyledType } from '@dxsixpc/utils';
import { dataToString, stringToData, styledToString } from '@dxsixpc/utils';
import { useState } from 'react';

const styled: StyledType = {
  width: '100px',
  label: {
    color: 'red',
  },
  '.className': {
    height: '100px',
    display: 'none',
    '& > div': {
      'background-color': 'red',
    },
  },
  '.className::after': {
    content: ':',
  },
};

const StyledToString: React.FC = () => {
  const [value, setValue] = useState<string>(dataToString(styled, null, 2));
  const [result, setResult] = useState<string>('');

  const onChange = (value: string) => {
    setValue(value);
    setResult(styledToString(stringToData(value)));
  };

  const simpleCodeEditorStyled = `
    & > div {
      width: 400px;
      height: 300px;
    }
  `;

  return (
    <Space align='end'>
      <SimpleCodeEditor
        value={value}
        language='javascript'
        onChange={onChange}
        styled={simpleCodeEditorStyled}
      />
      <Space direction='vertical'>
        <Text>onChange返回的结果</Text>
        <TextArea value={dataToString(result)} style={{ width: '400px', height: '300px' }} />
      </Space>
    </Space>
  );
};

export default StyledToString;
