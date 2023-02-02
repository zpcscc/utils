---
nav:
  title: 文档
  order: 1
title: dataToString
group: 数据转化
---

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
