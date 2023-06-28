import { dataToString } from '../../data-string';
import type { StyledType } from '../type';

// 处理一些特殊css属性
const formatStyleToString = (
  key: string,
  value: string | number | StyledType | React.CSSProperties,
): string => {
  switch (key) {
    case 'content': {
      return `'${value as string}'`;
    }
    default: {
      return dataToString(value);
    }
  }
};

export default formatStyleToString;
