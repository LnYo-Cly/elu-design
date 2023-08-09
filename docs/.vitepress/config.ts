import { defineConfig } from "vitepress"
import { getNav } from "./config/nav";
import { getSiderbar } from "./config/sidebar";

export default defineConfig({
    title: "EluDesign",
    themeConfig: {
        nav: getNav(),
        sidebar:getSiderbar()
    }
});