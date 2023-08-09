// 这里放组件的props及公共方法
import type { ExtractPropTypes } from 'vue';
//  as const，会让对象的每个属性变成只读（readonly）
export const buttonProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
