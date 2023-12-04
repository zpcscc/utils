import copyStrByNum from 'src/str-copyStrByNum';
import desensitizeDefault from './desensitizeDefault';

/**
 * @name 对固定电话进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */
const desensitizeTelephone = (strValue: string): string => {
  // 将字符串按“-”分割成数组
  const strArr = strValue.split('-');
  switch (strArr.length) {
    case 1: {
      //  若没有分隔符，则隐藏后四位;
      return `${strValue.slice(0, -4)}${copyStrByNum('*', 4)}`;
    }
    case 2: {
      // 若有一个分隔符，区号不隐藏，中间号码隐藏后四位
      return `${strArr[0]}-${strArr[1].slice(0, -4)}${copyStrByNum('*', 4)}`;
    }
    case 3: {
      // 若有两个分隔符，区号不隐藏，中间号码隐藏后四位，分机号隐藏后两位
      return `${strArr[0]}-${strArr[1].slice(0, -4)}${copyStrByNum('*', 4)}-${strArr[2].slice(
        0,
        -2
      )}${copyStrByNum('*', 2)}`;
    }
    default: {
      return desensitizeDefault(strValue);
    }
  }
};

export default desensitizeTelephone;
