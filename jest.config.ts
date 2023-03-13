import type { Config } from 'jest';

// src下需要测试的文件夹名称
const coverageFileName = ['helpers', 'utils'].join(',');
// 需要测试的文件目录
const coverageDir = `./src/{${coverageFileName}}/**/*.ts`;

const config: Config = {
  verbose: true,
  // 是否开启测试报告。可以在这里开启，或者使用 jest --coverage
  collectCoverage: true,
  // 指定测试报告需要包含和排除的文件
  collectCoverageFrom: [
    coverageDir,
    `!./src/{${coverageFileName}}/index.ts`,
    `!./src/{${coverageFileName}}/**/{index,type}.ts`,
  ],
  coverageThreshold: {
    // 所有文件总的覆盖率要求
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
    // 匹配到的单个文件的覆盖率要求
    // 这里也支持通配符的配置
    [coverageDir]: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  // 默认是node环境，但部分浏览器api需要jsdom环境。可在文件中，单独指定环境
  // 若开启jsdom环境，需安装 jest-environment-jsdom 依赖
  testEnvironment: 'node',
};

export default config;
