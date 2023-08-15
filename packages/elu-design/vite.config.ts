/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
export default defineConfig({
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: './index.ts',
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, '../../dist/es'),
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: resolve(__dirname, '../../dist/lib'),
        },
      ],
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs'],
      name: 'elu-design',
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: '../components',
      outDir: ['../../dist/es/components', '../../dist/lib/components'],
      tsconfigPath: '../../tsconfig.json',
    }),
  ],
});
