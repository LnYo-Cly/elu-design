import type { DefaultTheme } from "vitepress"

export const getSiderbar = (): DefaultTheme.Sidebar => {
    return {
        "/guide/":[
            {
                text: "基础",
                items: [
                    {text:"安装", link:"/guide/install"},
                    {text:"快速开始", link:"/guide/quickstart"}
                ]
            }
        ],

        "/components/":[
            {
                text: "基本",
                items: [
                    {text: "button 按钮", link: "/components/button/"}
                ]
                
            }
    
        ]
    }
};