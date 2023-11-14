---
group:
  title: get函数
title: getUniqueId
---

# 获取随机id

## 代码演示

```js
import { getUniqueId } from '@zpcscc/utils';

console.log(getUniqueId()); //  1;
console.log(getUniqueId()); //  2;
console.log(getUniqueId()); //  3;
console.log(getUniqueId()); //  4;
console.log(getUniqueId()); //  5;
console.log(getUniqueId('test_')); //  test_1;
console.log(getUniqueId('test_')); //  test_2;
console.log(getUniqueId('test_')); //  test_3;
console.log(getUniqueId('test_')); //  test_4;
console.log(getUniqueId('test_')); //  test_5;
```

## API

```typescript
getUniqueId(prefix?:string);
```

### 参数

| 参数   | 说明   | 类型   |
| ------ | ------ | ------ |
| prefix | id前缀 | string |

### 返回

(string):返回对应的唯一id
