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
  | 'RegExp'
  | 'Set'
  | 'String'
  | 'Undefined';

/**
 * @name 获取数据类型
 */
const getType = (data: any) => {
  return Object.prototype.toString.call(data).slice(8, -1) as DataType;
};

export default getType;
