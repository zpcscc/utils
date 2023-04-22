import type { SemanticType } from '../type';

// 获取语义化版本号的先后顺序
const getVersionNum = (type: SemanticType | string): number => {
  // 若是数字，则直接返回
  if (!Number.isNaN(Number(type))) return Number(type);
  switch (type) {
    case 'experimental':
      return 1;
    case 'alpha':
      return 2;
    case 'beta':
      return 3;
    case 'rc':
      return 4;
    case 'release':
      return 5;
    default:
      return 6;
  }
};

export default getVersionNum;
