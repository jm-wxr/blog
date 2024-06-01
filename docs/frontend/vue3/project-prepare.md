# 项目准备

::: tip
npm/pnpm 全局安装用 -g ，项目下安装用 -D
:::

## pnpm

包管理器 [链接](https://www.pnpm.cn/)

::: tip
完成后将 `npm` 命令改为 `pnpm`
:::

**通过 npm 安装 pnpm**

我们提供了两个 pnpm CLI 包 `pnpm` 和 `@pnpm/exe` .

1. [pnpm](https://www.npmjs.com/package/pnpm) 是 pnpm 的普通版本，需要 Node.js 来运行。
2. [@pnpm/exe](https://www.npmjs.com/package/@pnpm/exe) 与 Node.js 一起打包成可执行文件，因此可以在未安装 Node.js 的系统上使用。

```bash
npm install -g pnpm
# 或者
npm install -g @pnpm/exe
```

## ESLint&prettier

代码检查、配置代码风格

### 前提条件

1. 安装了插件 ESlint，开启保存自动修复
2. 禁用了插件 Prettier，并关闭保存自动格式化

### 设置 vscode

::: details
vscode 的工作区`settings.json`

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
  }
  // 禁用 vue 的默认格式化器
  // "[vue]": {
  //   "editor.defaultFormatter": "Vue.volar"
  // }
}
```

:::

### 下载插件

`eslint-config-prettier` + `eslint-plugin-prettier`

```html
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

### 配置文件

`.eslintrc.cjs`
::: details

- 添加拓展插件

```jsx
extends: [
  ...
  'plugin:prettier/recommended',
],
```

- 配置规则

```jsx
rules: {
  'prettier/prettier': [
    'warn',
    {
      printWidth: 100, //单行长度
      tabWidth: 2, //缩进长度
      useTabs: false, //使用空格代替tab缩进
      semi: false, //句末使用分号
      singleQuote: true, //使用单引号
      quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
      jsxSingleQuote: true, // jsx中使用单引号
      trailingComma: 'none', //多行时尽可能打印尾随逗号
      bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
      jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
      arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
      requirePragma: false, //无需顶部注释即可格式化
      insertPragma: false, //在已被preitter格式化的文件顶部加上标注
      proseWrap: 'preserve', //不知道怎么翻译
      htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
      vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
      endOfLine: 'auto', //结束行形式
      embeddedLanguageFormatting: 'auto' //对引用代码进行格式化
    },
    {
      usePrettierrc: false // 在不加载 prettierrc 配置文件的情况下运行 prettier
    }
  ],
  'vue/multi-word-component-names': [
    'warn',
    {
      ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
    }
  ],
  'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验
  // 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭。
  'no-undef': 'error'
}
```

- 声明全局变量名

```jsx
globals: {
  ElMessage: 'readonly',
  ElMessageBox: 'readonly',
  ElLoading: 'readonly'
}
```

:::

::: info
[ESlint 与 Prettier 配置指南](https://juejin.cn/post/7050127881371910152)

[esling 和 prettier 冲突](https://juejin.cn/post/7012160233061482532)
:::

## husky

Git 提交或推送时运行测试(Git 钩子) [链接](https://typicode.github.io/husky/)

### 基本使用

::: tip
先进行 git 仓库的初始化`git init`
:::

自动检查您的提交消息、代码，并在提交或推送时运行测试。

```bash
# 安装
# npm install --save-dev husky
pnpm add --save-dev husky

# husky初始化 (推荐)
# npx husky init
pnpm exec husky init

# 尝试一下
git commit -m "Keep calm and commit"
# test script will run every time you commit
```

_有关手动设置和更多信息，请参见“[**How To**](https://typicode.github.io/husky/how-to.html)”部分。_

### 代码检查

- 提交前对所有文件进行 eslint 检查（不推荐）

  在`.husky/pre-commit` 文件中添加一行

  ```bash
  pnpm lint
  ```

- 暂存区 eslint 校验（只校验暂存区的文件，更常用）

  安装 `lint-staged` 包

  ```bash
  pnpm add lint-staged -D
  ```

  `package.json` 配置 lint-staged 命令

  ```json
    "scripts": {
  	  ...
  	  "lint-staged": "lint-staged"
    },
    ...
    "lint-staged": {
      "*.{js,ts,vue}": [
        "eslint --fix"
      ]
    }
  ```

  `.husky/pre-commit` 文件修改

  ```json
  pnpm lint-staged
  ```

## commitlint&commitizen&changelog

提交规范和更新日志 [链接](https://commitlint.js.org/)&[链接](https://commitizen-tools.github.io/commitizen/)&[链接](https://www.npmjs.com/package/conventional-changelog)

::: tip
完成后新增命令`git cz` 、`pnpm changelog`
:::

### commitlint

::: tip

- 官方指南有点问题
- 在只使用 commitizen 进行提交时，可以不配置这个
  :::

::: details

```bash
**# 安装commitlint**
pnpm add @commitlint/cli @commitlint/config-conventional -D

**# 配置**
echo module.exports = { extends: ["@commitlint/config-conventional"] } > .commitlintrc.cjs

**# 添加钩子**
# 已安装husky可以忽略下面两条
pnpm add --save-dev husky
pnpm husky init
echo pnpm dlx commitlint --edit $HUSKY_GIT_PARAMS > .husky/commit-msg
# 作为一种替代方法，你可以在package.json中创建
pnpm pkg set scripts.commitlint="commitlint --edit"
echo pnpm commitlint $HUSKY_GIT_PARAMS > .husky/commit-msg

**# 测试**
# 检查上一次提交
npx commitlint --from HEAD~1 --to HEAD --verbose
# 测试错误提交
git commit -m "foo: this will fail"
# 测试正确提交
git commit -m "chore: lint on commitmsg" --verbose
```

:::

::: info
[type-enum](https://commitlint.js.org/reference/rules.html#type-enum)

[subject-case](https://commitlint.js.org/reference/rules.html#subject-case)
:::

::: details
`.commitlintrc.cjs`文件中

```tsx
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // type 类型定义 和 cz-config中的对应
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能 feature
        "fix", // 修复 bug
        "docs", // 文档注释
        "style", // 代码格式(不影响代码运行的变动)
        "refactor", // 重构(既不增加新功能，也不是修复bug)
        "perf", // 性能优化
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回退
        "build", // 打包
      ],
    ],
    // subject 大小写不做校验
    // 自动部署的BUILD ROBOT的commit信息大写，以作区别
    "subject-case": [0],
  },
};
```

:::

### commitizen

```bash
**# 全局安装commitizen**
pnpm add commitizen -g

**#** **在项目目录里，运行下面的命令，使其支持 Angular 的 Commit message 格式**
commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact

# 以后，凡是用到git commit命令，一律改为使用git cz
git cz
```

::: details

```tsx
// 安装cz-customizable
pnpm add cz-customizable -D

// 修改package.json
"config": {
  "commitizen": {
    "path": "node_modules/cz-customizable"
  },
  "cz-customizable": {
    "config": "./.cz-config.ts"
  }
}
```

cz-customizable 使用时会跳过 customScope，替换方案如下：

```tsx
// install cz-custom
pnpm add cz-custom -D

// modify package.json
"config": {
  "commitizen": {
    "path": "cz-custom"
  },
  "cz-custom": {
    "config": ".cz-config.ts"
  }
}
```

:::

[cz-config 示例](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)

::: details
项目目录下创建 `.cz-config.ts` 文件

```tsx
module.exports = {
  types: [
    { value: "feat", name: "feat:     新功能" },
    { value: "fix", name: "fix:      修复" },
    { value: "docs", name: "docs:     文档变更" },
    {
      value: "style",
      name: "style:    不影响代码含义的更改\n            (空白、格式化、缺少分号等)",
    },
    {
      value: "refactor",
      name: "refactor: 既不修复bug也不增加特性的代码更改",
    },
    { value: "perf", name: "perf:     性能优化" },
    { value: "test", name: "test:     增加测试" },
    {
      value: "chore",
      name: "chore:    对构建过程或辅助工具\n            和库(如文档生成)的更改",
    },
    { value: "revert", name: "revert:   回退到一个提交记录" },
    { value: "build", name: "build:    打包" },
  ],
  // scope的选项
  scopes: [{ name: "empty" }, { name: "custom" }],
  // 覆盖消息，默认值如下：
  messages: {
    type: "请选择提交类型:",
    scope: "请选择修改范围(可选):",
    // 当allowCustomScopes为true时使用
    customScope: "请输入修改范围 (可选，默认为custom):",
    subject: "请简要描述提交 (必填):",
    body: "请输入详细描述 (跳过即可):",
    breaking: "列出任何破坏性更改 (可选):\n",
    footer: "请输入要关闭的issue (跳过即可):",
    confirmCommit: "确认使用以上信息提交？(y/n/e/h)",
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // 跳过你想跳过的问题
  skipQuestions: ["body", "footer"],
  // 限制提交信息长度, commitlint默认是72
  subjectLimit: 72,
};
```

:::

### changelog

```json
// **全局安装**changelog
pnpm add conventional-changelog-cli -g

// 在package.json中加入配置方便使用
"scripts": {
  "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}

// 运行changelog脚本，生成CHANGELOG.md文件
pnpm changelog
```

::: info 参考

[Commit message 和 Change log 编写指南 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

[Git Commit 提交规范](https://juejin.cn/post/7349041579276566554?searchId=202405191653598EF9B795D63019D46996)

[规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)

[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
:::

## 自动按需加载

安装`unplugin-vue-components`  和  `unplugin-auto-import`这两款插件

```tsx
pnpm add unplugin-vue-components unplugin-auto-import -D
```

然后把下列代码插入到你的  `Vite`  或  `Webpack`  的配置文件中

**Vite**

```tsx
// vite.config.ts
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
// 其中 ElementPlusResolver 替换成当前使用的组件库
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
```

## pinia-plugin-persistedstate

https://prazdevs.github.io/pinia-plugin-persistedstate/zh/

Pinia 的持久化存储插件

**安装**

1. 用你喜欢的包管理器安装依赖：

```bash
#npm
npm i pinia-plugin-persistedstate

#pnpm
pnpm i pinia-plugin-persistedstate
```

2. 将插件添加到 pinia 实例上

```jsx
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
```

**用法**

创建 Store 时，将  `persist`  选项设置为  `true`。

```jsx
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore(
  "main",
  () => {
    const someState = ref("你好 pinia");
    return { someState };
  },
  {
    persist: true,
  }
);
```

## Axios

::: details

```jsx
import axios from "axios";

const baseURL = "<请求基地址>";

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
```

:::

## 可选

### ElementPlus 图标库

[链接](https://element-plus.org/zh-CN/component/icon.html)

```bash
pnpm i @element-plus/icons-vue
```

### 移动端适配

[postcss-px-to-viewport-8-plugin 插件](https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin)

### 打包 SVG 图标组件

[参考文档](https://github.com/vbenjs/vite-plugin-svg-icons)

- 安装

```bash
yarn add vite-plugin-svg-icons -D
# or
npm i vite-plugin-svg-icons -D
# or
pnpm install vite-plugin-svg-icons -D
```

- `vite.config.ts` 中的配置插件

```bash
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default () => {
  return {
    plugins: [
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',

        /**
         * 自定义插入位置
         * @default: body-last
         */
        inject?: 'body-last' | 'body-first'

        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__',
      }),
    ],
  }
}
```

- 在`src/main.ts`中引入注册脚本

```tsx
import "virtual:svg-icons-register";
```

- `/src/components/SvgIcon.vue`

```tsx
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  prefix: { type: String, default: 'icon' },
  name: { type: String },
  color: { type: String, default: '#000' }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

```

::: tip
有些图标可以根据 style 中  `color`  的值来设置颜色，图标是否有这个功能取决于 UI 做图片时否开启。
:::

- icons 目录结构

```
# src/icons

- icon1.svg
- icon2.svg
- icon3.svg
- dir/icon1.svg
```

- 使用

```tsx
<template>
  <div>
	  // 可以提供 prefix 和 color 属性
    <SvgIcon name="icon1"></SvgIcon>
    <SvgIcon name="icon2"></SvgIcon>
    <SvgIcon name="icon3"></SvgIcon>
    <SvgIcon name="dir-icon1"></SvgIcon>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

import SvgIcon from './components/SvgIcon.vue'
export default defineComponent({
  name: 'App',
  components: { SvgIcon },
})
</script>
```

- 类型  `types/components.d.ts`

```tsx
import SvgIcon from "@/components/SvgIcon.vue";

declare module "vue" {
  interface GlobalComponents {
    SvgIcon: typeof SvgIcon;
  }
}
```

### 加载进度插件

- 安装

```bash
pnpm add nprogress
pnpm add @types/nprogress -D
```

- 导入

```tsx
import NProgress from "nprogress";
import "nprogress/nprogress.css";
```

- 使用

```tsx
// 配置
NProgress.configure({ showSpinner: false });
// 开始加载
NProgress.start();
// 加载完毕
NProgress.done();
```

- 样式修改

```scss
// 颜色修改
#nprogress .bar {
  background-color: var(--cp-primary) !important;
}
```

## 其他

### Vue.js devtools

浏览器插件 [链接](https://chromewebstore.google.com/detail/vuejs-devtools/iaajmlceplecbljialhhkmedjlpdblhp?hl=zh-CN&utm_source=ext_sidebar)

国内下载 [链接](https://chrome.zzzmh.cn/)

### vite-plugin-vue-setup-extend

使 vue 脚本设置语法支持 name 属性，简化组件名字的写法 [链接](https://github.com/vbenjs/vite-plugin-vue-setup-extend)

```bash
npm i vite-plugin-vue-setup-extend -D
```

`vite.config.ts`

```tsx
import { defineConfig } from "vite";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

export default defineConfig({
  plugins: [VueSetupExtend()],
});
```

```tsx
<script setup lang="ts" name="Person">
```

### ref 自动插入.value

进入 vscode 设置

搜索 auto insert

`Auto Inset: Dot Value` 选项打勾

### nanoid

生成唯一 id [链接](https://github.com/ai/nanoid)

```
npm i nanoid
```
