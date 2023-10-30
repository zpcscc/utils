---
group:
  title: to函数
title: toHex
---

# 介绍

将十进制转为十六进制

```js
import { toHex } from '@dxsixpc/utils';

console.log(toHex(123)); // 7b
```

## API

```typescript
toHex(value: number);
```

### 参数

| 参数  | 说明           | 类型   |
| ----- | -------------- | ------ |
| value | 需要转换的数字 | number |

### 返回

(string):返回转换后的十六进制数据。
