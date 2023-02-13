---
nav:
  title: 文档
  order: 1
title: stringToData
group: 颜色转换
---

# rgba 转 16 进制

<code src="./RgbaOrHex/RgbaToHex.tsx">rgba 转 16 进制</code>

```js
import { rgbaToHex } from '@dxsixpc/utils';

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
```

# 16 进制转 rgba

```js
import { hexToRgba } from '@dxsixpc/utils';

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
```
