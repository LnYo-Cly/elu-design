import {
  computed,
  defineAsyncComponent
} from "./chunk-PC7OZR54.js";

// node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vitepress-demo@2.1.0_vitepress@1.0.0-rc.4/node_modules/vite-plugin-vitepress-demo/dist/theme/index.mjs
import AntdTheme from "G:/My_Project/Vue/EluDesign/elu-design/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vitepress-demo@2.1.0_vitepress@1.0.0-rc.4/node_modules/vite-plugin-vitepress-demo/dist/theme/antdv/index.vue";

// node_modules/.pnpm/registry.npmmirror.com+vite-plugin-vitepress-demo@2.1.0_vitepress@1.0.0-rc.4/node_modules/vite-plugin-vitepress-demo/dist/theme/hooks/site-demo.mjs
import { useData } from "vitepress";
var decodeBlock = (block) => {
  const obj = {};
  for (const blockKey in block) {
    const val = block[blockKey];
    if (typeof val === "string")
      obj[blockKey] = decodeURIComponent(val);
    else if (typeof val === "object")
      obj[blockKey] = decodeBlock(val);
  }
  return obj;
};
var useSiteDemos = (props, siteDemosData) => {
  const { lang } = useData();
  const demoData = computed(() => {
    var _a;
    return (_a = siteDemosData.value[props.src]) == null ? void 0 : _a.data;
  });
  const render = computed(() => {
    var _a;
    return decodeURIComponent((_a = demoData.value) == null ? void 0 : _a.render);
  });
  const code = computed(() => {
    var _a;
    return decodeURIComponent((_a = demoData.value) == null ? void 0 : _a.code);
  });
  const demo = computed(() => {
    var _a, _b;
    if ((_a = siteDemosData.value[props.src]) == null ? void 0 : _a.comp)
      return defineAsyncComponent((_b = siteDemosData.value[props.src]) == null ? void 0 : _b.comp);
    return null;
  });
  const block = computed(() => {
    var _a, _b;
    return ((_a = demoData.value) == null ? void 0 : _a.block) ? decodeBlock((_b = demoData.value) == null ? void 0 : _b.block) : null;
  });
  const content = computed(() => {
    if (!block.value)
      return null;
    const first = Object.keys(block.value)[0];
    return block.value[lang.value] ?? block.value[first];
  });
  return { demoData, demo, render, code, block, content };
};
export {
  AntdTheme,
  useSiteDemos
};
//# sourceMappingURL=vite-plugin-vitepress-demo_theme.js.map
