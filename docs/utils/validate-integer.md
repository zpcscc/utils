---
group:
  title: 数据校验
title: validateInteger
---

# 校验整数

```js
import { validateInteger } from '@zpcscc/utils';

console.log(validateInteger(3149786)); // true
```

## API

```typescript
validateInteger(data:number);
```

### 参数

| 参数 | 说明           | 类型   |
| ---- | -------------- | ------ |
| data | 需要校验的数据 | number |

### 返回

(boolean):返回校验结果。`true` | `false`
