const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: path.resolve(__dirname, '../', 'src', 'index.js'),

  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '../', 'dist'),
    clean: true,
  },

  resolve: {
    modules: [path.resolve(__dirname, '../', 'src'), 'node_modules'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'vanillaJS app',
      template: path.resolve(__dirname, '../', 'src', 'index.html'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              encoding: true,
            },
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
        },
      },
    },
  },
};

module.exports = webpackConfig;
