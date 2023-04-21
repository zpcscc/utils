---
title: validateDate
order: 2
group:
  title: 数据校验
---

# 校验日期

```js
import { validateDate } from '@dxsixpc/utils';

console.log(validateDate('Thu Apr 20 2023 19:37:20 GMT+0800 (中国标准时间)')); // true
console.log(validateDate('2023-2-28')); // true

// 注意，此方法仅校验日期的格式。对日期的合法性未做校验。
// 例：如下日期实际不存在，但格式正确，则返回true；
console.log(validateDate('2023-2-31')); // true
// 如下日期格式错误。日不存在底32
console.log(validateDate('2023-2-32')); // false
```

## API

```typescript
validateDate(data:string);
```

### 参数

| 参数 | 说明           | 类型   |
| ---- | -------------- | ------ |
| data | 需要校验的数据 | string |

### 返回

(boolean):返回校验结果。`true` | `false`
