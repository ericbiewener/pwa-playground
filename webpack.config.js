/* eslint-disable @typescript-eslint/no-var-requires */
// For some reason, the following import must be done with `import` syntax, while all the rest must
// be requires.
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const SRC = path.join(__dirname, 'src')
const OUTPUT = path.join(__dirname, 'dist')

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: path.join(SRC, 'main.tsx'),
  output: {
    path: OUTPUT,
    filename: 'app.js',
    devtoolModuleFilenameTemplate: '../[resource-path]',
    publicPath: '/',
  },
  devServer: {
    contentBase: '.',
    historyApiFallback: true,
    disableHostCheck: true,
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
    new CopyPlugin([
      { from: path.join(__dirname, 'manifest.json'), to: OUTPUT },
      {
        from: path.join(__dirname, 'copy-assets'),
        to: path.join(OUTPUT, 'assets'),
      },
    ]),
  ],
}
