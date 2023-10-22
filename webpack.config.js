const path = require('path');

module.exports = {
  entry: './src/js/main.ts',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  mode: 'production'
}