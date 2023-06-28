---
group:
  title: get函数合集
title: getRandomColor
order: 1
---

# 获取随机颜色

## 在线演示

<code src="./get/getRandomColor"></code>

## 代码演示

```js
import { getRandomColor } from '@dxsixpc/utils';

console.log(getRandomColor()); //  #6ffccf;
console.log(getRandomColor('hex')); //  #8d3eca;
console.log(getRandomColor('rgb')); //  rgb(12,45,145,0.4);
```

## API

```typescript
// 获取随机颜色
getRandomColor(type:'rgb' | 'hex');
```

### 参数

| 参数 | 说明       | 类型         |
| ---- | ---------- | ------------ |
| type | 颜色的格式 | `rgb`、`hex` |

### 返回

(string):返回对应的颜色
