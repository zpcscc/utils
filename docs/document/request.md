---
nav:
  title: 文档
  order: 1
title: 请求
---

# 通用请求库

拦截了 error，对 error 的数据做了处理。用于统一全局请求报错。

```js
import { request } from '@dxsixpc/utils';

interface ErrorMessageType {
  error: AxiosError;
  // 默认返回信息
  response?: AxiosResponse<any>;
  // 状态码
  status?: keyof typeof codeMessage;
  // 报错返回的提示内容
  message: string;
  // 自定义状态码提示
  codeMessage: string;
  // 系统默认状态码提示
  statusText?: string;
}

request
  .get('url')
  .then(resolve)
  .catch((error:ErrorMessageType) => reject(error));
```
