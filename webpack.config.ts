const path = require('path')

module.exports = {
  entry: {
    index: path.join(__dirname, '/src/index.ts')
  },
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }]
  }
}
