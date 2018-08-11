// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    './index.tsx' // the entry point of our app
  ],
  serve: {
    hotClient: true, // enable HMR on the server
    open: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ]
});
