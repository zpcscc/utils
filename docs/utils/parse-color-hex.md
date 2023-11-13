---
group:
  title: parse函数
title: parseColorHex
---

# 介绍

将包含rgba的数据对象转为hex格式的颜色

```js
import { parseColorHex } from '@zpcscc/utils';

console.log(parseColorHex({ r: 102, g: 204, b: 255, a: 1 })); // #66ccff;
console.log(parseColorHex({ r: 255, g: 102, b: 204, a: 1 })); // #ff66cc;
console.log(parseColorHex({ r: 102, g: 255, b: 204, a: 1 })); // #66ffcc;
```

## API

```typescript
parseColorHex(value: string);
```

### 参数

| 参数  | 说明               | 类型   |
| ----- | ------------------ | ------ |
| value | 需要分析的颜色对象 | string |

### 返回

(string):返回hex格式的颜色；例：#66ccff
