import fs from 'fs-extra';
import path from 'node:path';
import { mdDirPath, srcDirPath } from './config.mjs';

/**
 * @name 获取文件目录的入口与出口
 */
const getEntries = () => {
  const subDirectories = [];
  // 获取 src 所有子目录文件名
  fs.readdirSync(srcDirPath, { withFileTypes: true }).forEach((dirent) => {
    if (dirent.isDirectory()) {
      subDirectories.push(dirent.name);
    }
  });
  return subDirectories.map((name) => {
    return {
      root: path.join(srcDirPath, `/${name}`),
      output: path.join(mdDirPath, `/${name}`)
    };
  });
};

export default getEntries;
