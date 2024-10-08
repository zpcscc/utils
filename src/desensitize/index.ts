import toString from 'src/toString';
import desensitizeBankCard from './desensitizeBankCard';
import desensitizeDefault from './desensitizeDefault';
import desensitizeIDCard from './desensitizeIDCard';
import desensitizeName from './desensitizeName';
import desensitizePhone from './desensitizePhone';
import desensitizeTelephone from './desensitizeTelephone';

export const DesensitizeList = ['name', 'phone', 'IDCard', 'telephone', 'bankCard'] as const;

export type DesensitizeType = (typeof DesensitizeList)[number];

/**
 * @name desensitize
 * @description
对数据进行脱敏处理 <br/>
一、姓名脱敏：<br/>
  &nbsp;&nbsp;1、中文姓名：<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;1）每4个汉字展示前1位，末3位屏蔽; <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;2）少于4 个汉字的只展示第1位，其他屏蔽。（数字字母均视同汉字处理）<br/>
  &nbsp;&nbsp;2、英文姓名：<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;1）如果中间是有空格的，屏蔽第一个空格后面的所有英文字母; <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;2）如果中间没有空格，末3分之 2（四舍五入）部B分屏菘掉; <br/>
二、身份证脱敏： <br/>
  &nbsp;&nbsp;1、号码长度为 15位的：号码的第7位到12位和最后1位屏蔽，其他不屏;<br/>
  &nbsp;&nbsp;2、号码长度为 18位的：号码的第7位到14位和最后2位屏蔽，其他不屏; <br/>
三、手机号码： <br/>
  &nbsp;&nbsp;1、只展示前3位、末4位，中间均屏蔽 <br/>
  &nbsp;&nbsp;2、支持格式 带-或者空格 例如会将 178-7777-8888 或178 7777 8888統一输出为178****8888 <br/>
四、固定电话： <br/>
  &nbsp;&nbsp;1、区号不屏蔽；电话号码屏蔽末4位：分机号码屏蔽末2位 <br/>
  &nbsp;&nbsp;2、注意：仅支持2段或3段，如 0571-87006789-1234 <br/>
五、银行卡号 <br/>
  &nbsp;&nbsp;1、号码长度等于或者大于16位的：只展示前4位、末4位，中间均屏 <br/>
  &nbsp;&nbsp;2、纯教字字符串，支持带空格或-，会先将空格或-去除再屏蔽 <br/>
 * @param {string} value
 * @param {DesensitizeType} type
 * @returns {string} 脱敏后的字符串
 * @example <caption>ts类型</caption>
type DesensitizeType = 'name' | 'phone' | 'IDCard' | 'telephone' | 'bankCard';
desensitize(value:string, type?:DesensitizeType)
 * @example <caption>demo</caption>
import { desensitize } from '@zpcscc/utils';
import type { DesensitizeType } from '@zpcscc/utils';

console.log(desensitize('')); // ''
console.log(desensitize('张3李四王五')); // 张3**王五
console.log(desensitize('17775262736', 'phone')); // 177****2736
 */
const desensitize = (value?: string, type?: DesensitizeType): string => {
  // 将传入的值转为字符串，并去除前后空格，确保后续都是对字符串进行操作
  const strValue = toString(value).trim();
  if (!strValue) return '';
  const strLength = strValue.length;
  // 只有一个字符，原样返回
  if (strLength === 1) return strValue;
  // 两个字符，只显示第一个字符，其他用*代替
  if (strLength === 2) return `${strValue[0]}*`;
  switch (type) {
    case 'name': {
      return desensitizeName(strValue);
    }
    case 'IDCard': {
      return desensitizeIDCard(strValue);
    }
    case 'phone': {
      return desensitizePhone(strValue);
    }
    case 'telephone': {
      return desensitizeTelephone(strValue);
    }
    case 'bankCard': {
      return desensitizeBankCard(strValue);
    }
    default: {
      return desensitizeDefault(strValue);
    }
  }
};

export default desensitize;
