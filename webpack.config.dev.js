const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  stats: 'none',
  entry: [
    path.resolve(__dirname, 'src/index'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
};
