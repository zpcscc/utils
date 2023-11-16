import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  // 是否开启测试报告。可以在这里开启，或者使用 jest --coverage
  collectCoverage: false,
  // 指定测试报告需要包含和排除的文件
  collectCoverageFrom: [
    './src/**/*.ts',
    '!./src/**/{type}.ts',
    '!./src/{index,types,typings.d}.ts',
    '!./src/z-z-dev/**/*.ts'
  ],
  // 排除完整的某个文件夹不进行测试
  // modulePathIgnorePatterns: ['<rootDir>/lodash-dev'],
  rootDir: './',
  modulePaths: ['<rootDir>'],
  coverageThreshold: {
    // 所有文件总的覆盖率要求
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
    // 匹配到的单个文件的覆盖率要求
    // 这里也支持通配符的配置
    // [./src/**/*.ts]: {
    //   statements: 100,
    //   branches: 100,
    //   functions: 100,
    //   lines: 100,
    // },
  },
  // 默认是node环境，但部分浏览器api需要jsdom环境。可在文件中，单独指定环境
  // 若开启jsdom环境，需安装 jest-environment-jsdom 依赖
  testEnvironment: 'node'
};

export default config;
