// 支持的可返回的数据类型
export type DataType =
  | 'Array'
  | 'Arguments'
  | 'Boolean'
  | 'Date'
  | 'Error'
  | 'Function'
  | 'Map'
  | 'Null'
  | 'Number'
  | 'Object'
  | 'RegExp'
  | 'Set'
  | 'String'
  | 'Symbol'
  | 'Undefined';

/**
 * @name 获取数据类型
 * @param {any} data 需要判断类型的数据
 * @return {DataType} 返回对应的类型
 */
const getType = (data?: any): DataType & string => {
  return Object.prototype.toString.call(data).slice(8, -1) as DataType;
};

export default getType;
