import { defineConfig } from 'dumi';
import { resolve } from 'path';

const name = 'utils';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/dxsixpc/${name}`,
    },
    logo: `/${name}/logo.png`,
  },
  base: `/${name}/`,
  publicPath: `/${name}/`,
  alias: {
    '@dxsixpc/utils': resolve(__dirname, './src'),
    docs: resolve(__dirname, './docs'),
  },
});
