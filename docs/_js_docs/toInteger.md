# 将“value”转为整数

## 参数

| 参数名 | 类型             | 描述              |
| ------ | ---------------- | ----------------- |
| value  | <code>any</code> | <p>要转换的值</p> |

## 返回

(<code>number</code>)：<p>返回转换后的整数</p>

## 示例

### ts类型

```typescript
toInteger(value: any);
```

### demo

```typescript
import { toInteger } from '@zpcscc/utils';

console.log(toInteger(3.2)); // 3
console.log(toInteger('3.2')); // 3
console.log(toInteger(Number.POSITIVE_INFINITY)); // 1.7976931348623157e+308
console.log(toInteger(Number.MIN_VALUE)); // 0
```
