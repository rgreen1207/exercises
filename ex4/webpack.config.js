const path = require('path');

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
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  entry: {
    './src/index.js',
    './src/images/*,
    './src/style1.css'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist')
  }
};
