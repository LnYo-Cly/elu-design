# Button 按钮

## 按钮类型

通过`type`属性设置按钮类型，共有四种：

- primary
- outline(默认)
- dashed
- text
  <demo src="../../demos/button/basic.vue"></demo>

## 禁用

<demo src="../../demos/button/disabled.vue"></demo>

## 设置颜色/状态

已经内置如下颜色/状态：

- primary(默认)
- success
- danger
- warning
- info

你可以通过`status`或者`color`去设置上述五种内置状态色。两种属性的区别：

- `status`有代码提示，`color`无代码提示
- `status`仅限上述的五种颜色，`color`无限制
- **`color`优先级高于`status`，二者同时存在时，`color`会覆盖`status`**。

这里更推荐使用`color`属性，如果需要上述五种状态色的代码提示则推荐`status`

`color`属性自定义颜色(符合css样式即可):
例如`black`、`#ff42b3`、`linear-gradient(111.4deg, rgb(238, 113, 113) 1%, rgb(246, 215, 148) 58%)`，更多样式你可以也可以通过设置css自定义。

<demo src="../../demos/button/color.vue"></demo>

## 长按钮

设置`long`属性，可以让按钮与父元素等宽。
<demo src="../../demos/button/long.vue"></demo>

## 按钮大小

你可以根据需要，设置`size`属性自定义按钮大小，默认medium。

- large
- medium
- small
- mini
  <demo src="../../demos/button/size.vue"></demo>

## 按钮形状

通过设置`shape`属性设置按钮的形状：

- square(矩形，无圆角)
- round(大圆角)
- circle(圆形)

默认为小圆角(4px)
<demo src="../../demos/button/shape.vue"></demo>

## API

### 属性

| 属性名   | 说明     | 类型    | 可选值                                                    | 默认值    |
| -------- | -------- | ------- | --------------------------------------------------------- | --------- |
| type     | 按钮类型 | string  | `primary` \| `outline` \| `dashed` \| `text`              | `outline` |
| size     | 按钮大小 | string  | `large` \| `medium` \| `small` \| `mini`                  | `medium`  |
| status   | 按钮状态 | string  | `primary` \| `warning` \| `success` \| `danger` \| `info` | -         |
| color    | 按钮颜色 | string  | `status` \| `string`                                      | -         |
| disabled | 禁用     | boolean | -                                                         | `false`   |
| shape    | 按钮形状 | string  | `square` \| `round` \| `circle` \| `mini-round`           | -         |
| long     | 长按钮   | boolean | -                                                         | `false`   |
| loading  | 加载按钮 | boolean | -                                                         | `false`   |

### 插槽
