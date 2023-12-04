# 将“value”转换为有限数字

## 参数

| 参数名 | 类型             | 描述              |
| ------ | ---------------- | ----------------- |
| data   | <code>any</code> | <p>要转换的值</p> |

## 返回

(<code>number</code>)：<p>返回转换后的有限数字</p>

## 示例

### ts类型

```typescript
toNumber(value: any);
```

### demo

```typescript
import { toNumber } from '@zpcscc/utils';

console.log(toNumber(3.2)); // 3.2
console.log(toNumber('3.2')); // 3.2
console.log(toNumber(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(toNumber(Number.MIN_VALUE)); // 5e-324
```
