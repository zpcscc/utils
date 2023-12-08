# 数据校验

## 参数

| 参数名 | 类型                      | 描述                      |
| ------ | ------------------------- | ------------------------- | ------- | ----- | -------- | ----------------------- |
| data   | <code>any</code>          | <p>需要校验的数据</p>     |
| type   | <code>ValidateType</code> | <p>需要校验的类型 'phone' | 'email' | 'url' | 'IDCard' | 'date' ｜ 'integer'</p> |

## 返回

<code>boolean</code> - <p>返回校验的结果, 默认返回 false</p>

## 示例 _(ts类型)_

```typescript
type ValidateType = 'phone' | 'email' | 'url' | 'IDCard' | 'date' ｜ 'integer';
validate(data:any, type:ValidateType)
```

## 示例 _(demo)_

```typescript
import { validate } from '@zpcscc/utils';
import type { ValidateType } from '@zpcscc/utils';

console.log(validate('17773827673', 'phone')); // true
console.log(validate('123', 'integer')); // true
console.log(validate('110101199003072412', 'IDCard')); // true
console.log(validate('2023-04-01', 'date')); // true
console.log(validate('zpcscc@gmail.com', 'email')); // true
console.log(validate('https://zpcscc.top', 'url')); // true
```
