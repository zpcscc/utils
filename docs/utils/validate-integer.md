---
group:
  title: 数据校验
title: validateInteger
order: 4
---

# 校验手机号

```js
import { validateInteger } from '@dxsixpc/utils';

console.log(validateInteger(3149786)); // true
```

## API

```typescript
validateInteger(data:string);
```

### 参数

| 参数 | 说明           | 类型   |
| ---- | -------------- | ------ |
| data | 需要校验的数据 | string |

### 返回

(boolean):返回校验结果。`true` | `false`
