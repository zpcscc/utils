---
title: stringToData
order: 2
group:
  title: 数据转换
---

# 字符串转数据

```js
import { stringToData } from '@dxsixpc/utils';

const Demo = () => {
  // 支持伪数组，伪对象等字符串，转为真正的数组，对象；
  const string = '[1,2,3]';
  const data = stringToData(string);
  return (
    <div>
      <p>{string}</p>
      <p>{data}</p>
    </div>
  );
};

export default Demo;
```
