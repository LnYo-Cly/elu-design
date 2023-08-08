import { ExtractPropTypes } from 'vue';
export declare const iconProps: {
    name: StringConstructor;
    size: (StringConstructor | NumberConstructor)[];
    color: StringConstructor;
};
export type IconProps = ExtractPropTypes<typeof iconProps>;
