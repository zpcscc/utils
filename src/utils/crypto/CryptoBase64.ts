import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import { dataToString, stringToData } from 'src/utils';

// 加密
const encrypt = (data: any): string => {
  const dataStr = dataToString(data);
  return Base64.stringify(Utf8.parse(dataStr));
};

// 解密
const decrypt = (base64: string) => {
  const decryptValue = Base64.parse(base64).toString(Utf8);
  return stringToData(decryptValue);
};

export const CryptoBase64 = { encrypt, decrypt };
