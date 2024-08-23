# cloneDeep

## 描述

<p>将指定数据进行深拷贝，若无法拷贝则返回原数据</p>

## 参数

| 参数名 | 类型             | 描述                |
| ------ | ---------------- | ------------------- |
| data   | <code>any</code> | <p>待拷贝的数据</p> |

## 返回

<code>string</code> - <p>深拷贝后的数据</p>

## 示例 _(ts类型)_

```typescript
cloneDeep(data:any, opt?:number)
```

## 示例 _(demo)_

```typescript
import { cloneDeep } from '@zpcscc/utils';

console.log(cloneDeep('Name')); // Name
console.log(cloneDeep({ name: '张三' })); // {name:'张三'}
```
