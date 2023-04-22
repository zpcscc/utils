import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import { dataToString, stringToData } from '../dataOrString';

/**
 * @name base64加密
 * @param {any} data 需要加密的数据
 * @returns {string} 加密后的数据
 */
const encrypt = (data: any): string => {
  const dataStr = dataToString(data);
  return Base64.stringify(Utf8.parse(dataStr));
};

/**
 * @name base64解密
 * @param {any} data 需要解密的数据
 * @returns {string} 解密后的数据
 */
const decrypt = (base64: string) => {
  let decryptValue = '';
  try {
    decryptValue = Base64.parse(base64).toString(Utf8);
  } catch {
    decryptValue = '格式错误';
  }
  return stringToData(decryptValue);
};

const CryptoBase64 = { encrypt, decrypt };
export default CryptoBase64;
