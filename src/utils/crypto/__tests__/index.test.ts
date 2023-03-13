import CryptoAES from '../CryptoAES';
import CryptoBase64 from '../CryptoBase64';
import type { AESConfigType } from '../type';

const encryptStr = 'Hello World!';
const encryptJson = {
  name: '这是待加密的原始数据',
  array: [1, 2, 3],
};

// base64加密解密数据
const base64DataStr = {
  encrypt: encryptStr,
  decrypt: 'SGVsbG8gV29ybGQh',
};
const base64DataJson = {
  encrypt: encryptJson,
  decrypt: 'eyJuYW1lIjoi6L+Z5piv5b6F5Yqg5a+G55qE5Y6f5aeL5pWw5o2uIiwiYXJyYXkiOlsxLDIsM119',
};

describe('CryptoBase64', () => {
  test('字符串加密', () => {
    expect(CryptoBase64.encrypt(base64DataStr.encrypt)).toBe(base64DataStr.decrypt);
  });
  test('字符串解密', () => {
    expect(CryptoBase64.decrypt(base64DataStr.decrypt)).toBe(base64DataStr.encrypt);
  });
  test('json加密', () => {
    expect(CryptoBase64.encrypt(base64DataJson.encrypt)).toBe(base64DataJson.decrypt);
  });
  test('json解密', () => {
    expect(CryptoBase64.decrypt(base64DataJson.decrypt)).toStrictEqual(base64DataJson.encrypt);
  });
});

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

describe('CryptoAES', () => {
  test('字符串加密', () => {
    expect(CryptoAES.encrypt(AESDataStr.encrypt, key, AESCfg)).toBe(AESDataStr.decrypt);
  });
  test('字符串解密', () => {
    expect(CryptoAES.decrypt(AESDataStr.decrypt, key, AESCfg)).toBe(AESDataStr.encrypt);
  });
  test('json加密', () => {
    expect(CryptoAES.encrypt(AESDataJson.encrypt, key, AESCfg)).toBe(AESDataJson.decrypt);
  });
  test('json解密', () => {
    expect(CryptoAES.decrypt(AESDataJson.decrypt, key, AESCfg)).toStrictEqual(AESDataJson.encrypt);
  });
});
