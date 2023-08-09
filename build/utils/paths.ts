import path from 'path';

export const projectRootPath = path.resolve(__dirname, '../../');
export const outDir = path.resolve(projectRootPath, 'dist');
export const eluRootPath = path.resolve(projectRootPath, 'packages/elu-design');
export const compRootPath = path.resolve(
  projectRootPath,
  'packages/components',
);
export const themeRootPath = path.resolve(
  projectRootPath,
  'packages/theme-chalk',
);
