const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                quality: 65
              },
              pngquant: {
                quality: '65-90'
              }
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              root: path.resolve(__dirname, 'dist'),
              minimize: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
        {from: 'src/images', to: 'images'}
      ]
    ),
    new HtmlWebpackPlugin({
        template: './src/index.html'
      }
    )
  ],
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
