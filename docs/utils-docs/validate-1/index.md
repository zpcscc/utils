---
title: validate
order: 1
group:
  title: 数据校验
---

# 数据校验

## 在线演示

<code src="./ValidateData.tsx"></code>

## 代码演示

```js
import { validate } from '@dxsixpc/utils';
import type { ValidateType } from '@dxsixpc/utils';

console.log(validate('17773827673', 'phone')); // true
console.log(validate('110101199003072412', 'IDCard')); // true
console.log(validate('2023-04-01', 'date')); // true
console.log(validate('dxsixpc@gmail.com', 'email')); // true
console.log(validate('https://zpcscc.top', 'url')); // true
```

## API

```typescript
type ValidateType = 'phone' | 'email' | 'url' | 'IDCard' | 'date';
validate(data:any,type:ValidateType)
```

### 参数

| 参数 | 说明           | 类型                                      |
| ---- | -------------- | ----------------------------------------- |
| data | 需要校验的数据 | any                                       |
| type | 可以校验的类型 | `phone`、`email`、`url`、`IDCard`、`date` |

### 返回

(boolean):返回校验结果。`true` | `false`
