const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_TEST
} = require('next/constants')

const getBuildConfig = () => {
  const path = require('path')

  const cssOptions = {
    sassOptions: {
      includePaths: [path.join(process.cwd(), 'src', 'common', 'css')],
    },
  }

  const nextConfig = {
    ...cssOptions,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        include: path.join(process.cwd(), 'src', 'components', 'icon', 'icons'),
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { name: 'removeAttrs', params: { attrs: '(fill)' } },
                { name: 'removeTitle', params: true },
                { name: 'cleanupIDs', params: true },
                { name: 'removeStyleElement', params: true },
              ],
            },
          },
        ],
      })
      return config
    },
  }
  return nextConfig
}

module.exports = (phase) => {
  const shouldAddBuildConfig =
    phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD || phase === PHASE_TEST
  return shouldAddBuildConfig ? getBuildConfig() : {}
}
