---
group:
  title: to函数
title: toString
---

# 任意数据转为字符串

## 使用

```js
import { toString } from '@zpcscc/utils';

console.log(toString(true)); // 'true'
console.log(toString(null)); // ''
console.log(toString()); // ''
console.log(toString(undefined)); // ''
console.log(toString(0)); // '0'
console.log(toString(-0)); // '-0'
console.log(toString(123)); // '123'
console.log(toString(() => {})); // '()=>{}'
console.log(toString([])); // '[]'
console.log(toString({})); // '{}'
console.log(toString(Symbol(1))); // 'Symbol(1)'

// 部分数据因为赋值给函数时，已被浏览器自动调整，故无法完整原样转为字符串。
console.log(toString(Symbol.iterator)); // 'Symbol(Symbol.iterator)'
console.log(toString(Number.POSITIVE_INFINITY)); // 'Infinity'
console.log(toString(Number.NEGATIVE_INFINITY)); // '-Infinity'
console.log(toString(Number.MIN_VALUE)); // '5e-324'
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
