/**
 * @module lib/compile
 */

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

/**
 * compiles the given build configuration to a single html report
 * @param  {Object}   options  - contains the necessary options for compile
 * @param  {String}   options.output  - the directory that the report will be built in
 * @param  {Object}   options.config  - the build configuration object create by Pipeline
 * @param  {Function} callback - function to call when compile has either failed or completed
 */
module.exports = function compile({ output, config }, callback) {
  return webpack({
    entry: path.resolve(__dirname, '..', 'src', 'index.js'),
    output: {
      path: output,
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
        template: path.resolve(__dirname, '..', 'src', 'template.html')
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        config: JSON.stringify(config)
      }),
      new MinifyPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
  }, function(err, stats) {
    if (stats.compilation.errors && stats.compilation.errors.length > 0) {
      return callback(stats.compilation.errors);
    } // eslint-disable-line
    if (err) {
      return callback(err);
    }
    fs.unlinkSync(path.resolve(output, 'build.js'));
    return callback();
  });
}
