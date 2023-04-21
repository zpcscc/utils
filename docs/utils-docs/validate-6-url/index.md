---
title: validateUrl
order: 6
group:
  title: 数据校验
---

# 校验url链接

```js
import { validateUrl } from '@dxsixpc/utils';

console.log(validateUrl('https://zpcscc.top')); // true
```

## API

```typescript
validateUrl(data:string);
```

### 参数

| 参数 | 说明           | 类型   |
| ---- | -------------- | ------ |
| data | 需要校验的数据 | string |

### 返回

(boolean):返回校验结果。`true` | `false`
