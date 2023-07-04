import type { SemanticType } from '../type';

/**
 * @name 获取语义化版本号的先后顺序
 * @param type 当前版本的类型
 * @returns 返回当前类型对应的序号
 */
const getVersionNum = (type: SemanticType | string): number => {
  // 若是数字，则直接返回
  if (!Number.isNaN(Number(type))) return Number(type);
  // 不是数字，则返回类型对应的权重
  const typeMap = {
    experimental: 1,
    alpha: 2,
    beta: 3,
    rc: 4,
    release: 5,
  };
  return typeMap[type] || 6;
};

export default getVersionNum;
