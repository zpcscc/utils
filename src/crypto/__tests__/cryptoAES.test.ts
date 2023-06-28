import cryptoAES from '../cryptoAES';
import type { AESConfigType } from '../type';

const encryptStr = 'Hello World!';
const encryptJson = {
  name: '这是待加密的原始数据',
  array: [1, 2, 3],
};

// AES加密解密数据
const AESDataStr = {
  encrypt: encryptStr,
  decrypt: '6CCE20A4F9B219AC8A929A449C13E9C2',
};
const AESDataJson = {
  encrypt: encryptJson,
  decrypt:
    '484F6267D799F956378AE0A12F62DBD1CC83D92FB1F5A7B735DB7CDE92EF704E22834BC9439E10444497474371992FB7E0C1A4D5DA87671A0DB66D2B547B803B',
};

const key = '1111111111111111';
const AESCfg: AESConfigType = {
  iv: '0000000000000000',
  mode: 'CBC',
  padding: 'Pkcs7',
};

describe('cryptoAES', () => {
  test('字符串加密', () => {
    expect(cryptoAES.encrypt(AESDataStr.encrypt, key, AESCfg)).toBe(AESDataStr.decrypt);
  });
  test('字符串解密', () => {
    expect(cryptoAES.decrypt(AESDataStr.decrypt, key, AESCfg)).toBe(AESDataStr.encrypt);
  });
  test('json加密', () => {
    expect(cryptoAES.encrypt(AESDataJson.encrypt, key, AESCfg)).toBe(AESDataJson.decrypt);
  });
  test('json解密', () => {
    expect(cryptoAES.decrypt(AESDataJson.decrypt, key, AESCfg)).toStrictEqual(AESDataJson.encrypt);
  });
});
