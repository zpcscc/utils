import * as _ from '@dxsixpc/utils';
// import * as l from 'lodash';
import { useEffect, type FC } from 'react';

type WindowType = Record<keyof typeof _, () => any> & Window & typeof globalThis;

const Index: FC = () => {
  // console.log('lodash', l.toInteger(-123.23));
  // console.log('util', _.toInteger(-123.23));

  useEffect(() => {
    if (!(window as WindowType).chunk) {
      // 将此工具库的所有方法绑定到window上，方便在浏览器控制台运行调试
      Object.entries(_).forEach(([key, value]) => (window[key] = value));
    }
  }, []);

  return <></>;
};

export default Index;
