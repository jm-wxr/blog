---
outline: deep
---

# Runtime API 示例

这个页面演示了一些由 VitePress 提供的运行时 api 的用法。

主要的 API `useData()` 可用于访问当前页面的站点、主题和页面数据。这适用于 `.md` 和 `.vue` 两个文件：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

### Theme 数据

<pre>{{ theme }}</pre>

### Page 数据

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## 更多

查看文档以获得[运行时 api 的完整列表](https://vitepress.dev/reference/runtime-api#usedata).
