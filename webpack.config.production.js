/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': false,
      'process.env': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
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
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "ie >= 9"]}!sass-loader'
    }]
  }
};
