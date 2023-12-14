---
nav:
  title: 工具函数
  order: 1
title: 简介
---

# 简介

零依赖的通用工具函数库

```jsx
/**
 * inline: true
 */
import React from 'react';
import * as utils from '@zpcscc/utils';

export default () => {
  const funArr = Object.keys(utils || {}).filter((item) =>
    utils.getType(utils[item]).includes('Function')
  );
  return <h1>当前已有 {funArr.length} 个函数</h1>;
};
```

Tip：所有函数与方法都已绑定到了全局的window上。可直接在浏览器控制台调用这些函数进行测试。

<code src="../index.tsx" compact inline></code>
