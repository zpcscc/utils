import fs from 'fs-extra';
import jsdoc2md from 'jsdoc-to-markdown';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';

const MD_DIR = '_docs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDirPath = path.join(__dirname, '../../src');
const mdDirPath = path.join(__dirname, '../../docs', MD_DIR);
const template = fs.readFileSync(path.join(__dirname, 'template.hbs'), 'utf8');

// 获取 src 所有子目录文件名
export const getSubDirectories = (dirPath) => {
  const subDirectories = [];
  fs.readdirSync(dirPath, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      subDirectories.push(dirent.name);
    }
  });
  return subDirectories;
};

// 获取 entries
export const getEntries = () => {
  const subDirectories = getSubDirectories(srcDirPath);
  return subDirectories.map((name) => {
    return {
      root: path.join(srcDirPath, `/${name}`),
      output: path.join(mdDirPath, `/${name}`)
    };
  });
};

// 生成markdown
const generateMarkdown = async () => {
  const loading = ora('Generates Markdown');
  try {
    await deleteDirectory(path.join(__dirname, '../docs', MD_DIR));
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

const generateMarkDownForFiles = async (root, output) => {
  const fileList = await fs.readdir(root);
  await Promise.all(
    fileList.map(async (fileName) => {
      // 只对index.ts文件生成md
      if (fileName === 'index.ts') {
        await generateMarkdownDocs(fileName, root, output);
      }
    })
  );
};

/**
 * 生成 markdown
 * @param sourceName 目标文件名
 * @param sourceRootPath 目标文件所在文件夹名
 * @param outputPath 生成文件所在文件夹名
 * @return {Promise<void>}
 */
const generateMarkdownDocs = async (sourceName, sourceRootPath, outputPath) => {
  const sourcePath = `${sourceRootPath}/${sourceName}`;
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
    }
  } catch (error) {
    loading.fail(`生成Markdown失败 ${sourcePath}: ${error}`);
  }
};

// 删除指定目录
const deleteDirectory = async (dirPath) => {
  try {
    await fs.remove(dirPath);
    console.log(`目录 ${dirPath} 删除成功.`);
  } catch (error) {
    console.error(`删除目录时出错 ${dirPath}: ${error}`);
  }
};

generateMarkdown();
