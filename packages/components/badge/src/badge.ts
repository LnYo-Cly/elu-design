import type { ExtractPropTypes } from 'vue';

export const badgeProps = {
  bgColor: {
    type: String,
    default: 'red',
  },
  textColor: {
    type: String,
    default: '#fff',
  },
  max: {
    type: Number,
    default: 99,
  },
  hidden: Boolean,
  isDot: Boolean,
  value: {
    type: [String, Number],
    default: ' ',
  },
};

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;
