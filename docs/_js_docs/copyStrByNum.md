# copyStrByNum

## 描述

<p>将指定字符串复制指定次数并使用传入的拼接符号拼接在一起</p>

## 参数

| 参数名   | 类型                | 默认值         | 描述                        |
| -------- | ------------------- | -------------- | --------------------------- |
| str      | <code>string</code> |                | <p>待复制的字符串</p>       |
| num      | <code>number</code> | <code>1</code> | <p>复制的次数</p>           |
| interval | <code>number</code> |                | <p>用于拼接字符串的符号</p> |

| Param    | Type                | Default        | Description                 |
| -------- | ------------------- | -------------- | --------------------------- |
| str      | <code>string</code> |                | <p>待复制的字符串</p>       |
| num      | <code>number</code> | <code>1</code> | <p>复制的次数</p>           |
| interval | <code>number</code> |                | <p>用于拼接字符串的符号</p> |

## 返回

<code>string</code> - <p>复制拼接后的字符串</p>

## 示例 _(ts类型)_

```typescript
copyStrByNum(data:string, num?:number,interval?:string)
```

## 示例 _(demo)_

```typescript
import { copyStrByNum } from '@zpcscc/utils';

console.log(copyStrByNum('*', 5)); // *****
console.log(copyStrByNum('张三', 3)); // 张三张三张三
console.log(copyStrByNum('李四', 4, '-')); // 李四-李四-李四-李四
console.log(copyStrByNum('Name')); // Name
```
