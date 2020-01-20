const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const { createMiddleware } = require('umi-mock');

/**
 * @type {import('webpack/declarations/WebpackOptions').WebpackOptions}
 */
module.exports = {
  entry: './src/main',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          // 导入自定义元素源代码才有 tag、类型绑定
          allowTsInNodeModules: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: {
    publicPath: '/',
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial',
      fileBlacklist: [/\.map$/, /hot-update\.js$/],
    }),
    new PreloadWebpackPlugin({
      rel: 'prefetch',
      include: 'asyncChunks',
    }),
    new CopyWebpackPlugin([{ from: './public', to: './' }]),
    // manifest
    // service worker
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: './build',
    historyApiFallback: true,
    ...(process.env.API === 'mock'
      ? {
          before: function(app) {
            app.use(
              createMiddleware({
                cwd: __dirname,
                absSrcPath: path.join(__dirname, 'src'),
              }).middleware,
            );
          },
        }
      : {
          proxy: {
            '/api': {
              changeOrigin: true,
              target: process.env.API || 'https://jsonplaceholder.typicode.com',
              pathRewrite: { '^/api': '' },
            },
          },
        }),
  },
  devtool: 'source-map',
};
