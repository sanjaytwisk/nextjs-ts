const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

const getBuildConfig = (...args) => {
  const withPugins = require('next-compose-plugins')
  const withTypeScript = require('@zeit/next-typescript')
  const withCSS = require('@zeit/next-css')
  const postcssPresetEnv = require('postcss-preset-env')
  const postcssNested = require('postcss-nested')
  const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
  const postcssPresetEnvOptions = {
    features: {
      'custom-media-queries': true,
      'custom-selectors': true,
    },
  }

  const cssOptions = {
    postcssLoaderOptions: {
      plugins: [postcssPresetEnv(postcssPresetEnvOptions), postcssNested()],
    },
  }

  const nextConfig = {
    webpack(config, options) {
      if (options.isServer) {
        config.plugins.push(new ForkTsCheckerWebpackPlugin())
      }
      config.module.rules.push({
        test: /\.svg$/,
        include: /src\/components\/icon\/icons/,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeAttrs: { attrs: '(fill)' } },
                { removeTitle: true },
                { cleanupIDs: true },
                { removeStyleElement: true },
              ],
            },
          },
        ],
      })
      return config
    },
  }
  return withPugins([[withTypeScript], [withCSS, cssOptions]], nextConfig)(
    ...args
  )
}

module.exports = (phase, ...rest) => {
  const shouldAddBuildConfig =
    phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD
  return shouldAddBuildConfig ? getBuildConfig(phase, ...rest) : {}
}
