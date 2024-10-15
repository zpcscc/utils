# fetchAll

## 描述

<p>并发请求控制：传入所有需要请求的接口数据，通过此函数进行并发控制；此函数只做并发控制，请求函数与参数，由外部传入；</p>

## 参数

| 参数名         | 类型                           | 默认值         | 描述                            |
| -------------- | ------------------------------ | -------------- | ------------------------------- |
| tasks          | <code>Array.&lt;any&gt;</code> |                | <p>待请求的接口相关任务列表</p> |
| maxConcurrency | <code>number</code>            | <code>5</code> | <p>最大并发数</p>               |
| requestFn      | <code>function</code>          |                | <p>自定义的请求函数</p>         |

## 返回

<code>Array.&lt;any&gt;</code> - <p>请求完成后的数据数组</p>

## 示例 _(ts类型)_

```typescript
fetchAll(tasks: AnyArray, maxConcurrency: number, requestFn: AnyFunction);
```

## 示例 _(demo)_

```typescript
import { fetchAll } from '@zpcscc/utils';

// 自定义的任务列表；任意数组类型；
const tasks = [
  { url: 'https://example.com/1' },
  { url: 'https://example.com/2' },
  { url: 'https://example.com/3' },
  { url: 'https://example.com/4' },
  { url: 'https://example.com/5' },
  { url: 'https://example.com/6' },
  { url: 'https://example.com/7' },
  { url: 'https://example.com/8' },
  { url: 'https://example.com/9' },
  { url: 'https://example.com/0' }
];
// 自定义的请求函数
const requestFn = (taskItem) => fetch(taskItem.url).then((response) => response.text());
// 并发请求对应的数据
const results = await fetchAll(tasks, 3, requestFn);
```
