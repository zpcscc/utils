import fs from 'fs-extra';
import jsdoc2md from 'jsdoc-to-markdown';
import path from 'node:path';
import ora from 'ora';
import { __dirname, template } from './config.mjs';

/**
 * 生成 markdown
 * @param sourceName 目标文件名
 * @param sourceRootPath 目标文件所在文件夹名
 * @param outputPath 生成文件所在文件夹名
 * @return {Promise<void>}
 */
const generateMarkdownDocs = async (sourcePath, outputPath) => {
  const loading = ora(`在此目录下生成markdown文档: ${sourcePath}`);
  try {
    const mdStr = await jsdoc2md.render({
      // 传入需要解析的文件路径
      files: path.resolve(process.cwd(), sourcePath),
      // 最终需要渲染的模板
      template,
      // markdown中 标题 # 的数量。代表标题的层级
      'heading-depth': 2,
      // 指定@example块中使用的默认语言（用于语法高亮显示）
      'example-lang': 'typescript',
      // 将标识符名称格式化为代码，markdown中表现为 用 <code></code> 包裹内容
      'name-format': 'backticks',
      // 模块索引格式化
      'module-index-format': 'none',
      // jsdoc的配置文件
      configure: path.join(__dirname, 'jsdoc.config.json')
    });

    if (mdStr) {
      fs.outputFile(path.resolve(process.cwd(), `${outputPath}.md`), mdStr);
    } else {
      loading.fail(`生成Markdown失败1 ${sourcePath}: ${sourcePath}`);
    }
  } catch (error) {
    loading.fail(`生成Markdown失败 ${sourcePath}: ${error}`);
  }
};

export default generateMarkdownDocs;
