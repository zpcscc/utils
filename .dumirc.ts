import { defineConfig } from 'dumi';
import { resolve } from 'path';

const name = 'utils';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/zpcscc/${name}`
    },
    logo: 'https://zpcscc.top/img/logo.png'
  },
  favicons: ['https://zpcscc.top/img/favicon.ico'],
  base: `/${name}/`,
  publicPath: `/${name}/`,
  alias: {
    '@zpcscc/utils': resolve(__dirname, './src'),
    src: resolve(__dirname, './src'),
    docs: resolve(__dirname, './docs')
  }
});
