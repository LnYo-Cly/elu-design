// import { WIcon,WButton } from "@quark-ui/components";
import * as components from "@elu-design/components";
import type { App } from "vue";
// const components = [WIcon,WButton];

const install = (app: App) => {
  // 每个组件在写的时候都提供了install方法

  // 有的是组件，有的可能是指令 xxx.install = () => { app.directive() }
  // components.forEach((component) => app.use(component));

  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

// app.use(QuarkUI)
const EluDesign =  {
  install
};
export default EluDesign;

// import { WIcon } from 'quark-ui
//export * from "@elu-design/components";
export * from "@elu-design/components";
