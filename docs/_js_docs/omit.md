# omit

## 描述

<p>从一个对象中，排除指定字段，将剩余字段组成一个新对象并返回</p>

## 参数

| 参数名     | 类型                 | 描述                          |
| ---------- | -------------------- | ----------------------------- |
| obj        | <code>object</code>  | <p>待排除的对象</p>           |
| keysToOmit | <code>array</code>   | <p>需要排除的字段名称数组</p> |
| deep       | <code>boolean</code> | <p>是否递归处理所有子对象</p> |

## 返回

<code>object</code> - <p>排除指定字段后的对象</p>

## 示例 _(ts类型)_

```typescript
omit(data:AnyObject, keysToOmit:AnyArray, deep?:boolean)
```

## 示例 _(demo)_

```typescript
import { omit } from '@zpcscc/utils';

// 示例-1
const original = { a: 1, b: 2, c: 3 };
const result = omit(original, ['b', 'c']);
console.log(result); // 输出 { a: 1 }

// 示例-2
const original = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
};
const shallowResult = omit(original, ['b', 'd']);
console.log(shallowResult); // 输出 { a: 1, c: { d: 3, e: 4 } }
const deepResult = omit(original, ['b', 'd'], true);
console.log(deepResult); // 输出 { a: 1, c: { e: 4 } }
```
