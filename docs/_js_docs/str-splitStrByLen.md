# 按指定长度拆分字符串

## 参数

| 参数名 | 类型                | 描述                              |
| ------ | ------------------- | --------------------------------- |
| value  | <code>string</code> | <p>待分割的字符串</p>             |
| len    | <code>number</code> | <p>分割的数组每项的字符串长度</p> |

## 返回

(<code>Array.&lt;string&gt;</code>)：<p>分割后的数组</p>

## 示例

### ts类型

```typescript
splitStrByLen(value:string, len?:number)
```

### demo

```typescript
import { splitStrByLen } from '@zpcscc/utils';

console.log(splitStrByLen('张三张三张三', 2)); // ['张三','张三','张三']
console.log(splitStrByLen('123456789', 3)); // ['123','456','789']
console.log(splitStrByLen('1234567890', 4)); // ['1234','5678','90']
```
