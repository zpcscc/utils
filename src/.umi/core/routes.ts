// @ts-nocheck
import { plugin } from './plugin';
import { ApplyPluginsType } from 'D:/workspace/@dxsixpc/utils/node_modules/umi/node_modules/@umijs/runtime';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [require('../dumi/layout').default],
      component: (props) => {
        const React = require('react');
        const {
          default: getDemoRenderArgs,
        } = require('D:/workspace/@dxsixpc/utils/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const {
          default: Previewer,
        } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        const { demos } = React.useContext(context);
        const [renderArgs, setRenderArgs] = React.useState([]);

        // update render args when props changed
        React.useLayoutEffect(() => {
          setRenderArgs(getDemoRenderArgs(props, demos));
        }, [
          props.match.params.uuid,
          props.location.query.wrapper,
          props.location.query.capture,
        ]);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('../dumi/layout').default,
        require('D:/workspace/@dxsixpc/utils/node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/guide',
          component: require('D:/workspace/@dxsixpc/utils/docs/guide.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/guide.md',
            updatedTime: 1675343609975,
            slugs: [],
            title: 'Guide',
          },
          title: 'Guide - @dxsixpc/utils',
        },
        {
          path: '/',
          component: require('D:/workspace/@dxsixpc/utils/docs/index.md')
            .default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1675344903768,
            hero: {
              title: 'utils',
              description: '工具库',
              actions: [
                {
                  text: '文档',
                  link: '/',
                },
                {
                  text: '演示',
                  link: '/',
                },
              ],
            },
            slugs: [],
            title: 'Index',
          },
          title: 'Index - @dxsixpc/utils',
        },
      ],
      title: '@dxsixpc/utils',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
