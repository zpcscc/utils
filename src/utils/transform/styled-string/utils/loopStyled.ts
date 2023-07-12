import { isObject } from 'src';
import type { StyledType } from '../type';
import formatStyleToString from './formatStyleToString';

/**
 * @name 循环遍历styled对象，转为string
 * @param {StyledType} styledObj
 * @returns {string}
 */
const loopStyled = (styledObj: StyledType): string => {
  let returnValue = '';
  Object.entries(styledObj).forEach(([key, value]) => {
    let styledValue = '';
    if (isObject(value)) {
      styledValue = loopStyled(value as StyledType);
      returnValue += `${key}{${styledValue}}`;
    } else {
      styledValue = formatStyleToString(key, value);
      returnValue += `${key}:${styledValue};`;
    }
  });
  return `${returnValue}`;
};

export default loopStyled;
