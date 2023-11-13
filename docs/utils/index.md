---
nav:
  title: 工具函数
  order: 0
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
  return <h1>当前已有 {Object.keys(utils || {}).length - 1} 个函数</h1>;
};
```

Tip：所有函数与方法都已绑定到了全局的window上。可直接在浏览器控制台调用这些函数进行预览与测试。
