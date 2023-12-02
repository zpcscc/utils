import { exec } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

let timer = null;
const delay = 200; // 延迟执行的时间，单位为毫秒

const transformCommentToMarkdown = () => {
  exec('pnpm run jsdoc2md', (error) => {
    if (error) {
      console.error(`运行pnpm run jsdoc2md时出错: ${error.message}`);
    }
  });
};

fs.watch(path.join(__dirname, '../src'), { recursive: true }, (_eventType, filename) => {
  console.log(`${filename} changed...`);

  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    transformCommentToMarkdown();
  }, delay);
});
