/** Used to generate unique IDs. */
const idCounter = {};

/**
 * @name 生成全局唯一ID
 * @param {string} prefix 指定id的前缀
 * @returns {string} 返回一个唯一ID
 */
const getUniqueId = (prefix: string = '$zpcscc$'): string => {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }
  const id = ++idCounter[prefix];
  if (prefix === '$zpcscc$') {
    return `${id}`;
  }
  return `${prefix}${id}`;
};

export default getUniqueId;
