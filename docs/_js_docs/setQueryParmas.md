# setQueryParmas

## 描述

<p>设置url携带的参数</p>

## 参数

| 参数名 | 类型                | 描述                             |
| ------ | ------------------- | -------------------------------- |
| url    | <code>string</code> | <p>需要解析的url链接或字符串</p> |

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| url   | <code>string</code> | <p>需要解析的url链接或字符串</p> |

## 返回

<code>object</code> - <p>返回解析后的query参数</p>

## 示例 _(ts类型)_

```typescript
setQueryParmas(url:string)
```

## 示例 _(demo)_

```typescript
import { setQueryParmas } from '@zpcscc/utils';

const updatedUrl1 = setQueryParams('https://example.com/path?foo=1', {
  foo: '2',
  bar: '3',
  baz: '4'
});

const updatedUrl2 = setQueryParams('invalid-url', {
  foo: '2',
  bar: '3',
  baz: '4'
});

console.log(updatedUrl1); // 输出: https://example.com/path?foo=2&bar=3&baz=4
console.log(updatedUrl2); // 输出: invalid-url
```
