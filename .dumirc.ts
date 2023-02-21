import { defineConfig } from 'dumi';
import { resolve } from 'path';

const name = 'utils';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: 'https://github.com/dxsixpc/utils',
    },
  },
  base: `/${name}/`,
  publicPath: `/${name}/`,
  alias: {
    '@dxsixpc/utils': resolve(__dirname, './src'),
  },
});
