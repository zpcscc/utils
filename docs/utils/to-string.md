---
group:
  title: to函数
title: toString
---

# 任意数据转为字符串

## 在线演示

<code src="./toString"></code>

## 使用

```js
import { toString } from '@dxsixpc/utils';

console.log(toString(true)); // 'true'
console.log(toString(null)); // 'null'
console.log(toString(undefined)); // 'undefined'
console.log(toString([])); // '[]'
console.log(toString({})); // '{}'
console.log(toString(Symbol(1))); // 'Symbol(1)'
console.log(toString(123)); // '123'
```

## API

```typescript
toString(data:any, replacer?:any, space?:number);
```

### 参数

| 参数     | 说明                                                                              | 类型 |
| -------- | --------------------------------------------------------------------------------- | ---- |
| data     | 需要转为字符串的数据                                                              | any  |
| replacer | JSON.stringify 的第二个参数，仅在部分可格式化的数据在转化时生效                   | any  |
| space    | JSON.stringify 的第三个参数，格式化时的空格。仅在部分可格式化的数据在转化时生效。 | any  |

### 返回

(string):返回被转为字符串的数据。
