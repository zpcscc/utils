# pickNumber-挑选出字符串中的所有数字，返回数字数组

## 参数

| 参数名 | 类型                    | 描述                      |
| ------ | ----------------------- | ------------------------- |
| value  | <code>string</code>     | <p>需要处理的字符串</p>   |
| type   | <code>NumberType</code> | <p>需要挑选的数字类型</p> |

## 返回

<code>Array.&lt;number&gt;</code> - <p>返回数字数组</p>

## 示例 _(ts类型)_

```typescript
export type NumberType =
  | 'all' // 所有数字类型
  | 'integer' // 所有整数
  | 'integerPlus' // 正整数
  | 'integerMinus' // 负整数
  | 'decimal' // 所有小数
  | 'decimalPlus' // 正小数
  | 'decimalMinus'; // 负小数
pickNumber(value: string,type?: NumberType);
```

## 示例 _(demo)_

```typescript
import { pickNumber } from '@zpcscc/utils';

console.log(pickNumber('123-234 32.23 -23.43')); // [123, -234];
console.log(pickNumber('123-234', 'integer')); // [123, -234];
console.log(pickNumber('123-234', 'integerPlus')); // [123, 234]
console.log(pickNumber('123-234', 'integerMinus')); // [-234]
console.log(pickNumber('123-2.34', 'decimal')); // [-2.34]
console.log(pickNumber('12.4-sdf=23.4-23.8', 'decimalPlus')); // [12.4, 23.4, 23.8]
console.log(pickNumber('12.4-234-33.4', 'decimalMinus')); // [-33.4]
console.log(pickNumber('sdjlfajsghasd')); // []
```
