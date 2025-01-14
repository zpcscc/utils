# toData

## 描述

<p>将string转为json等数据</p>

## 参数

| 参数名    | 类型                | 描述                                |
| --------- | ------------------- | ----------------------------------- |
| str       | <code>string</code> | <p>需要转换的字符串</p>             |
| parseArgs | <code>Object</code> | <p>其他参数，用于传入JSON.parse</p> |

## 返回

<code>any</code> - <p>返回对应格式的数据</p>

## 示例 _(ts类型)_

```typescript
toData(str:string, parseArgs?:any);
```

## 示例 _(demo)_

```typescript
import { toData } from '@zpcscc/utils';

console.log(toData('1')); // 1
console.log(toData('true')); // true
console.log(toData('{}')); // {}
console.log(toData('[]')); // []
console.log(toData('null')); // null
console.log(toData('undefined')); // undefined
```
