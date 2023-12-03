# 将‘rgb’、‘hex’、‘hsl’颜色字符串解析为颜色对象

## 参数

| 参数名 | 类型                | 描述              |
| ------ | ------------------- | ----------------- |
| value  | <code>string</code> | <p>颜色字符串</p> |

## 返回

(<code>ColorObjType</code>)：<p>rgba颜色对象; 例：{ r: 102, g: 204, b: 255, a: 1 }</p>

## 示例

### ts类型

```typescript
parseColor(value: string);
```

### demo

```typescript
import { parseColor } from '@zpcscc/utils';

console.log(parseColor('#6666cc')); // { r: 102, g: 102, b: 204, a: 1 };
console.log(parseColor('rgb(102,204,255)')); // { r: 102, g: 204, b: 255, a: 1 }
console.log(parseColor('hsl(320,100%,70%)')); // { r: 255, g: 102, b: 204, a: 1 }
```
