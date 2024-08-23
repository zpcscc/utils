# pick

## 描述

<p>从一个对象中，提取出指定字段组成一个新对象并返回</p>

## 参数

| 参数名     | 类型                | 描述                          |
| ---------- | ------------------- | ----------------------------- |
| obj        | <code>object</code> | <p>待提取的对象</p>           |
| keysToPick | <code>array</code>  | <p>需要提取的字段名称数组</p> |

## 返回

<code>object</code> - <p>提取后的对象</p>

## 示例 _(ts类型)_

```typescript
pick(obj:AnyObject, keysToPick:AnyArray, deep?:boolean)
```

## 示例 _(demo)_

```typescript
import { pick } from '@zpcscc/utils';

// 示例
const original = { a: 1, b: { c: 3, d: 4 }, e: 5 };

// 浅层提取
const shallowResult = pick(original, ['a', 'b']);
console.log(shallowResult); // 输出 { a: 1, b: { c: 3, d: 4 } }

// 深层提取
const deepResult = pick(original, ['b'], true);
console.log(deepResult); // 输出 { b: { c: 3, d: 4 } }
```
