import { getDayOfDate } from '@zpcscc/utils';
import { Input, Space } from 'antd';
import { useState, type FC } from 'react';

const GetDayOfDate: FC = () => {
  const [result, setResult] = useState<number>(0);
  const [type, setType] = useState<'距今' | '倒计时'>('距今');

  return (
    <Space wrap>
      <Input
        style={{ width: '300px' }}
        placeholder='请输入日期(例：2023/1/1)'
        onChange={(e) => {
          let date = e.target.value;
          // 若值为字符串，则将日期字符串，转为日期格式的数据
          if (typeof date === 'string') {
            // @ts-expect-error 日期计算
            date = new Date(date);
          }
          // @ts-expect-error 日期计算
          if (date - Date.now() > 0) {
            setType('倒计时');
          } else {
            setType('距今');
          }
          setResult(getDayOfDate(date));
        }}
      />
      <Input
        style={{ width: '200px' }}
        value={result}
        disabled
        addonBefore={type}
        addonAfter='天'
      />
    </Space>
  );
};

export default GetDayOfDate;
