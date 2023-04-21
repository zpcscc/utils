---
title: styledToString
order: 7
group:
  title: 数据转换
---

# 将 styled 对象转为 css-in-js 可以运行的字符串

## 在线演示

<code src="./StyledToString.tsx">styled 转成 string</code>

## API

```typescript
interface StyledType {
  [key: string]: React.CSSProperties | StyledType | string | number;
}
// 十六进制颜色 转为 rgba颜色
styledToString(data:StyledType | string);
```

### 参数

| 参数 | 说明               | 类型   |
| ---- | ------------------ | ------ |
| data | css 格式的对象数据 | string |

### 返回

(string):返回 css-in-js 可运行的 css 字符串。
