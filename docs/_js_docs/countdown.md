# countdown

## 描述

<p>一个倒计时函数</p>

## 参数

| 参数名   | 类型                  | 描述                                    |
| -------- | --------------------- | --------------------------------------- |
| endTime  | <code>string</code>   | <p>结束时间</p>                         |
| interval | <code>number</code>   | <p>倒计时间隔时间，默认 1000（1秒）</p> |
| onTick   | <code>function</code> | <p>每一步倒计时的回调</p>               |
| onEnd    | <code>function</code> | <p>倒计时结束时的回调</p>               |

## 返回

<code>function</code> - <p>stop 停止倒计时</p>

## 示例 _(ts类型)_

```typescript
countdown({
  endTime: string;
  interval: number;
  onTick: (time: { days: number; hours: number; minutes: number; seconds: number; }) => void;
  onEnd: () => void;
})
```

## 示例 _(demo)_

```typescript
import { countdown } from '@zpcscc/utils';

const { stop } = countdown({
  endTime: '2024-08-23T12:00:00', // 目标时间
  onTick: ({ days, hours, minutes, seconds }) => {
    console.log(`倒计时更新: ${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`);
  },
  onEnd: () => console.log('倒计时结束！') // 完成时的回调
});

stop(); // 可中途调用stop来停止倒计时
```
