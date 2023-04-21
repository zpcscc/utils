import validateDate from './validateDate';
import validateEmail from './validateEmail';
import validateIDCard from './validateIDCard';
import validatePhone from './validatePhone';
import validateUrl from './validateUrl';

// 可校验的数据类型
export type ValidateType = 'phone' | 'email' | 'url' | 'IDCard' | 'date';

/**
 * @name 数据校验
 */
const validate = (data: any, type: ValidateType) => {
  switch (type) {
    case 'date':
      return validateDate(data);
    case 'IDCard':
      return validateIDCard(data);
    case 'email':
      return validateEmail(data);
    case 'phone':
      return validatePhone(data);
    case 'url':
      return validateUrl(data);
    default:
      return false;
  }
};

export default validate;
