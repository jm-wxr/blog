# Web 开发者转 HarmonyOS

## 前言

本文面向拥有 Web 开发经验、熟悉 HTML 和 CSS 的人员。通过 HTML/CSS 和 HarmonyOS/ArkUI 代码之间的对比，能让你更快速的上手 HarmonyOS 的应用开发。

## 编程语言

ArkTS 是 HarmonyOS 优选的主力应用开发语言。ArkTS 围绕应用开发在[TypeScript](https://www.typescriptlang.org/)（简称 TS）生态基础上做了进一步扩展，保持了 TS 的基本风格，同时通过规范定义强化开发期静态检查和分析，提升程序执行稳定性和性能。

如果你有 JavaScript 的基础，要了解 TypeScript 和 JavaScript 语言的区别，请参阅[为 JavaScript 程序员准备的 TypeScript](https://www.typescriptlang.org/zh/docs/handbook/typescript-in-5-minutes.html)。

如果你有 TypeScript 的基础，要了解 ArkTS 语言和 TypeScript 语言的区别，请参阅[从 TypeScript 到 ArkTS 的适配规则](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/quick-start/typescript-to-arkts-migration-guide.md)。

## UI 框架

HarmonyOS 采用的 UI 框架是方舟开发框架（ArkUI 框架），方舟开发框架为开发者提供了两种开发范式，分别是基于 ArkTS 的声明式开发范式（简称“声明式开发范式”）和兼容 JS 的类 Web 开发范式（简称“类 Web 开发范式”）。本文只考虑声明式开发范式这一种开发范式。

注意：

- 以下示例均假设将所有的 HTML 元素的 CSS 盒子模型都设置为`border-box`，以便与 ArkUI 保持一致
  ```css
  * {
    box-sizing: border-box;
  }
  ```
- 在下面 ArkUI 的示例中默认将单位省略。ArkUI 采用 vp 为基准数据单位，在实际宽度为 1440 物理像素的屏幕上，1vp 约等于 3px。

## 基本布局操作

### 设置文本样式、文本对齐方式

![image](/image/article/01.png)

对于 css 使用`font`和`color`设置文字样式、大小等，Text 组件（ArkUI 中构建 UI 的最小单位称为组件）的[文本通用属性](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md)可以达到同样的效果。

对于 css 使用`text-align`来对齐文本，Text 组件的`textAlign`属性可以达到同样的效果。

```html{5-7}
<p class="blue-text">蓝色文字</p>

<style>
.blue-text {
  font: 900 24px Tahoma;
  color: blue;
  text-align: center;
}
</style>
```

```tsx {2-7}
Text("蓝色文字")
  .fontSize(24)
  .fontColor(Color.Blue)
  // 当前仅支持’HarmonyOS Sans’字体
  .fontFamily("Tahoma")
  .fontWeight(FontWeight.Bolder)
  .textAlign(TextAlign.Center);
```

### 设置尺寸大小和背景颜色

![image](/image/article/02.png)

使用`width`和`height`属性来设置组件的固定宽高。如果要约束组件的宽高，请使用`constraintSize`属性来实现。

使用`backgroundColor` 属性来设置背景颜色。

在CSS和ArkUI的Flex布局（弹性布局）中，子元素或子组件默认锚定在左上角。

```html{5-7}
<div class="red-box">这是个红色盒子</div>

<style>
.red-box {
  width: 300px;
  height: 180px;
  background-color: red;
}
</style>
```

```tsx{4-6}
Flex() {
  Text('这是个红色盒子')
}
.width(300)
.height(180)
.backgroundColor(Color.Red)
```

### 设置线性渐变

![image](/image/article/04.png)
对于渐变颜色，可以使用`linearGradient` 属性，其中`angle`为渐变角度（默认值为180，垂直向下），`colors`为数组，每个数组项表示某百分比位置处的渐变色颜色。详细设置见[颜色渐变](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-universal-attributes-gradient-color.md)

对于CSS的row方向的Flex布局，在ArkUI可以用Row布局（线性布局）来代替，子组件默认侧轴居中。

```html{8-11}

<div class="red-box">这是个渐变盒子</div>

<style>
.red-box {
  width: 300px;
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(180deg, red, yellow 80%);
}
</style>
```

```tsx{1,3,6}
Row() {
  Text('这是个渐变盒子')
}
.width(300)
.height(180)
.linearGradient({ angle: 180, colors: [[Color.Red, 0],[Color.Yellow, 0.8]] })
```

### 设置对齐方式

![image](/image/article/03.png)

在 ArkUI 中，通过给 Flex 容器（弹性布局容器）传入参数`justifyContent`和`alignItems`来实现子组件的对齐格式。对于 Row 和 Column 容器（线性布局容器），设置其属性`justifyContent`和`alignItems`来实现。更多布局见[布局概述](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/ui/arkts-layout-development-overview.md)

```html{8-10}
<div class="red-box">这是个红色盒子</div>

<style>
.red-box {
  width: 300px;
  height: 180px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

```tsx{2-3}
Flex({
  justifyContent: FlexAlign.Center,
  alignItems: ItemAlign.Center
}) {
  Text('这是个红色盒子')
}
.width(300)
.height(180)
.backgroundColor(Color.Red)
```

## 组件位置和大小

### 设置绝对位置
