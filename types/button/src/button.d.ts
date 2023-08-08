import type { ExtractPropTypes } from "vue";
export declare const buttonProps: {
    size: {
        type: NumberConstructor;
    };
    color: {
        type: StringConstructor;
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
