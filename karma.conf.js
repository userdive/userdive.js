module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [{ pattern: 'test/*.test.ts' }],
    preprocessors: {
      'test/*.test.ts': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js']
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
      node: {
        child_process: 'empty',
        fs: 'empty'
      }
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
