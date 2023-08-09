import { series, src, dest } from 'gulp';
import replace from 'gulp-replace';
import { projectRootPath, outDir } from './utils/paths';
import path from 'path';

function procTypingToEs() {
  return src(path.resolve(projectRootPath, 'types/**/*.d.ts')) // 您需要修改为实际的文件路径模式
    .pipe(replace('@elu-design', 'elu-design/es'))
    .pipe(dest(path.resolve(outDir, 'es/components')));
}
function procTypingToLib() {
  return src(path.resolve(projectRootPath, 'types/**/*.d.ts')) // 您需要修改为实际的文件路径模式
    .pipe(replace('@elu-design', 'elu-design/lib'))
    .pipe(dest(path.resolve(outDir, 'lib/components')));
}
export const procTypes = series(procTypingToEs, procTypingToLib);
