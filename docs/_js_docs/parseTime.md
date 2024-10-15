# parseTime

## 描述

<p>格式化时间，将各类时间转为 天，时，分，秒，毫秒的形式</p>

## 参数

| 参数名    | 类型             | 描述                  |
| --------- | ---------------- | --------------------- |
| inputTime | <code>any</code> | <p>需要转换的时间</p> |

## 返回

<code>object</code> - <p>解析后的时间对象</p>

## 示例 _(ts类型)_

```typescript
parseTime(inputTime:any)
```

## 示例 _(demo)_

```typescript
import { parseTime } from '@zpcscc/utils';

console.log(parseTime('2024-08-23 12:34:56')); // 输出: { days: 18941, hours: 12, minutes: 34, seconds: 56 };
```
