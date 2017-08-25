const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = ({ output, config }, callback) => {
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
        template: path.resolve(__dirname, 'template.html')
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        config: JSON.stringify(config)
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
      }),
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
