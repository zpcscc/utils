---
nav:
  title: 文档
  order: 1
title: dataToString
group: 数据转换
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
