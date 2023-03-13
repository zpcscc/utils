import { isObject } from 'lodash';
import { dataToString } from '../dataOrString';
import type { StyledType } from './type';

// 处理一些特殊css属性
const formatStyleToString = (
  key: string,
  value: string | number | StyledType | React.CSSProperties,
): string => {
  switch (key) {
    case 'content':
      return `'${value as string}'`;
    default:
      return dataToString(value);
  }
};

// 循环遍历styled对象，转为string
export const loopStyled = (styledObj: StyledType): string => {
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
