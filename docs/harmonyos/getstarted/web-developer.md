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

![image](/image/article/03.png)
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

![image](/image/article/04.png)

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

### 绝对位置

![image](/image/article/05.png)

默认情况下，组件相对于其父组件进行定位。

将组件作为布局组件(这里以[Stack](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-container-stack.md)为例)的子组件，来设置其绝对位置，在`position`属性中指定`x`和`y`的坐标确定位置。

```html{7,15-17}
<div class="blue-box">
  <div class="red-box">这是个红色盒子</div>
</div>

<style>
.blue-box {
  position: relative;
  background-color: #0000ff;
  width: 320px;
  height: 240px;
  font: 900 24px Roboto;
}

.red-box {
  position: absolute;
  top: 24px;
  left: 24px;
  background-color: red;
  padding: 16px;
  color: #ffffff;
}
</style>
```

```tsx{9}
Stack() {
  Row() {
    Text('这是一个红色盒子')
      .fontColor('#ffffff')
      .fontSize(24)
      .fontWeight(900)
      .fontFamily('Roboto')
  }
  .position({x: 24, y : 24})
  .backgroundColor(Color.Red)
  .padding(16)
}
.backgroundColor('#0000ff')
.width(320)
.height(240)
```

### 旋转

![image](/image/article/06.png)

在组件的`rotate`属性中指定angle的值来设置其旋转角度（顺时针）。详细设置见[RotateOptions](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#rotateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E)

```html{19}
<div class="blue-box">
  <div class="red-box">这是个红色盒子</div>
</div>

<style>
.blue-box {
  background-color: #0000ff;
  width: 320px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.red-box {
  background-color: red;
  padding: 16px;
  color: #ffffff;
  transform: rotate(15deg);
}
</style>
```

```tsx{11}
Flex({
  alignItems: ItemAlign.Center,
  justifyContent: FlexAlign.Center
}) {
  Row() {
    Text('这是一个红色盒子')
      .fontColor('#ffffff')
  }
  .backgroundColor(Color.Red)
  .padding(16)
  .rotate({angle: 15})
}
.backgroundColor('#0000ff')
.width(320)
.height(240)
```

### 缩放

![image](/image/article/07.png)

在组件的`scale`属性中指定`x`和`y`的值来设置相应轴的缩放比例。详细设置见[ScaleOptions](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#scaleoptions对象说明)

```html{12}
<div class="blue-box">
  <div class="red-box">这是个红色盒子</div>
</div>

<style>
.blue-box {
  /* ... */
}

.red-box {
  /* ... */
  transform: scale(1.5);
}
</style>
```

```tsx{8}
Flex({
	// ...
}) {
  Row() {
    Text('这是一个红色盒子')
  }
  // ...
  .scale({x: 1.5, y: 1.5})
}
// ...
```

### 平移

![image](/image/article/08.png)

在组件的`translate`属性中指定`x`和`y`的值来设置相应轴的平移距离。详细设置见[TranslateOptions](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#translateoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E)

```html{12}
<div class="blue-box">
  <div class="red-box">这是个红色盒子</div>
</div>

<style>
.blue-box {
  /* ... */
}

.red-box {
  /* ... */
  transform: translate(20px, 20px);
}
</style>
```

```tsx{8}
Flex({
	// ...
}) {
  Row() {
    Text('这是一个红色盒子')
  }
  // ...
  .translate({x: 20, y: 20})
}
// ...
```

## 组件边框形状

### 圆角

![image](/image/article/09.png)

要设置组件的圆角，可以使用`borderRadius`属性，传入一个值，来指定每个角的圆角半径。如果你想单独设置每个角，请查阅[BorderRadiuses](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-border-0000001815767716#ZH-CN_TOPIC_0000001815767716__borderradiuses9%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E)

```html{12}
<div class="blue-box">
  <div class="red-box">这是个红色盒子</div>
</div>

<style>
.blue-box {
  /* ... */
}

.red-box {
  /* ... */
  border-radius: 12px;
}
</style>
```

```tsx{8}
Flex({
	// ...
}) {
  Row() {
    Text('这是一个红色盒子')
  }
  // ...
  .borderRadius(12)
}
// ...
```

### 边框阴影

![image](/image/article/10.png)

组件的`shadow`属性可以设置边框的阴影，阴影的每个属性都是单独设置，其`offsetX`、`offsetY`、`radius`、`color`分别表示X轴偏移量、Y轴偏移量、阴影半径、阴影颜色，由于前三个属性的单位为px，你可能需要用[vp2px](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-pixel-units-0000001862607537#ZH-CN_TOPIC_0000001862607537__%E5%83%8F%E7%B4%A0%E5%8D%95%E4%BD%8D%E8%BD%AC%E6%8D%A2)进行单位转换。详细设置见[ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect-0000001862607345#ZH-CN_TOPIC_0000001862607345__shadowoptions%E5%AF%B9%E8%B1%A1%E8%AF%B4%E6%98%8E)

除了设置每一个阴影属性，还可以只设置阴影样式。具体设置见[ShadowStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-image-effect-0000001862607345#ZH-CN_TOPIC_0000001862607345__shadowstyle10%E6%9E%9A%E4%B8%BE%E8%AF%B4%E6%98%8E)

```html{13}
<div class="gray-box">
  <div class="red-box">这是个红色盒子</div>
</div>

<style>
.gray-box {
	background-color: gray;
  /* ... */
}

.red-box {
  /* ... */
  box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.8);
}
</style>
```

```tsx{8-14}
Flex({
	// ...
}) {
  Row() {
    Text('这是一个红色盒子')
  }
  // ...
	.shadow({
    offsetX: vp2px(4),
    offsetY: vp2px(6),
    radius: vp2px(20),
    color: 'rgba(0, 0, 0, 0.8)',
  })
  // .shadow(ShadowStyle.OUTER_DEFAULT_LG)
}
.backgroundColor(Color.Grey)
// ...
```

### 圆形和**椭圆形（胶囊形）**

![image](/image/article/11.png)

对于CSS，将矩形的border-radius设置为50%就可以得到一个圆形或椭圆形。

但在ArkUI中，你无法直接将`borderRadius` 设置为50%，只能输入具体的数值。对于正方形，将其设置为高度（宽度）的一半，你会得到一个圆。对于长方形，将其设置为高度（宽度）的一半，你会得到一个胶囊形。

注意：最大值不会超过宽或高的一半

```html{13-15}
<div class="gray-box">
  <div class="red-box">这是个红色盒子</div>
</div>

<style>
.gray-box {
	background-color: gray;
  /* ... */
}

.red-box {
  /* ... */
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
```

```tsx{8-10}
Flex({
	// ...
}) {
  Row() {
    Text('这是一个红色盒子')
  }
  // ...
  .width(100)
  .height(100)
  .borderRadius(50)
}
.backgroundColor(Color.Grey)
// ...
```
