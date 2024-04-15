const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'calculator-app.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'babel-loader' },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    client: {
      overlay: { warnings: false },
    },
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};





