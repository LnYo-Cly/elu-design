// 这里放组件的props及公共方法
import type { ExtractPropTypes, PropType } from 'vue';
export type ButtonType = 'primary' | 'text' | 'outline' | 'dashed';
export type ButtonSizeType = 'large' | 'medium' | 'small' | 'mini';
export type ButtonShapeType = 'square' | 'round' | 'circle' | 'mini-round';
export type ButtonStatusType =
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'outline',
  },
  round: Boolean,
  circle: Boolean,
  long: Boolean,
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'medium',
  },
  status: {
    type: String as PropType<ButtonStatusType>,
  },
  shape: {
    type: String as PropType<ButtonShapeType>,
  },
  color: {
    type: String as PropType<ButtonStatusType | string>,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
