import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
