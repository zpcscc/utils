import fs from 'fs-extra';
import ora from 'ora';
import { mdDirPath } from './config.mjs';
import deleteDir from './deleteDir.mjs';
import generateMarkdownDocs from './generateMarkdownDocs.mjs';
import getEntries from './getEntries.mjs';

// 生成markdown文件
const generateMarkDownForFiles = async (root, output) => {
  const fileList = await fs.readdir(root);
  await Promise.all(
    fileList.map(async (fileName) => {
      // 只对index.ts文件生成md
      if (fileName === 'index.ts') {
        await generateMarkdownDocs(`${root}/${fileName}`, output);
      }
    })
  );
};

// 生成markdown
const generateMarkdown = async () => {
  const loading = ora('开始生成Markdown');
  try {
    // 生成前，删除之前的旧文件
    await deleteDir(mdDirPath);
    // 获取需要生成文档的入口与出口
    const markdownDirs = getEntries();
    await Promise.all(
      markdownDirs.map(async (sourceObject) => {
        const { root, output } = sourceObject;
        await generateMarkDownForFiles(root, output);
      })
    );
    loading.succeed('生成Markdown成功');
  } catch (error) {
    loading.fail(`生成Markdown失败: ${error}`);
  }
};

generateMarkdown();
