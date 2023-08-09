import { ExtractPropTypes } from 'vue';
// 定义props类型声明
export const iconProps = {
  name: String,

  size: [Number, String],

  color: String,
};
//as const，会让对象的每个属性变成只读（readonly）
export type IconProps = ExtractPropTypes<typeof iconProps>;
