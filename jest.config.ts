import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  // 开启jsdom环境，需安装 jest-environment-jsdom 依赖
  testEnvironment: 'jsdom',
};

export default config;
