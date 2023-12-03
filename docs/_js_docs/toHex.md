# 十进制转十六进制

## 参数

| 参数名 | 类型                | 描述                |
| ------ | ------------------- | ------------------- |
| number | <code>number</code> | <p>十进制的数字</p> |

## 返回

(<code>string</code>)：<p>返回转换后的十六进制数据</p>

## 示例

### ts类型

```typescript
toHex(value: number);
```

### demo

```typescript
import { toHex } from '@zpcscc/utils';

console.log(toHex(123)); // 7b
```
