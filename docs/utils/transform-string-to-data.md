---
group:
  title: 数据转换
title: stringToData
order: 3
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

## API

```typescript
// 字符串转数据
stringToData(data:string, reviver?:any);
```

### 参数

| 参数    | 说明                                                        | 类型   |
| ------- | ----------------------------------------------------------- | ------ |
| data    | 需要转为数据的字符串                                        | string |
| reviver | JSON.parse 的第二个参数，仅在部分可格式化的数据在转化时生效 | any    |

### 返回

(array | object | JSON):返回将伪数据转换后的真实数据。
