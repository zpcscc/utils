# 生成全局唯一ID

## 参数

| 参数名 | 类型                | 默认值                                | 描述                                  |
| ------ | ------------------- | ------------------------------------- | ------------------------------------- |
| length | <code>number</code> | <code>4</code>                        | <p>随机id的长度，不包含自定义前缀</p> |
| prefix | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | <p>指定id的前缀</p>                   |

## 返回

<code>string</code> - <p>返回一个唯一ID</p>

## 示例 _(ts类型)_

```typescript
getUniqueId(prefix?:string);
```

## 示例 _(demo)_

```typescript
import { getUniqueId } from '@zpcscc/utils';

console.log(getUniqueId()); //  '32f4';
console.log(getUniqueId(2)); //  'b0';
console.log(getUniqueId(6)); //  '3e964a';
console.log(getUniqueId(2, 'test_')); //  'test_db';
console.log(getUniqueId(5, 'test_')); //  'test_7ad22';
```
