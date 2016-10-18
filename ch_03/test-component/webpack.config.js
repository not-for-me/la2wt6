var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/main.ts",
    polyfills: "./src/polyfills.ts"
  },
  output: {
    path: 'dist',
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      /**
       * 
       */
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
      /**
       * 
       */
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      /**
       * 
       */
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'polyfills'], minChunks: Infinity }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
