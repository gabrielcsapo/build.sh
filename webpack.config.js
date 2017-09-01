const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: __dirname,
    filename: "build.js"
  },
  context: __dirname,
  module: {
    loaders: [{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules(?!\/tryitout)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: path.resolve(__dirname, 'src', 'template.html')
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new webpack.DefinePlugin({
      config: fs.readFileSync('./build.json').toString('utf8')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        sequences: true,
        booleans: true,
      }
    })
  ]
}
