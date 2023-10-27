---
group:
  title: get函数
title: getRandomColor
---

# 获取随机颜色

## 在线演示

<code src="./getRandomColor"></code>

## 代码演示

```js
import { getRandomColor } from '@dxsixpc/utils';

console.log(getRandomColor()); //  #6ffccf;
console.log(getRandomColor('hex')); //  #8d3eca;
console.log(getRandomColor('rgb')); //  rgb(12,45,145,0.4);
console.log(getRandomColor('hsl')); //  hsl(200,100%,70%);
```

## API

```typescript
// 获取随机颜色
getRandomColor(type:'rgb' | 'hex' | 'hsl');
```

### 参数

| 参数 | 说明       | 类型                |
| ---- | ---------- | ------------------- |
| type | 颜色的格式 | `rgb`、`hex`、`hsl` |

### 返回

(string):返回对应的颜色
