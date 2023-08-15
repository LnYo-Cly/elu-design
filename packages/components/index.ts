import * as components from './components';
import type { App } from 'vue';

const install = (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

const EluDesign = {
  install,
};
export default EluDesign;

export * from './components';
