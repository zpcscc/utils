---
group:
  title: 数据转换
title: dataToString
order: 2
---

# 数据与字符串转换

## 在线演示

<code src="./transform/dataToString">数据与字符串转换</code>

## 使用

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

## API

```typescript
// 数据转字符串
dataToString(data:any, replacer?:any, space?:number);
```

### 参数

| 参数     | 说明                                                                              | 类型 |
| -------- | --------------------------------------------------------------------------------- | ---- |
| data     | 需要转为字符串的数据                                                              | any  |
| replacer | JSON.stringify 的第二个参数，仅在部分可格式化的数据在转化时生效                   | any  |
| space    | JSON.stringify 的第三个参数，格式化时的空格。仅在部分可格式化的数据在转化时生效。 | any  |

### 返回

(string):返回被转为字符串的数据。
