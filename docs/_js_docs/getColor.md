# getColor

## 描述

<p>获取随机颜色</p>

## 参数

| 参数名 | 类型                                                                                         | 描述                  |
| ------ | -------------------------------------------------------------------------------------------- | --------------------- |
| type   | <code>&#x27;rgb&#x27;</code> \| <code>&#x27;hex&#x27;</code> \| <code>&#x27;hsl&#x27;</code> | <p>返回颜色的格式</p> |

## 返回

<code>string</code> - <p>返回生成的随机颜色字符串</p>

## 示例 _(ts类型)_

```typescript
getColor(type:'rgb' | 'hex' | 'hsl');
```

## 示例 _(demo)_

```typescript
import { getColor } from '@zpcscc/utils';

console.log(getColor()); //  #6ffccf;
console.log(getColor('hex')); //  #8d3eca;
console.log(getColor('rgb')); //  rgb(12,45,145,0.4);
console.log(getColor('hsl')); //  hsl(200,100%,70%);
```
