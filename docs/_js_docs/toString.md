# 将各种格式的数据转为string

## 参数

| 参数名        | 类型                | 描述                                    |
| ------------- | ------------------- | --------------------------------------- |
| data          | <code>any</code>    | <p>需要转换的数据</p>                   |
| stringifyArgs | <code>object</code> | <p>其他参数，用于传入JSON.stringify</p> |

## 返回

(<code>string</code>)：<p>转换后的字符串数据</p>

## 示例

### ts类型

```typescript
toString(data:any, replacer?:any, space?:number);
```

### demo

```typescript
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
