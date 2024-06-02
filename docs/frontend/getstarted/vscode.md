# VS Code 使用

## 扩展

### 扩展下载

`Chinese`汉化

`Error Lens`错误提示

`GitLens` git 提示

`One Dark Pro`记得点击设置颜色主题

`Live Server`代码与浏览器同步

`Clipboard History` 剪贴板历史记录

`Comment Translate` 注释翻译

`Google Translate` 谷歌翻译

`Monokai Pro` 主题

`open in browser` 从浏览器打开

`Element Plus` Element Plus 代码片段

`ESLint` ESLint 集成

`Live Sass Compiler` 实时编译 Scss 到 CSS

`Vue VSCode Snippets` vue3 代码片段

### **AI 扩展**

`Copilot` VSCode 官方 AI

`TONGYI Lingma` 通义灵码

`Geex`

### Copilot 激活

==

★★★★★★Copilot 激活新版 ★★★★★★

使用教程：https://www.kdocs.cn/l/clHzGboXhYOG

授权码：928A2336-42BE-43DE-8907-6314F6A04F57

==

## 设置相关

### 配置文件（工作区）

::: details

```json
{
  // 设置编辑器的默认格式化程序
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 设置特定语言的默认格式化程序为prettier
  //   "[javascript]": {
  //     "editor.defaultFormatter": "esbenp.prettier-vscode"
  //   },
  // 保存时自动格式化
  "editor.formatOnSave": false,
  // 设置特定语言在保存时自动格式化
  //   "[javascript]": {
  //     "editor.formatOnSave": true
  //   }
  // ESlint自动格式化修复
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
    // "source.fixAll.eslint": "explicit"
  },
  "[snippets]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "liveServer.settings.multiRootWorkspaceName": "Vue3-big-event-admin",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // 禁用 vue 的默认格式化器
  // "[vue]": {
  //   "editor.defaultFormatter": "Vue.volar"
  // }
  // 添加emmet支持vue文件
  "emmet.includeLanguages": {
    "vue-html": "html",
    "vue": "html"
  }
}
```

:::

### 添加 emmet 支持 vue 文件

设置中搜索 emmet:includeLanguages，编辑 setting

```json
"emmet.includeLanguages": {
  "vue-html": "html",
  "vue": "html"
}
```

## 快捷键

### 配置文件

::: details

```json
// 将键绑定放在此文件中以覆盖默认值
[
  {
    "key": "win+keyincomposition",
    "command": "workbench.action.terminal.toggleTerminal",
    "when": "terminal.active"
  },
  {
    "key": "ctrl+oem_3",
    "command": "-workbench.action.terminal.toggleTerminal",
    "when": "terminal.active"
  },
  {
    "key": "win+oem_3",
    "command": "workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+backspace",
    "command": "editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+k",
    "command": "-editor.action.deleteLines",
    "when": "textInputFocus && !editorReadonly"
  },
  {
    "key": "ctrl+l",
    "command": "editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    "key": "shift+alt+f",
    "command": "-editor.action.formatDocument",
    "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
  },
  {
    "key": "ctrl+l",
    "command": "editor.action.formatDocument.none",
    "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
  },
  {
    "key": "shift+alt+f",
    "command": "-editor.action.formatDocument.none",
    "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
  },
  {
    "key": "ctrl+shift+up",
    "command": "editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+up",
    "command": "-editor.action.moveLinesUpAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+shift+down",
    "command": "editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "alt+down",
    "command": "-editor.action.moveLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+d",
    "command": "editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+down",
    "command": "-editor.action.copyLinesDownAction",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+q",
    "command": "editor.action.smartSelect.expand",
    "when": "editorTextFocus"
  },
  {
    "key": "shift+alt+right",
    "command": "-editor.action.smartSelect.expand",
    "when": "editorTextFocus"
  },
  {
    "key": "shift+enter",
    "command": "editor.action.insertLineAfter",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+enter",
    "command": "-editor.action.insertLineAfter",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+u",
    "command": "editor.action.transformToUppercase"
  },
  {
    "key": "alt+g",
    "command": "editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+d",
    "command": "-editor.action.addSelectionToNextFindMatch",
    "when": "editorFocus"
  },
  {
    "key": "ctrl+g",
    "command": "editor.action.changeAll",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+f2",
    "command": "-editor.action.changeAll",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+e",
    "command": "cursorEnd",
    "when": "textInputFocus"
  },
  {
    "key": "end",
    "command": "-cursorEnd",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+e",
    "command": "lastCompressedFolder",
    "when": "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedLastFocus && !inputFocus"
  },
  {
    "key": "end",
    "command": "-lastCompressedFolder",
    "when": "explorerViewletCompressedFocus && filesExplorerFocus && foldersViewVisible && !explorerViewletCompressedLastFocus && !inputFocus"
  },
  {
    "key": "ctrl+w",
    "command": "cursorHome",
    "when": "textInputFocus"
  },
  {
    "key": "home",
    "command": "-cursorHome",
    "when": "textInputFocus"
  },
  {
    "key": "ctrl+shift+oem_2",
    "command": "editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "shift+alt+a",
    "command": "-editor.action.blockComment",
    "when": "editorTextFocus && !editorReadonly"
  },
  {
    "key": "ctrl+1",
    "command": "workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "ctrl+b",
    "command": "-workbench.action.toggleSidebarVisibility"
  },
  {
    "key": "ctrl+left",
    "command": "workbench.action.previousEditor"
  },
  {
    "key": "ctrl+pageup",
    "command": "-workbench.action.previousEditor"
  },
  {
    "key": "ctrl+right",
    "command": "workbench.action.nextEditor"
  },
  {
    "key": "ctrl+pagedown",
    "command": "-workbench.action.nextEditor"
  },
  {
    "key": "ctrl+k ctrl+l",
    "command": "editor.foldAll",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "ctrl+k ctrl+0",
    "command": "-editor.foldAll",
    "when": "editorTextFocus && foldingEnabled"
  },
  {
    "key": "ctrl+k ctrl+l",
    "command": "-editor.toggleFold",
    "when": "editorTextFocus && foldingEnabled"
  }
]
```

