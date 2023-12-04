# 判断一个字符串中是否含有中文

## 参数

| 参数名 | 类型                | 描述                  |
| ------ | ------------------- | --------------------- |
| str    | <code>string</code> | <p>待判断的字符串</p> |

## 返回

(<code>boolean</code>)：<p>返回布尔值</p>

## 示例

### ts类型

```typescript
isIncludeChinese(str:string)
```

### demo

```typescript
import { isIncludeChinese } from '@zpcscc/utils';

console.log(isIncludeChinese('张三')); // true
console.log(isIncludeChinese('张三12')); // true
console.log(isIncludeChinese('12234')); // false
console.log(isIncludeChinese('Name')); // false
```
