import validateDate from './validateDate';
import validateEmail from './validateEmail';
import validateIDCard from './validateIDCard';
import validateInteger from './validateInteger';
import validatePhone from './validatePhone';
import validateUrl from './validateUrl';

export const ValidateTypeList = {
  date: '日期',
  email: '邮箱',
  IDCard: '身份证',
  integer: '整数',
  phone: '电话',
  url: '链接',
};

// 可校验的数据类型
export type ValidateType = keyof typeof ValidateTypeList;

/**
 * @name 数据校验
 * @param {any} data 需要校验的数据
 * @param {ValidateType} type 需要校验的类型
 * @return {boolean} 返回校验的结果
 */
const validate = (data: any, type: ValidateType): boolean => {
  switch (type) {
    case 'date': {
      return validateDate(data);
    }
    case 'email': {
      return validateEmail(data);
    }
    case 'IDCard': {
      return validateIDCard(data);
    }
    case 'integer': {
      return validateInteger(data);
    }
    case 'phone': {
      return validatePhone(data);
    }
    case 'url': {
      return validateUrl(data);
    }
    default: {
      return false;
    }
  }
};

export default validate;
