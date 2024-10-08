import type { ColorType } from 'src/types';

/**
 * @name getColor
 * @description 获取随机颜色
 * @param {'rgb' | 'hex'| 'hsl'} type 返回颜色的格式
 * @return {string} 返回生成的随机颜色字符串
 * @example <caption>ts类型</caption>
getColor(type:'rgb' | 'hex' | 'hsl');
 * @example <caption>demo</caption>
import { getColor } from '@zpcscc/utils';

console.log(getColor()); //  #6ffccf;
console.log(getColor('hex')); //  #8d3eca;
console.log(getColor('rgb')); //  rgb(12,45,145,0.4);
console.log(getColor('hsl')); //  hsl(200,100%,70%);
 */
const getColor = (type?: ColorType): string => {
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

export default getColor;
