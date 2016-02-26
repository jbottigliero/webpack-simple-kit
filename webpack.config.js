'use strict';

const path = require('path');

let configuration = {
  entry: './source/index.js',
  
  output: {
    filename: '[name].bundle.js',
    path: './build'
  },
  
  module: { 
    loaders: [] 
  }
};

/**
 * ES2015 via Babel
 * https://babeljs.io/docs/setup/#webpack
 */
configuration.module.loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
});
/***********/

/**
 * SASS via sass-loader
 * https://github.com/jtangelder/sass-loader
 */
configuration.module.loaders.push({ 
  test: /\.s(a|c)ss$/,
  loader: 'style-loader!css-loader!sass-loader'
});

/**
 * Include the node_modules folder to account for vendor/third party 
 * SASS libraries.
 * https://github.com/jtangelder/sass-loader#sass-options
 */
configuration.sassLoader = {
  includePaths: [path.resolve(__dirname, './node_modules')]
};
/***********/

/**
 * Assets – Fonts + Images
 * Configured to account for Bootstrap (bootstrap-sass), but should
 * work for most requirements.
 */
configuration.module.loaders.push(
  {
    test: /\.woff(2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
  },
  {
    test: /\.png/,
    loader: 'url-loader?limit=10000&mimetype=image/png'
  }
);
/***********/

module.exports = configuration;