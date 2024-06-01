# Web 开发者转 HarmonyOS

## 前言

本文面向拥有Web开发经验、熟悉HTML和CSS的人员。通过HTML/CSS和HarmonyOS/ArkUI代码之间的对比，能让你更快速的上手HarmonyOS的应用开发。

## 编程语言

ArkTS是HarmonyOS优选的主力应用开发语言。ArkTS围绕应用开发在[TypeScript](https://www.typescriptlang.org/)（简称TS）生态基础上做了进一步扩展，保持了TS的基本风格，同时通过规范定义强化开发期静态检查和分析，提升程序执行稳定性和性能。

如果你有JavaScript的基础，要了解TypeScript和JavaScript语言的区别，请参阅[为JavaScript 程序员准备的 TypeScript](https://www.typescriptlang.org/zh/docs/handbook/typescript-in-5-minutes.html)。

如果你有TypeScript的基础，要了解ArkTS语言和TypeScript语言的区别，请参阅[从TypeScript到ArkTS的适配规则](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/quick-start/typescript-to-arkts-migration-guide.md)。

## UI框架

HarmonyOS 采用的UI框架是方舟开发框架（ArkUI框架），方舟开发框架为开发者提供了两种开发范式，分别是基于ArkTS的声明式开发范式（简称“声明式开发范式”）和兼容JS的类Web开发范式（简称“类Web开发范式”）。本文只考虑声明式开发范式这一种开发范式。

注意：

- 以下示例均假设将所有的HTML元素的CSS盒子模型都设置为`border-box`，以便与ArkUI保持一致
    
    ```css
    {
        box-sizing: border-box;
    }
    ```
    
- 在下面ArkUI的示例中默认将单位省略。ArkUI采用vp为基准数据单位，在实际宽度为1440物理像素的屏幕上，1vp约等于3px。

## 基本布局操作

### 设置文本样式、文本对齐方式

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cf222fb-4229-4c3c-b398-2abd7f5f5847/59d40cf6-390c-4e55-8e7a-c0884178e07f/Untitled.png)

对于css使用`font`和`color`设置文字样式、大小等，Text组件（ArkUI中构建UI的最小单位称为组件）的[文本通用属性](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/reference/apis-arkui/arkui-ts/ts-universal-attributes-text-style.md)可以达到同样的效果。

对于css使用`text-align`来对齐文本，Text组件的`textAlign`属性可以达到同样的效果。

```css
<p class="blue-text">蓝色文字</p>

.blue-text {
  font: 900 24px Tahoma;
  color: blue;
  text-align: center;
}
```

```tsx
Text('蓝色文字')
  .fontSize(24)
  .fontColor(Color.Blue)
    // 当前仅支持’HarmonyOS Sans’字体
  .fontFamily('HarmonyOS Sans')
  .fontWeight(FontWeight.Bolder)
  .textAlign(TextAlign.Center)
```

### 设置尺寸大小和背景颜色

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cf222fb-4229-4c3c-b398-2abd7f5f5847/573c338c-d45a-4ede-96dd-24378eb771b2/Untitled.png)

使用`width`和`height`属性来设置组件的固定宽高。如果要约束组件的宽高，请使用`constraintSize`属性来实现。

使用`backgroundColor` 属性来设置背景颜色。对于渐变颜色，可以使用`linearGradient` 属性。

在HTML和ArkUI的Flex布局中，子元素或子组件默认锚定在左上角。更多布局见[布局概述](https://docs.openharmony.cn/pages/v4.1/zh-cn/application-dev/ui/arkts-layout-development-overview.md)

```css
<div class="red-box">这是个红色盒子</div>

.red-box {
  width: 300px;
  height: 180px;
  background-color: red;
}
```

```tsx
Flex() {
  Text('这是个红色盒子')
}
.width(300)
.height(180)
.backgroundColor(Color.Red)
// .linearGradient({direction: GradientDirection.Right,colors: [[Color.Green, 0], [Color.Red, 1]]})
```

### 设置对齐方式

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cf222fb-4229-4c3c-b398-2abd7f5f5847/1c8b9a61-94d9-4818-9613-0d4b9328120e/Untitled.png)

在ArkUI中，通过给Flex容器传入参数`justifyContent`和`alignItems`来实现子组件的对齐格式。对于Row和Column容器（线性布局容器），设置其属性`justifyContent`和`alignItems`来实现。

```css
<div class="red-box">这是个红色盒子</div>

.red-box {
  ...
  display: flex;
  align-items: center;
  justify-content: center;
}
```

```tsx
Flex({
  justifyContent: FlexAlign.Center,
  alignItems: ItemAlign.Center
}) {
  Text('这是个红色盒子')
}
...
```

## 组件位置和大小

### 设置绝对位置