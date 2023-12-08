# 版本号排序

## 参数

| 参数名 | 类型                              | 描述                        |
| ------ | --------------------------------- | --------------------------- |
| data   | <code>Array.&lt;string&gt;</code> | <p>需要排序的版本号数组</p> |

## 返回

<code>Array.&lt;string&gt;</code> - <p>从小到大排序过后的数组</p>

## 示例 _(ts类型)_

```typescript
sortVersions(data:string[])
```

## 示例 _(demo)_

```typescript
import { sortVersions } from '@zpcscc/utils';

const beforeSort = [
  '1.2.1',
  '1.1.1',
  '1.1.1-release.2',
  '1.1.1-alpha.10',
  '1.1.1-release.1',
  '1.1.1-beta.1',
  '1.1.1-experimental.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.2-alpha.1'
];

console.log(removeTag('<p>Hello World!</p>')); // afterSort

const afterSort = [
  '1.1.1-experimental.1',
  '1.1.1-alpha.10',
  '1.1.1-beta.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.1-release.1',
  '1.1.1-release.2',
  '1.1.1',
  '1.1.2-alpha.1',
  '1.2.1'
];
```
