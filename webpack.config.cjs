const path = require('path');
const glob = require('glob');

module.exports = {
  entry: glob.sync('./packages/**/*.ts'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'packages'), 'node_modules'],
  },
  mode: 'development',
};
