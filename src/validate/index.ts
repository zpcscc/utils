/* eslint-disable @typescript-eslint/no-unsafe-argument */
import validateDate from './validateDate';
import validateEmail from './validateEmail';
import validateIDCard from './validateIDCard';
import validateInteger from './validateInteger';
import validatePhone from './validatePhone';
import validateUrl from './validateUrl';

export const validateTypeList = {
  date: '日期',
  email: '邮箱',
  IDCard: '身份证',
  integer: '整数',
  phone: '电话',
  url: '链接'
};

// 可校验的数据类型
export type ValidateType = keyof typeof validateTypeList;

/**
 * @name validate-数据校验
 * @param {any} data 需要校验的数据
 * @param {ValidateType} type 需要校验的类型 'phone' | 'email' | 'url' | 'IDCard' | 'date' ｜ 'integer'
 * @return {boolean} 返回校验的结果, 默认返回 false
 * @example <caption>ts类型</caption>
type ValidateType = 'phone' | 'email' | 'url' | 'IDCard' | 'date' ｜ 'integer';
validate(data:any, type:ValidateType)
 * @example <caption>demo</caption>
import { validate } from '@zpcscc/utils';
import type { ValidateType } from '@zpcscc/utils';

console.log(validate('17773827673', 'phone')); // true
console.log(validate('123', 'integer')); // true
console.log(validate('110101199003072412', 'IDCard')); // true
console.log(validate('2023-04-01', 'date')); // true
console.log(validate('zpcscc@gmail.com', 'email')); // true
console.log(validate('https://zpcscc.top', 'url')); // true
 */
const validate = (data: any, type?: ValidateType): boolean => {
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
