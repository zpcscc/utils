# 创建一个节流函数

## 参数

| 参数名             | 类型                     | 默认值            | 描述                                                                                |
| ------------------ | ------------------------ | ----------------- | ----------------------------------------------------------------------------------- |
| func               | <code>AnyFunction</code> |                   | <p>传入一个需要节流的函数</p>                                                       |
| [wait]             | <code>number</code>      | <code>0</code>    | <p>要限制对的调用的毫秒数；如果省略，则使用“requestAnimationFrame”（如果可用）.</p> |
| [options]          | <code>Object</code>      | <code>{}</code>   | <p>配置选项</p>                                                                     |
| [options.leading]  | <code>boolean</code>     | <code>true</code> | <p>指定在超时的前沿调用。</p>                                                       |
| [options.trailing] | <code>boolean</code>     | <code>true</code> | <p>指定在超时的后沿调用。</p>                                                       |

## 返回

<code>AnyFunction</code><p>返回新的节流函数.</p>
