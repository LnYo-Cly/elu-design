// 打包方式：串行(series)  并行(parallel)
import { series, parallel } from "gulp";
import { genTypes } from "./gen-types";
import { withTaskName, run } from "./utils";
import { outDir, eluRootPath, themeRootPath } from "./utils/paths";
import path from "path";
// gulp 不叫打包，做代码转化 vite

const copySourceCode = () => async () => {
  await run(`cp ${eluRootPath}/package.json ${outDir}/package.json`);
};

/**
 * 1. 打包样式
 * 2. 打包工具方法
 * 3. 打包所有组件
 * 4. 打包每个组件
 * 5. 生成一个组件库
 * 6. 发布组件
 */
export default series(
  withTaskName("clean root dist", async () => run("rm -rf ./dist")), // 删除dist目录
  withTaskName("clean root dist", async () => run("rm -rf ./types")), // 删除dist目录
  withTaskName("clean theme dist", async () => run(`rm -rf ${path.resolve(themeRootPath, "dist")}`)), // 删除dist目录
  parallel(
    withTaskName("buildPackages", () =>
      run("pnpm run --parallel build --filter ./packages")
    ), // 并行执行packages目录下的build脚本
    withTaskName("buildFullComponent", () =>
      run("pnpm run build buildFullComponent")
    ), // 执行build命令时会调用rollup，给rollup传参数buildFullComponent，那么就会执行导出任务叫buildFullComponent
    withTaskName("buildComponent", () => run("pnpm run build buildComponent"))
  ),
  parallel(genTypes, copySourceCode()),
  withTaskName("gen-comp-typing",()=> run("pnpm run dts")),
  withTaskName("procTypes",()=> run("pnpm run build procTypes"))
);

// 任务执行器 gulp 任务名 就会执行对应的任务
export * from "./full-component";
export * from "./component";
export * from "./proc-types"
