import { validate, ValidateTypeList, type ValidateType } from '@dxsixpc/utils';
import { Input, Select, Space } from 'antd';
import { useState, type FC } from 'react';

const ValidateData: FC = () => {
  const [input, setInput] = useState<string>('dxsixpc@email.com');
  const [type, setType] = useState<ValidateType>('email');
  const [result, setResult] = useState<boolean>(true);

  const onChange = (e: any) => {
    setInput(e?.target?.value);
    setResult(validate(e?.target?.value, type));
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
            {Object.keys(ValidateTypeList).map((item) => (
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
