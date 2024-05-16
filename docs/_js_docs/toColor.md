# 将“rgb”、“hsl”、“hex”的颜色格式互相转换，转换为指定的格式

## 参数

| 参数名 | 类型                | 描述                                   |
| ------ | ------------------- | -------------------------------------- |
| value  | <code>string</code> | <p>“rgb”、“hsl”、“hex”格式的字符串</p> |
| type   | <code>string</code> | <p>“rgb”、“hsl”、“hex”</p>             |

## 返回

<code>string</code> - <p>返回转换为对应格式的颜色字符串</p>

## 示例 _(ts类型)_

```typescript
toColor(data:string, type: 'rgb' | 'hsl' | 'hex');
```

## 示例 _(demo)_

```typescript
import { toColor } from '@zpcscc/utils';

console.log(toColor('#6666cc', 'rgb')); // rgb(102,102,204);
console.log(toColor('rgb(102,102,204)', 'hex')); // #6666cc;
console.log(toColor('#6666cc', 'hsl')); // hsl(240,50%,60%);
```
