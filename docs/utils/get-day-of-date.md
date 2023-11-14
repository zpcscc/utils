---
group:
  title: get函数
title: getDayOfDate
---

# 获取日期距今的天数或倒计时的天数

## 在线演示

<code src="./getDayOfDate"></code>

## 代码演示

```js
import { getDayOfDate } from '@zpcscc/utils';

const pastDate = new Date(Date.now() - 1000 * 60 * 60 * 24 * 3);
console.log(getDayOfDate(pastDate)); //  3;
console.log(getDayOfDate('2023-01-01')); //  返回对应日期距今的天数;
console.log(getDayOfDate('2099-12-31')); //  返回对应日期倒计时的天数;
```

## API

```typescript
getDayOfDate(date: Date | string);
```

### 参数

| 参数 | 说明               | 类型           |
| ---- | ------------------ | -------------- |
| date | 日期或日期的字符串 | `Date、string` |

### 返回

(number):返回日期距今的天数，或倒计时的天数
