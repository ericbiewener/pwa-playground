/* eslint-disable @typescript-eslint/no-var-requires */
// For some reason, the following import must be done with `import` syntax, while all the rest must
// be requires.
import { Configuration } from 'webpack'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC = path.join(__dirname, 'src')

const config: Configuration = {
  mode: process.env.NODE_ENV as 'development' | 'production',
  target: 'web',
  entry: path.join(SRC, 'main.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC, 'index.html'),
      filename: './index.html',
    }),
  ],
}

module.exports = config