:::

`切换终端`Win+`

`格式化代码` Ctrl+L

`删除行` Ctrl+Backspace

`转换为大写` Ctrl+U

`向下复制行` Ctrl+D

`cursorEnd(光标移动到行尾)` Ctrl+E

`cursorHome(光标移动到行首)` Ctrl+W

`光标移动到下一个单词` Ctrl+→

`在下面插入行` Shift+Enter

`在上面插入行` Ctrl+Enter

`将下一个匹配项加入选择`Alt+G

`展开选择` Ctrl+Q

`更改所有匹配项` Ctrl+G

`全部折叠` Ctrl+K Ctrl+L

`全部展开` Ctrl+K Ctrl+J

`切换主侧栏可见性` Ctrl+1

`最近的文件` Ctrl+3

`显示方法的参数列表信息（光标在括号内）` Ctrl+I

`自动生成环绕性质的代码` Ctrl+T

`切换行注释` Ctrl+/

`切换块注释` Ctrl+Shift+/

`切换折叠` Ctrl+.

`打开上/下一个编辑器` Ctrl+←/→

`返回/前进` Ctrl+Alt+←/→

`新建窗口` Ctrl+Shift+N

`文件: 新的无标题文本文件` Ctrl+N

## 代码片段

### typescript

::: details

```json
{
  "打印到控制台": {
    "prefix": "log",
    "body": ["console.log($1)"],
    "description": "Log output to console"
  },
  "Create Pinia Store": {
    "prefix": "pinia",
    "body": [
      "import { createPinia } from 'pinia';",
      "import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';",
      "",
      "const pinia = createPinia();",
      "pinia.use(piniaPluginPersistedstate);",
      "",
      "export default pinia;",
      "",
      "export * from '${1:path}';"
    ],
    "description": "Create a Pinia store with persisted state"
  }
}
```

:::

### vue

::: details

```json
{
  "vue3代码模版": {
    "prefix": "vue3",
    "body": [
      "<script setup lang=\"ts\">",
      "$2",
      "</script>",
      "",
      "<template>",
      "  <div>",
      "    $1",
      "  </div>",
      "</template>",
      "",
      "<style lang=\"scss\" scoped>",
      "",
      "</style>"
    ],
    "description": "vue3代码模版"
  },
  "script-setup": {
    "prefix": "script-setup",
    "body": ["<script setup name=\"$1\">", "$2", "</script>"],
    "description": "script-setup"
  }
}
```

:::

## 字体推荐

[JetBrains Mono](https://github.com/JetBrains/JetBrainsMono)：由JetBrains公司专为开发者设计的一款等宽编程字体

::: info
[最适合程序员的编程字体，好看、优雅！](https://mp.weixin.qq.com/s/_1UrM0QYCpiOakTwosbAYA)
:::
