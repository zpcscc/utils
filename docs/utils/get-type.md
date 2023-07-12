---
group:
  title: get函数合集
  order: 1
title: getType
---

# 获取数据类型

```js
import { getType } from '@dxsixpc/utils';

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

## API

```typescript
// 获取类型
getType(value:any)
```

### 参数

| 参数  | 说明               | 类型 |
| ----- | ------------------ | ---- |
| value | 需要获取类型的数据 | any  |

### 返回

(string):返回数据的类型。
`Array`、`Boolean`、`Date`、`Error`、`Function`、
`Map`、`Null`、`Number`、`RegExp`、`Set`、
`String`、`Symbol`、`Undefined`、`Arguments`
