const webpackConfig = require('./webpack.config')

module.exports = function (config) {
  config.set({
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    basePath: '',
    frameworks: ['mocha', 'karma-typescript'],
    files: [{ pattern: 'src/*.ts' }, { pattern: 'test/**.test.ts' }],
    preprocessors: {
      'src/*.ts': ['karma-typescript', 'coverage'],
      'test/*.test.ts': ['karma-typescript']
    },
    webpack: {
      devtool: webpackConfig.devtool,
      module: {
        rules: webpackConfig.module.rules
      },
      node: { fs: 'empty' },
      resolve: webpackConfig.resolve
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.test.json'
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
    reporters: ['mocha', 'coverage', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    concurrency: Infinity
  })
}
