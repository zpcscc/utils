# 解析Url中的参数

## 参数

| 参数名 | 类型                | 描述                     |
| ------ | ------------------- | ------------------------ |
| value  | <code>string</code> | <p>需要解析的url地址</p> |

## 返回

(<code>Record.&lt;string, any&gt;</code>)：<p>返回分析完成的url地址的对象；例：{ name: 'test', id: '123' }</p>

## 示例

### ts类型

```typescript
parseQuery(value: string);
```

### demo

```typescript
import { parseQuery } from '@zpcscc/utils';

console.log(parseQuery('http://example.com?name=test&id=123')); // { name: 'test', id: '123' };
console.log(parseColor('123')); // {}
console.log(parseColor('')); // {}
```
