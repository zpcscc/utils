# toAbsolutePath

## 描述

<p>相对路径转绝对路径</p>

## 参数

| 参数名 | 类型                | 描述               |
| ------ | ------------------- | ------------------ |
| url    | <code>string</code> | <p>相对路径url</p> |

## 返回

<code>string</code> - <p>返回绝对路径url</p>

## 示例 _(ts类型)_

```typescript
toAbsolutePath(data:string)
```

## 示例 _(demo)_

```typescript
import { toAbsolutePath } from '@zpcscc/utils';

console.log(toAbsolutePath('/img/logo.png')); // https://zpcscc.top/img/logo.png
```
