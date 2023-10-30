---
group:
  title: parse函数
title: parseColorRgb
---

# 介绍

将包含rgba的数据对象转为rgb格式的颜色

```js
import { parseColorRgb } from '@dxsixpc/utils';

console.log(parseColorRgb({ r: 102, g: 204, b: 255, a: 1 })); // rgb(102,204,255);
console.log(parseColorRgb({ r: 255, g: 102, b: 204, a: 1 })); // rgb(255,102,204);
console.log(parseColorRgb({ r: 102, g: 255, b: 204, a: 1 })); // rgb(102,255,204);
```

## API

```typescript
parseColorRgb(value: string);
```

### 参数

| 参数  | 说明               | 类型   |
| ----- | ------------------ | ------ |
| value | 需要分析的颜色对象 | string |

### 返回

(string):返回rgb格式的颜色；例：rgb(102,204,255)
