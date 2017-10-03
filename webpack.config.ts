const path = require('path')

module.exports = {
  entry: {
    userdive: path.join(__dirname, 'src/index.ts')
  },
  output: {
    path: path.join(__dirname, 'lib/build/'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  }
}
