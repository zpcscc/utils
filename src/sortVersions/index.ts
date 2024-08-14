import { walkSplit } from 'src';

// 不是数字，则返回类型对应的权重
const typeMap = {
  experimental: 1,
  alpha: 2,
  beta: 3,
  rc: 4,
  release: 5
};

// 支持的语义化版本号英文
type VersionType = keyof typeof typeMap;

/**
 * @name sortVersions-版本号排序
 * @param {string[]} data 需要排序的版本号数组
 * @return {string[]} 从小到大排序过后的数组
 * @example <caption>ts类型</caption>
sortVersions(data:string[])
 * @example <caption>demo</caption>
import { sortVersions } from '@zpcscc/utils';

const beforeSort = [
  '1.2.1',
  '1.1.1',
  '1.1.1-release.2',
  '1.1.1-alpha.10',
  '1.1.1-release.1',
  '1.1.1-beta.1',
  '1.1.1-experimental.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.2-alpha.1'
];

console.log(removeTag('<p>Hello World!</p>')); // afterSort

const afterSort = [
  '1.1.1-experimental.1',
  '1.1.1-alpha.10',
  '1.1.1-beta.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.1-release.1',
  '1.1.1-release.2',
  '1.1.1',
  '1.1.2-alpha.1',
  '1.2.1'
];
 */
const sortVersions = (data: string[]): string[] => {
  return data.sort((a, b) => {
    const newA = a.trim();
    const newB = b.trim();
    if (newA === newB) return 0;
    const aIterator = walkSplit(newA, ['.', '-']);
    const bIterator = walkSplit(newB, ['.', '-']);
    // 获取语义化版本号的先后顺序
    const getVersionNum = (type: VersionType | string): number => {
      // 若是数字，则直接返回
      if (!Number.isNaN(Number(type))) return Number(type);
      return typeMap[type] || 6;
    };
    // 比较两者大小
    const compare = (aNum: number, bNum: number) => {
      if (aNum === bNum) {
        return compare(
          getVersionNum(aIterator.next().value),
          getVersionNum(bIterator.next().value)
        );
      } else if (aNum > bNum) return 1;
      return -1;
    };
    return compare(getVersionNum(aIterator.next().value), getVersionNum(bIterator.next().value));
  });
};

export default sortVersions;
