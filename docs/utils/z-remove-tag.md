---
group:
  title: 其他
title: removeTag
---

# 删除html字符串中的tag标签

```js
import { removeTag } from '@zpcscc/utils';

console.log(removeTag('<p>Hello World!</p>')); // Hello World!
console.log(removeTag('Hello World!')); // Hello World!
console.log(removeTag(null)); // ''
console.log(removeTag('')); // ''
```

## API

```typescript
removeTag(html:string);
```

### 参数

| 参数 | 说明                    | 类型   |
| ---- | ----------------------- | ------ |
| html | 需要删除tag的html字符串 | string |

### 返回

(string):返回没有tag的字符串。
