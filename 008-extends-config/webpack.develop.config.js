const path = require('path');
const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: "development",
  devtool: "sourcemap",
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/js/'
  }
};
