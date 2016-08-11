const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

const config = {
  devtool: 'source-map',
  entry: {
    app: './src/index',
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__DEVTOOLS__': true,
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
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
  stats: {
    colors: true,
    reasons: false
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};

module.exports = validate(config);
