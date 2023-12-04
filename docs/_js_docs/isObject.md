# 检查“value”是否是“object”

## 参数

| 参数名 | 类型             | 描述              |
| ------ | ---------------- | ----------------- |
| value  | <code>any</code> | <p>要判断的值</p> |

## 返回

(<code>boolean</code>)：<p>返回布尔值</p>

## 示例

### ts类型

```typescript
isObject(value: any);
```

### demo

```typescript
import { isObject } from '@zpcscc/utils';

console.log(isObject({})); // true
console.log(isObject([1, 2, 3])); // false
console.log(isObject(undefined)); // false
console.log(isObject('')); // false
```
