# getQueryParams

## 描述

<p>获取url携带的参数</p>

## 参数

| 参数名 | 类型                | 描述                             |
| ------ | ------------------- | -------------------------------- |
| url    | <code>string</code> | <p>需要解析的url链接或字符串</p> |

## 返回

<code>object</code> - <p>返回解析后的query参数</p>

## 示例 _(ts类型)_

```typescript
getQueryParams(url:string)
```

## 示例 _(demo)_

```typescript
import { getQueryParams } from '@zpcscc/utils';

console.log(getQueryParams('name=John&age=30'));                          //  {name: 'John', age: '30'}
console.log(getQueryParams(encodeURIComponent('name=John&age=30')));      //  {name: 'John', age: '30'}
console.log(getQueryParams('www.zpcscc.top?name=John&age=30')));         //  {name: 'John', age: '30'}
```
