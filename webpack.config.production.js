const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');


const config = {
  entry: {
    app: './src/index',
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: 'https://www.plural.name/'
  },
  plugins: [
    // Extract bundle and manifest files. Manifest is needed for reliable caching.
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': false,
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html'
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
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }]
  }
};

module.exports = validate(config);
