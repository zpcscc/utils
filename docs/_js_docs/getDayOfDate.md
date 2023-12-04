# 获取日期距今的天数或倒计时的天数

## 参数

| 参数名 | 类型                                     | 描述                                                    |
| ------ | ---------------------------------------- | ------------------------------------------------------- |
| value  | <code>Date</code> \| <code>string</code> | <p>需要计算的日期，不传的话，默认是当前日期,返回0天</p> |

## 返回

(<code>number</code>)：<p>天数</p>

## 示例

### ts类型

```typescript
getDayOfDate(value: Date | string);
```

### demo

```typescript
import { getDayOfDate } from '@zpcscc/utils';

const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 3);
console.log(getDayOfDate(pastDate)); //  3;
console.log(getDayOfDate('2023-01-01')); //  返回对应日期距今的天数;
console.log(getDayOfDate('2099-12-31')); //  返回对应日期倒计时的天数;
```
