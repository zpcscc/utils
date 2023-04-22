/**
 * @name 获取随机颜色
 * @param {'rgba' | 'hex'} type 返回颜色的格式
 * @return {string} 返回生成的随机颜色字符串
 */
const getRandomColor = (type?: 'rgba' | 'hex') => {
  if (type === 'rgba') {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 101);
    return `rgba(${r},${g},${b},0.${a})`;
  }
  return `#${Math.random().toString(16).padEnd(6, '0').substring(2, 8)}`;
};

export default getRandomColor;
