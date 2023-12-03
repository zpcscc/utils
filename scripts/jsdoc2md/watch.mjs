import fs from 'node:fs';
import path from 'node:path';
import { mdDirPath, srcDirPath } from './config.mjs';
import generateMarkdownDocs from './generateMarkdownDocs.mjs';

let timer = null;
const delay = 200; // 延迟执行的时间，单位为毫秒

// 监听文件改变，重新生成文档
export const watcher = fs.watch(srcDirPath, { recursive: true }, (_eventType, filename) => {
  const filenameArr = filename.split('/');
  // 只对函数的index.ts文件进行监听；
  if (filenameArr.length > 1 && filenameArr.at(-1) === 'index.ts') {
    console.log(filename, '文件改变了，正在更新文档...');
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      await generateMarkdownDocs(
        `${srcDirPath}/${filename}`,
        path.join(mdDirPath, `/${filenameArr[0]}`)
      );
      console.log(`${filenameArr[0]}.md`, '文档更新完成');
    }, delay);
  }
});

// 关闭监听
// watcher.close();
