# 将“rgb”、“hsl”、“hex”的颜色格式互相转换，转换为指定的格式123

## 参数

| 参数名 | 类型                | 描述                                   |
| ------ | ------------------- | -------------------------------------- |
| value  | <code>string</code> | <p>“rgb”、“hsl”、“hex”格式的字符串</p> |
| type   | <code>string</code> | <p>“rgb”、“hsl”、“hex”</p>             |

## 返回

(<code>string</code>)：<p>返回转换为对应格式的颜色字符串</p>

## 示例

### ts类型

```typescript
transformColor(data:string, type: 'rgb' | 'hsl' | 'hex');
```

### demo

```typescript
import { transformColor } from '@zpcscc/utils';

console.log(transformColor('#6666cc', 'rgb')); // rgb(102,102,204);
console.log(transformColor('rgb(102,102,204)', 'hex')); // #6666cc;
console.log(transformColor('#6666cc', 'hsl')); // hsl(240,50%,60%);
```
