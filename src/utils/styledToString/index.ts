import { isObject } from 'lodash';
import { dataToString } from '../dataOrString';

export interface StyledType {
  [key: string]: React.CSSProperties | StyledType | string | number;
}

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

/**
 * @name 将styled对象转为css-in-js可以运行的字符串
 * @param styled  样式对象 key为css选择器，value为css
 * @returns string
 */
export const styledToString = (styled?: StyledType | string): string => {
  if (!styled) return '';
  if (typeof styled === 'string') return styled;
  return `&{${loopStyled(styled)}}`;
};
