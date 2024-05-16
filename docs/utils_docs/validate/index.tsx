import { validate, validateTypeList, type ValidateType } from '@zpcscc/utils';
import { Input, Select, Space } from 'antd';
import { useState, type ChangeEvent, type FC } from 'react';

const ValidateData: FC = () => {
  const [input, setInput] = useState<string>('zpcscc@email.com');
  const [type, setType] = useState<ValidateType>('email');
  const [result, setResult] = useState<boolean>(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value;
    setInput(value);
    setResult(validate(value, type));
  };

  const onTypeChange = (typeValue: ValidateType) => {
    setType(typeValue);
    setResult(validate(input, typeValue));
  };

  return (
    <Space wrap>
      <Input
        style={{ width: '300px' }}
        value={input}
        placeholder='请输入需要校验的数据'
        onChange={onChange}
        addonAfter={
          <Select defaultValue={type} onChange={onTypeChange} style={{ width: '100px' }}>
            {Object.keys(validateTypeList).map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        }
      />
      <Input style={{ width: '100px' }} value={String(result)} />
    </Space>
  );
};

export default ValidateData;
