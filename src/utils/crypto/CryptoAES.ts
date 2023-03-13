import { AES, enc, mode, pad } from 'crypto-js';
import { dataToString, stringToData } from '../dataOrString';
import type { AESConfigType } from './type';

const { Base64, Hex, Utf8 } = enc;

// 处理密钥,确保是16位字符串
const keyHandler = (key: string) => `${key}`.slice(0, 16).padEnd(16);

const defaultCfg: AESConfigType = {
  iv: '0000000000000000',
  mode: 'CBC',
  padding: 'Pkcs7',
};

// 处理配置
const formatCfg = (aesCfg?: AESConfigType) => {
  const config = { ...defaultCfg, ...aesCfg };
  return {
    iv: Utf8.parse(keyHandler(config.iv)),
    mode: mode[config.mode],
    padding: pad[config.padding],
  };
};

// 加密
const encrypt = (data: any, key: string, AEScfg?: AESConfigType): string => {
  const dataStr = dataToString(data);
  const utf8Data = Utf8.parse(dataStr);
  const utf8Key = Utf8.parse(keyHandler(key));
  const config = formatCfg(AEScfg);
  const encryptedDS = AES.encrypt(utf8Data, utf8Key, config);
  return encryptedDS.ciphertext.toString().toUpperCase();
};

// 解密
const decrypt = (data: string, key: string, AEScfg?: AESConfigType): any => {
  const base64Data = Base64.stringify(Hex.parse(data));
  const utf8Key = Utf8.parse(keyHandler(key));
  const config = formatCfg(AEScfg);
  const decryptedDS = AES.decrypt(base64Data, utf8Key, config);
  const decryptedStr = decryptedDS.toString(Utf8);
  return stringToData(decryptedStr);
};

const CryptoAES = { encrypt, decrypt };
export default CryptoAES;
