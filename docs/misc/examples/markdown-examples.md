# Markdown 扩展示例

这个页面展示了一些由 VitePress 提供的内置 markdown 扩展。

## 语法高亮显示

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki) 支持的语法高亮显示，并具有行高亮显示等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**输入**

```md
::: info
这是一个 info.
:::

::: tip
这是一个 tip.
:::

::: warning
这是一个 warning.
:::

::: danger
这是一个 dangerous warning.
:::

::: details
这是一个 details block.
:::
```

**输出**

::: info
这是一个 info.
:::

::: tip
这是一个 tip.
:::

::: warning
这是一个 warning.
:::

::: danger
这是一个 dangerous warning.
:::

::: details
这是一个 details block.
:::

## 更多

查看文档以获得[markdown 扩展的完整列表](https://vitepress.dev/guide/markdown).
