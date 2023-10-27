---
group:
  title: to函数
title: toData
---

# 字符串转数据

```js
import { toData } from '@dxsixpc/utils';

console.log(toData('1')); // 1
console.log(toData('true')); // true
console.log(toData('{}')); // {}
console.log(toData('[]')); // []
console.log(toData('null')); // null
console.log(toData('undefined')); // undefined
```

## API

```typescript
toData(data:string, reviver?:any);
```

### 参数

| 参数    | 说明                                                        | 类型   |
| ------- | ----------------------------------------------------------- | ------ |
| data    | 需要转为数据的字符串                                        | string |
| reviver | JSON.parse 的第二个参数，仅在部分可格式化的数据在转化时生效 | any    |

### 返回

(any):返回对应格式的数据
