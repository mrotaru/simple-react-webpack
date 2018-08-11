const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const convert = require('koa-connect')
const history = require('connect-history-api-fallback')

const mode = process.env.WEBPACK_SERVE ? 'development' : 'production'

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader:
              mode !== 'production'
                ? 'style-loader'
                : MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader', options: { modules: true } },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  serve: {
    content: path.resolve(__dirname, 'dist'),
    add: app => app.use(convert(history())),
  },
}
