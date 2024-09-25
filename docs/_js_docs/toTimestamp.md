# toTimestamp

## 描述

<p>任意时间值转为时间戳</p>

## 参数

| 参数名    | 类型                | 描述                  |
| --------- | ------------------- | --------------------- |
| inputTime | <code>string</code> | <p>需要转换的时间</p> |

| Param     | Type                | Description           |
| --------- | ------------------- | --------------------- |
| inputTime | <code>string</code> | <p>需要转换的时间</p> |

## 返回

<code>number</code> - <p>返回对应的时间戳</p>

## 示例 _(ts类型)_

```typescript
toTimestamp(time:any)
```

## 示例 _(demo)_

```typescript
import { toTimestamp } from '@zpcscc/utils';

console.log(toTimestamp('2024-08-23T12:34:56.789Z')); // 输出指定时间的时间戳
console.log(toTimestamp(new Date())); // 输出当前时间的时间戳
console.log(toTimestamp(1692791696789)); // 输出指定时间戳
console.log(toTimestamp('invalid date')); // 输出当前时间的时间戳
```
