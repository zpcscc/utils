export type ColorType = 'rgb' | 'hex' | 'hsl';

/**
 * @name 获取随机颜色
 * @param {'rgb' | 'hex'| 'hsl'} type 返回颜色的格式
 * @return {string} 返回生成的随机颜色字符串
 */
const getRandomColor = (type?: ColorType): string => {
  const a = Math.floor(Math.random() * 101);
  if (type === 'rgb') {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b},0.${a})`;
  } else if (type === 'hsl') {
    const h = Math.floor(Math.random() * 361);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h},${s}%,${l}%,${a}%)`;
  }
  return `#${Math.random().toString(16).padEnd(6, '0').slice(2, 8)}`;
};

export default getRandomColor;
