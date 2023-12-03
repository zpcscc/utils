# 生成全局唯一ID

## 参数

| 参数名 | 类型                | 默认值                            | 描述                |
| ------ | ------------------- | --------------------------------- | ------------------- |
| prefix | <code>string</code> | <code>&quot;$zpcscc$&quot;</code> | <p>指定id的前缀</p> |

## 返回

(<code>string</code>)：<p>返回一个唯一ID</p>

## 示例

### ts类型

```typescript
getUniqueId(prefix?:string);
```

### demo

```typescript
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
