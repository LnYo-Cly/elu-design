import type { DefaultTheme } from "vitepress"

export const getNav = (): DefaultTheme.NavItem[] => {
    return [
        {
            text: "指南",
            link: "/guide/install"
        },
        {
            text: "组件",
            link: "/components/button/"
        }

    ];
};