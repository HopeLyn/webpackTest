const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin'); 
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  // entry: {
  //   app: './src/index.js',
  // },
  // plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Out Mana'
    // }),
    // new CleanWebpackPlugin(),
    // new ManifestPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  // ],
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  output: {
    // filename: '[name].bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 避免文件被 minified，也可以通过 webpack --mode development 的方式指定，另外 usedExports 是为了看 module 是否被使用
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         'style-loader',
  //         'css-loader'
  //       ]
  //     },
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)$/,
  //       use: [
  //         'url-loader'
  //       ]
  //     }
  //   ]
  // }
};