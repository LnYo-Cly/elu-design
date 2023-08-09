/**
 * 安装依赖 pnpm install fast-glob -w -D
 */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import RollupPluginPostcss from 'rollup-plugin-postcss'; // 解决组件内部如果有css 打包会报错的css插件
import { terser } from 'rollup-plugin-terser'; // 压缩js代码
import cleanup from 'rollup-plugin-cleanup'; // 去除无效代码
import Autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { series, parallel } from 'gulp';
import { sync } from 'fast-glob'; // 同步查找文件
import { compRootPath, outDir, projectRootPath } from './utils/paths';
import path from 'path';
import { rollup, OutputOptions } from 'rollup';
import { buildConfig } from './utils/config';
import { pathRewriter, run } from './utils';
import { Project, SourceFile } from 'ts-morph';
import glob from 'fast-glob';
import { parse, compileScript } from '@vue/compiler-sfc';
import fs from 'fs/promises';
import { promises as fsPromises } from 'fs';
let index = 1;
const buildEachComponent = async () => {
  // 打包每个组件
  // 查找components下所有的组件目录 ["icon"]
  const files = sync('*', {
    cwd: compRootPath,
    onlyDirectories: true, // 只查找文件夹
  });

  // 分别把components文件夹下的组件，放到dist/es/components下 和 dist/lib/components
  const builds = files.map(async (file: string) => {
    // 找到每个组件的入口文件 index.ts
    const input = path.resolve(compRootPath, file, 'index.ts');
    const config = {
      input,
      plugins: [
        nodeResolve(),
        typescript(),
        vue({
          preprocessStyles: false,
        }),
        RollupPluginPostcss({
          extract: true,
          plugins: [Autoprefixer, cssnano()],
        }),
        commonjs(),
      ],
      external: (id) => /^vue/.test(id) || /^@elu-design/.test(id), // 排除掉vue和@elu-design的依赖
    };
    const bundle = await rollup(config);
    const options = Object.values(buildConfig).map((config) => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name), // @elu-design => @elu-design/es @elu-design/lib  处理路径
      exports: 'named',
    }));

    await Promise.all(
      options.map((option) => bundle.write(option as OutputOptions)),
    );
  });

  return Promise.all(builds);
};

async function genTypes() {
  const project = new Project({
    // 生成.d.ts 我们需要有一个tsconfig
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(outDir, 'types'),
      baseUrl: projectRootPath,
      paths: {
        '@elu-design/*': ['packages/*'],
      },
      skipLibCheck: true,
      strict: false,
    },
    tsConfigFilePath: path.resolve(projectRootPath, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
  });

  const filePaths = await glob('**/*', {
    // ** 任意目录  * 任意文件
    cwd: compRootPath,
    onlyFiles: true,
    absolute: true,
  });

  const sourceFiles: SourceFile[] = [];

  await Promise.all(
    filePaths.map(async function (file) {
      if (0) {
        //if (file.endsWith(".vue")) {
        const content = await fsPromises.readFile(file, 'utf8');
        const sfc = parse(content);
        // 提取出 script 中的内容
        const { script, scriptSetup } = sfc.descriptor;
        //一个vue文件中可以同时存在script和setup

        if (script || scriptSetup) {
          let content = '';
          let isTs = false;
          if (script && script.content) {
            content += script.content;

            if (script.lang === 'ts') isTs = true;
          }

          if (scriptSetup) {
            const compiled = compileScript(sfc.descriptor, {
              id: `${index++}`,
            });

            content += compiled.content;

            if (scriptSetup.lang === 'ts') isTs = true;
          }

          sourceFiles.push(
            // 创建一个同路径的同名 ts/js 的映射文件
            project.createSourceFile(file + (isTs ? '.ts' : '.js'), content),
          );
          //console.log(`output->${file + (isTs ? '.ts' : '.js')}`, "----------------------------------------------")
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(file); // 把所有的ts文件都放在一起 发射成.d.ts文件
        sourceFiles.push(sourceFile);
      }
    }),
  );
  await project.emit({
    // 默认是放到内存中的
    emitOnlyDtsFiles: true,
  });

  const tasks = sourceFiles.map(async (sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput();
    const tasks = emitOutput.getOutputFiles().map(async (outputFile) => {
      const filepath = outputFile.getFilePath();
      await fs.mkdir(path.dirname(filepath), {
        recursive: true,
      });
      await fs.writeFile(filepath, pathRewriter('es')(outputFile.getText()));
    });
    await Promise.all(tasks);
  });

  await Promise.all(tasks);
}

function copyTypes() {
  const src = path.resolve(outDir, 'types/components/');
  const copy = (module) => {
    const output = path.resolve(outDir, module, 'components');
    return () => run(`cp -r ${src}/* ${output}`);
  };
  return parallel(copy('es'), copy('lib'));
}

async function buildComponentEntry() {
  const config = {
    input: path.resolve(compRootPath, 'index.ts'),
    plugins: [
      typescript(),
      cleanup(),
      terser({ compress: { drop_console: true } }),
    ],
    external: () => true,
  };
  const bundle = await rollup(config);
  return Promise.all(
    Object.values(buildConfig)
      .map((config) => ({
        format: config.format,
        file: path.resolve(config.output.path, 'components/index.js'),
      }))
      .map((config) => bundle.write(config as OutputOptions)),
  );
}

export const buildComponent = series(
  buildEachComponent,
  genTypes,
  //copyTypes(),
  buildComponentEntry,
);
