const withTypeScript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
module.exports = withTypeScript(
  withCSS({
    cssLoaderOptions: {
      camelCase: true,
      namedExport: true,
      modules: true
    },
    webpack(config, options) {
      if (!options.isServer) {
        for (let entry of options.defaultLoaders.css) {
          if (entry.loader === 'css-loader') {
            entry.loader = 'typings-for-css-modules-loader';
            break;
          }
        }
      }
      return config;
    }
  })
);
