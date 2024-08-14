# getType-获取数据类型

## 参数

| 参数名 | 类型             | 描述                      |
| ------ | ---------------- | ------------------------- |
| data   | <code>any</code> | <p>需要判断类型的数据</p> |

## 返回

<code>string</code> - <p>返回对应的类型 <code>Array</code>、<code>Boolean</code>、<code>Date</code>、<code>Error</code>、<code>Function</code>、<code>Map</code>、<code>Null</code>、<code>Number</code>、<code>RegExp</code>、<code>Set</code>、<code>String</code>、<code>Symbol</code>、<code>Undefined</code>、<code>Arguments</code></p>

## 示例 _(ts类型)_

```typescript
getType(value:any)
```

## 示例 _(demo)_

```typescript
import { getType } from '@zpcscc/utils';

console.log(getType([]));               // 'Array';
console.log(getType(true));             // 'Boolean';
console.log(getType(new Date()));       // 'Date';
console.log(getType(new Error()));      // 'Error';
console.log(getType(()=>{}));           // 'Function';
console.log(getType(new Map()));        // 'Map';
console.log(getType(null));             // 'Null';
console.log(getType(123));              // 'Number';
console.log(getType(/[hello]/g));       // 'RegExp';
console.log(getType(new Set()));        // 'Set';
console.log(getType(Symbol.iterator));  // 'Symbol';
console.log(getType('字符串'));          // 'String';
console.log(getType(undefined));        // 'Undefined';

function () {
  console.log(getType(arguments));      // 'Arguments';
}
```
