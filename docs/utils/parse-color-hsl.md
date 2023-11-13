---
group:
  title: parse函数
title: parseColorHsl
---

# 介绍

将包含rgba的数据对象转为hsl格式的颜色

```js
import { parseColorHsl } from '@zpcscc/utils';

console.log(parseColorHsl({ r: 102, g: 204, b: 255, a: 1 })); // hsl(200,100%,70%);
console.log(parseColorHsl({ r: 255, g: 102, b: 204, a: 1 })); // hsl(320,100%,70%);
console.log(parseColorHsl({ r: 102, g: 255, b: 204, a: 1 })); // hsl(160,100%,70%);
```

## API

```typescript
parseColorHsl(value: string);
```

### 参数

| 参数  | 说明               | 类型   |
| ----- | ------------------ | ------ |
| value | 需要分析的颜色对象 | string |

### 返回

(string):返回hsl格式的颜色；例：hsl(200,100%,70%)
