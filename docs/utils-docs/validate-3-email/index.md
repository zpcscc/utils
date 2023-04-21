---
title: validateEmail
order: 3
group:
  title: 数据校验
---

# 校验邮箱

```js
import { validateEmail } from '@dxsixpc/utils';

console.log(validateEmail('dxsixpc@gmail.com')); // true
```

## API

```typescript
validateEmail(data:string);
```

### 参数

| 参数 | 说明           | 类型   |
| ---- | -------------- | ------ |
| data | 需要校验的数据 | string |

### 返回

(boolean):返回校验结果。`true` | `false`
