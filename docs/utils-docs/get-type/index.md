---
title: getType
group:
  title: get函数合集
---

# 获取数据类型

```js
import { getType } from '@dxsixpc/utils';

console.log(getType([]));           // 'Array';
console.log(getType(true));         // 'Boolean';
console.log(getType(new Date()));   // 'Date';
console.log(getType(new Error()));  // 'Error';
console.log(getType(()=>{}));       // 'Function';
console.log(getType(new Map()));    // 'Map';
console.log(getType(null));         // 'Null';
console.log(getType(123));          // 'Number';
console.log(getType(/[hello]/g));   // 'RegExp';
console.log(getType(new Set()));    // 'Set';
console.log(getType('字符串'));      // 'String';
console.log(getType(undefined));    // 'Undefined';

function () {
  console.log(getType(arguments));  // 'Arguments';
}
```
