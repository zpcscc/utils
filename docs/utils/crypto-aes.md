---
group:
  title: 数据加密
  order: 0
title: cryptoAES
order: 0
---

# cryptoAES

## 在线演示

<code src="./crypto/cryptoAES"></code>

## API

```typescript
// AES加密配置
interface AESConfigType {
  // 密钥偏移量，16位16进制字符串
  iv: string;
  // 加密模式
  mode: 'CBC' | 'CFB' | 'CTR' | 'CTRGladman' | 'ECB' | 'OFB';
  // 填充方法
  padding: 'AnsiX923' | 'Iso10126' | 'Iso97971' | 'NoPadding' | 'Pkcs7' | 'ZeroPadding';
}

// 加密
cryptoAES.encrypt(data: string, key: string, AEScfg?: AESConfigType);
// 解密
cryptoAES.decrypt(data: string, key: string, AEScfg?: AESConfigType);
```

### 参数

| 参数   | 说明               | 类型          |
| ------ | ------------------ | ------------- |
| data   | 需要加密解密的数据 | any           |
| key    | 密钥               | string        |
| AEScfg | AES 加密的配置项   | AESConfigType |

#### AESConfigType

| 参数    | 说明       | 类型                                                                    | 默认值           |
| ------- | ---------- | ----------------------------------------------------------------------- | ---------------- |
| iv      | 密钥偏移量 | string                                                                  | 0000000000000000 |
| mode    | 加密模式   | `CBC`、`CFB`、`CTR`、`CTRGladman`、`ECB`、`OFB`                         | CBC              |
| padding | 填充方式   | `Pkcs7`、`AnsiX923`、`Iso10126`、`Iso97971`、`NoPadding`、`ZeroPadding` | Pkcs7            |

### 返回

(string):返回加密或解密过的数据。
