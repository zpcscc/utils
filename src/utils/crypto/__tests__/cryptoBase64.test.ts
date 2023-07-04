import cryptoBase64 from '../cryptoBase64';

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

describe('cryptoBase64', () => {
  test('字符串加密', () => {
    expect(cryptoBase64.encrypt(base64DataStr.encrypt)).toBe(base64DataStr.decrypt);
  });
  test('字符串解密', () => {
    expect(cryptoBase64.decrypt(base64DataStr.decrypt)).toBe(base64DataStr.encrypt);
  });
  test('错误字符串解密', () => {
    expect(cryptoBase64.decrypt('1234')).toBe('格式错误');
  });
  test('json加密', () => {
    expect(cryptoBase64.encrypt(base64DataJson.encrypt)).toBe(base64DataJson.decrypt);
  });
  test('json解密', () => {
    expect(cryptoBase64.decrypt(base64DataJson.decrypt)).toStrictEqual(base64DataJson.encrypt);
  });
});
