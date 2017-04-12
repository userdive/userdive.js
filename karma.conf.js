module.exports = function (config) {
  config.set({
    basePath: '',
    hostname: 'www.0.0.0.0.xip.io',
    frameworks: ['mocha'],
    files: [
      { pattern: 'test/*.test.js' }
    ],
    preprocessors: {
      'test/*.test.js': ['webpack']
    },
    webpack: {
      module: {
        rules: [{
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }]
      },
      node: { fs: 'empty' }
    },
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
      stats: {
        colors: true
      }
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox'],
    singleRun: true,
    concurrency: Infinity
  })
}
