---
group:
  title: 数据校验
title: validatePhone
order: 4
---

# 校验手机号

```js
import { validatePhone } from '@dxsixpc/utils';

console.log(validatePhone('17776723849')); // true
```

## API

```typescript
validatePhone(data:string);
```

### 参数

| 参数 | 说明           | 类型   |
| ---- | -------------- | ------ |
| data | 需要校验的数据 | string |

### 返回

(boolean):返回校验结果。`true` | `false`
