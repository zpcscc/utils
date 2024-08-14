/**
 * @name cloneDeep-深拷贝
 * @description 将指定数据进行深拷贝，若无法拷贝则返回原数据
 * @param {any} data 待拷贝的数据
 * @returns {string} 深拷贝后的数据
 * @example <caption>ts类型</caption>
cloneDeep(data:any, opt?:number)
 * @example <caption>demo</caption>
import { cloneDeep } from '@zpcscc/utils';

console.log(cloneDeep('Name')); // Name
console.log(cloneDeep({name:'张三'})); // {name:'张三'}
 */
const cloneDeep = (data: any): any => {
  try {
    return structuredClone(data);
  } catch {
    return data; // 拷贝失败的返回原数据
  }
};

export default cloneDeep;
