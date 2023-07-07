---
group:
  title: 数据校验
title: validateIDCard
---

# 校验身份证

```js
import { validateIDCard } from '@dxsixpc/utils';

console.log(validateIDCard('110101199003072412')); // true
```

## API

```typescript
validateIDCard(data:string);
```

### 参数

| 参数 | 说明           | 类型   |
| ---- | -------------- | ------ |
| data | 需要校验的数据 | string |

### 返回

(boolean):返回校验结果。`true` | `false`
