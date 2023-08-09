// for volar
//import Icon from "./components/icon/src/icon.vue"
//import Button from "./components/button/src/button.vue"
import type Icon from "./components/icon"
import type Button from "./components/button"

import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EluIcon: typeof Icon
    EluButton: typeof Button
    "elu-icon": typeof Icon
    "elu-button": typeof Button
  }
}
export {}