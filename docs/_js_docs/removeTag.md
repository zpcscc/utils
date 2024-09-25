# removeTag

## 描述

<p>去除字符串中的元素标记</p>

## 参数

| 参数名 | 类型                | 描述                       |
| ------ | ------------------- | -------------------------- |
| value  | <code>string</code> | <p>需要删除tag的字符串</p> |

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| value | <code>string</code> | <p>需要删除tag的字符串</p> |

## 返回

<code>string</code> - <p>返回没有tag的字符串</p>

## 示例 _(ts类型)_

```typescript
removeTag(html:string);
```

## 示例 _(demo)_

```typescript
import { removeTag } from '@zpcscc/utils';

console.log(removeTag('<p>Hello World!</p>')); // Hello World!
console.log(removeTag('Hello World!')); // Hello World!
console.log(removeTag(null)); // ''
console.log(removeTag('')); // ''
```
