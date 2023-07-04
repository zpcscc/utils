// AES加密配置
export interface AESConfigType {
  // 密钥偏移量，16位16进制字符串
  iv: string;
  // 加密模式
  mode: 'CBC' | 'CFB' | 'CTR' | 'CTRGladman' | 'ECB' | 'OFB';
  // 填充方法
  padding: 'AnsiX923' | 'Iso10126' | 'Iso97971' | 'NoPadding' | 'Pkcs7' | 'ZeroPadding';
}
