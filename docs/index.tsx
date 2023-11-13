import * as utils from '@zpcscc/utils';
import { useEffect, type FC } from 'react';

type WindowType = Record<keyof typeof utils, () => any> & Window & typeof globalThis;

const Index: FC = () => {
  useEffect(() => {
    if (!(window as WindowType).getType) {
      // 将此工具库的所有方法绑定到window上，方便在浏览器控制台运行调试
      Object.entries(utils).forEach(([key, value]) => (window[key] = value));
    }
  }, []);
  return <></>;
};

export default Index;
