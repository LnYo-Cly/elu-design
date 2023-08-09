import { defineConfig } from 'vite';
import { vitepressDemo } from 'vite-plugin-vitepress-demo';
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/**/*.vue'],
    }),
  ],
});
