# 数据校验

## 参数

| 参数名 | 类型                      | 描述                  |
| ------ | ------------------------- | --------------------- |
| data   | <code>any</code>          | <p>需要校验的数据</p> |
| type   | <code>ValidateType</code> | <p>需要校验的类型</p> |

## 返回

<code>boolean</code><p>返回校验的结果, 默认返回 false</p>

## 示例

### ts类型

```typescript
sortVersions(data:string[])
```

### demo

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
