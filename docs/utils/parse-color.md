---
group:
  title: parse函数
title: parseColor
---

# 介绍

分析hex、rgb、hsl颜色数据，返回包含rgba的数据对象

```js
import { parseColor } from '@zpcscc/utils';

console.log(parseColor('#6666cc')); // { r: 102, g: 102, b: 204, a: 1 };
console.log(parseColor('rgb(102,204,255)')); // { r: 102, g: 204, b: 255, a: 1 }
console.log(parseColor('hsl(320,100%,70%)')); // { r: 255, g: 102, b: 204, a: 1 }
```

## API

```typescript
parseColor(value: string);
```

### 参数

| 参数  | 说明                                     | 类型   |
| ----- | ---------------------------------------- | ------ |
| value | 需要分析的颜色值。支持hex、rgba、hsl格式 | string |

### 返回

(object):返回包含rgba数据的对象；例：{ r: 102, g: 204, b: 255, a: 1 }
