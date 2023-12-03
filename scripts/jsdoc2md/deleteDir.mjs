import fs from 'fs-extra';

// 删除指定目录
const deleteDir = async (dirPath) => {
  try {
    await fs.remove(dirPath);
    console.log(`目录 ${dirPath} 删除成功.`);
  } catch (error) {
    console.error(`删除目录时出错 ${dirPath}: ${error}`);
  }
};

export default deleteDir;
