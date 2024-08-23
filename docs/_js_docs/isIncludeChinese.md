# isIncludeChinese

## 描述

<p>判断一个字符串中是否含有中文</p>

## 参数

| 参数名 | 类型                | 描述                  |
| ------ | ------------------- | --------------------- |
| str    | <code>string</code> | <p>待判断的字符串</p> |

## 返回

<code>boolean</code> - <p>返回布尔值</p>

## 示例 _(ts类型)_

```typescript
isIncludeChinese(str:string)
```

## 示例 _(demo)_

```typescript
import { isIncludeChinese } from '@zpcscc/utils';

console.log(isIncludeChinese('张三')); // true
console.log(isIncludeChinese('张三12')); // true
console.log(isIncludeChinese('12234')); // false
console.log(isIncludeChinese('Name')); // false
```
