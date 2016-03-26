/* eslint-disable no-var */
'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': true,
      'process.env': JSON.stringify('development')
    })
  ],
  resolve: {
    alias: {
      'styles': __dirname + '/src/styles',
      'components': __dirname + '/src/components/',
      'containers': __dirname + '/src/containers/',
      'reducers': __dirname + '/src/reducers/',
      'utils': __dirname + '/src/utils/',
      'actions': __dirname + '/src/actions/'
    }
  },
  stats: {
    colors: true,
    reasons: false
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "ie >= 9"]}!sass-loader'
    }
  ]
  }
};
