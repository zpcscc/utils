---
group:
  title: 其他
  order: 999
title: validate
---

# 数据校验

## 在线演示

<code src="./validate"></code>

## 代码演示

```js
import { validate } from '@zpcscc/utils';
import type { ValidateType } from '@zpcscc/utils';

console.log(validate('17773827673', 'phone')); // true
console.log(validate('123', 'integer')); // true
console.log(validate('110101199003072412', 'IDCard')); // true
console.log(validate('2023-04-01', 'date')); // true
console.log(validate('zpcscc@gmail.com', 'email')); // true
console.log(validate('https://zpcscc.top', 'url')); // true
```

## API

```typescript
type ValidateType = 'phone' | 'email' | 'url' | 'IDCard' | 'date' ｜ 'integer';
validate(data:any, type:ValidateType)
```

### 参数

| 参数 | 说明           | 类型                                                 |
| ---- | -------------- | ---------------------------------------------------- |
| data | 需要校验的数据 | any                                                  |
| type | 可以校验的类型 | `phone`、`email`、`url`、`IDCard`、`date`、`integer` |

### 返回

(boolean):返回校验结果。`true` | `false`