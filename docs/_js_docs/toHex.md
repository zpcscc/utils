# 十进制转十六进制

## 参数

| 参数名 | 类型                | 描述                |
| ------ | ------------------- | ------------------- |
| number | <code>number</code> | <p>十进制的数字</p> |

## 返回

<code>string</code> - <p>返回转换后的十六进制数据</p>

## 示例 _(ts类型)_

```typescript
toHex(value: number);
```

## 示例 _(demo)_

```typescript
import { toHex } from '@zpcscc/utils';

console.log(toHex(123)); // 7b
```
