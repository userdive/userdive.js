const { module: { rules }, resolve } = require('./webpack.config')

module.exports = (config: any) => {
  config.set({
    mime: {
      'text/x-typescript': ['ts']
    },
    frameworks: ['mocha'],
    files: [{ pattern: 'test/**.test.ts' }],
    preprocessors: {
      'test/*.test.ts': ['webpack']
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: ['webpack-espower-loader', 'ts-loader']
          },
          {
            test: /\.ts$/,
            enforce: 'post',
            use: { loader: 'istanbul-instrumenter-loader' },
            exclude: [/node_modules/, /test/]
          }
        ]
      },
      node: { fs: 'empty' },
      resolve
    },
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
      stats: {
        colors: true
      }
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary']
    },
    mochaReporter: {
      showDiff: true
    },
    reporters: ['mocha', 'coverage-istanbul'],
    browsers: ['Chrome', 'Firefox']
  })
}
