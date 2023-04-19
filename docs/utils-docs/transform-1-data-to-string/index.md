---
title: dataToString
order: 1
group:
  title: 数据转换
---

# 数据与字符串转换

<code src="./DataOrString.tsx">数据与字符串转换</code>

# 数据转字符串

```js
import { dataToString } from '@dxsixpc/utils';

const Demo = () => {
  // 支持数组，对象等数据，转为字符串；
  const data = [1, 2, 3];
  const string = dataToString(data);
  return (
    <div>
      <p>{String(data)}</p>
      <p>{string}</p>
    </div>
  );
};

export default Demo;
```