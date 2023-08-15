# Badge 徽标

## 基础用法

你可以用来展示消息数量，并设置最大展示消息。可用于自定义的图标、文本、按钮等。
<demo src="../../demos/badge/basic.vue"></demo>

## 改变颜色

如果你对当前颜色不满意，你可以自定义背景色以及文本色。
<demo src="../../demos/badge/diy-color.vue"></demo>

## 设置最大值

你可以通过`max`设置数字最大展示。
<demo src="../../demos/badge/max-num.vue"></demo>

## 隐藏徽标

你可以设置`hidden`属性来控制徽标的隐藏与展示
<demo src="../../demos/badge/hidden.vue"></demo>

## 自定义文本内容

你可以利用`value`属性传入`string`类型字符串，展示你所需内容
<demo src="../../demos/badge/content.vue"></demo>

## 小圆点

你可以用一个小圆点表示有新消息。
<demo src="../../demos/badge/dot.vue"></demo>

## 自定义位置

你可以采用一下方式个性化设置徽标位置
<demo src="../../demos/badge/diy-pos.vue"></demo>

## API

## 属性

| 属性名     | 说明                                                    | 类型          | 默认值 |
| ---------- | ------------------------------------------------------- | ------------- | ------ |
| value      | 显示值                                                  | number/string |        |
| max        | 最大值，超过最大值显示`{max}+`。只有value为number时生效 | number        | 99     |
| hidden     | 是否隐藏                                                | boolean       | false  |
| is-dot     | 是否显示小圆点                                          | boolean       | false  |
| bg-color   | 背景颜色                                                | string        | red    |
| text-color | 文字颜色                                                | string        | #fff   |

## 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 自定义内容 |
