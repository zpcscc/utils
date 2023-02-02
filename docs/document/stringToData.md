---
nav:
  title: 文档
  order: 1
title: stringToData
group: 数据转化
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
