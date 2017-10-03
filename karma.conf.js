const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    basePath: '',
    frameworks: ['mocha'],
    files: [{ pattern: 'test/*.test.ts' }],
    preprocessors: {
      'test/*.test.ts': ['webpack']
    },
    webpack: {
      devtool: webpackConfig.devtool,
      module: {
        rules: webpackConfig.module.rules,
      },
      node: { fs: 'empty' },
      resolve: webpackConfig.resolve
    },
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
      stats: {
        colors: true
      }
    },
    coverageReporter: {
      reporters: [{ type: 'lcov' }, { type: 'text' }]
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    concurrency: Infinity
  })
}
