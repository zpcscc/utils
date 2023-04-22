import { walkSplit } from '../../helpers';
import { getVersionNum } from './utils';

/**
 * @name 版本号排序
 * @param {string[]} data 需要排序的版本号数组
 * @return {string[]} 从小到大排序过后的数组
 */
const sortVersions = (data: string[]) => {
  return data.sort((a, b) => {
    const newA = a.trim();
    const newB = b.trim();
    if (newA === newB) return 0;
    const aIterator = walkSplit(newA, ['.', '-']);
    const bIterator = walkSplit(newB, ['.', '-']);
    const compare = (aNum: number, bNum: number) => {
      if (aNum === bNum) {
        return compare(
          getVersionNum(aIterator.next().value),
          getVersionNum(bIterator.next().value),
        );
      } else if (aNum > bNum) return 1;
      return -1;
    };
    return compare(getVersionNum(aIterator.next().value), getVersionNum(bIterator.next().value));
  });
};

export default sortVersions;
