import { defineConfig } from 'dumi';

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
});
