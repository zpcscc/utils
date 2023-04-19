import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { CryptoBase64, dataToString } from '@dxsixpc/utils';
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

const Base64: React.FC = () => {
  // 待加密数据
  const [encryptValue, setEncryptValue] = useState<string>('');
  // 待解密数据
  const [decryptValue, setDecryptValue] = useState<string>('');
  // 加密
  const onEncrypt = () => {
    setDecryptValue(CryptoBase64.encrypt(encryptValue));
  };
  // 解密
  const onDecrypt = () => {
    setEncryptValue(CryptoBase64.decrypt(decryptValue));
  };

  return (
    <Space wrap>
      <Input.TextArea
        style={{ width: '300px', height: '200px' }}
        value={dataToString(encryptValue)}
        onChange={(e) => setEncryptValue(e.target.value)}
      />
      <Space direction='vertical'>
        <Button type='primary' onClick={onEncrypt} icon={<RightOutlined />}>
          加密
        </Button>
        <Button type='primary' onClick={onDecrypt} icon={<LeftOutlined />}>
          解密
        </Button>
      </Space>
      <Input.TextArea
        style={{ width: '300px', height: '200px' }}
        value={dataToString(decryptValue)}
        onChange={(e) => setDecryptValue(e.target.value)}
      />
    </Space>
  );
};

export default Base64;
