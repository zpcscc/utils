---
group:
  title: parse函数
title: parseQuery
---

# 介绍

分析url地址，返回一个对象

```js
import { parseQuery } from '@zpcscc/utils';

console.log(parseQuery('http://example.com?name=test&id=123')); // { name: 'test', id: '123' };
console.log(parseColor('123')); // {}
console.log(parseColor('')); // {}
```

## API

```typescript
parseQuery(value: string);
```

### 参数

| 参数  | 说明            | 类型   |
| ----- | --------------- | ------ |
| value | 需要分析url地址 | string |

### 返回

(object):返回分析完成的url地址的对象；例：{ name: 'test', id: '123' }
