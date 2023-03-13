import type { StyledType } from './type';
import { loopStyled } from './utils';

/**
 * @name 将styled对象转为css-in-js可以运行的字符串
 * @param styled  样式对象 key为css选择器，value为css
 * @returns string
 */
const styledToString = (styled?: StyledType | string): string => {
  if (!styled) return '';
  if (typeof styled === 'string') return styled;
  return `&{${loopStyled(styled)}}`;
};

export default styledToString;
