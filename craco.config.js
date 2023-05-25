const cracoAlias = require('craco-alias');
const webpackResolve = require('craco-webpack-resolve');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|mp3|wav)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: './src',
        source: 'jsconfig',
      },
    },
    {
      plugin: webpackResolve,
      options: {
        resolve: {
          fallback: {
            'react/jsx-runtime': 'react/jsx-runtime.js',
            'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
          },
        },
      },
    },
  ],
  style: {
    postcssOptions: {},
  },
  webpack: {
    configure: {
      ignoreWarnings: [{ message: /Failed to parse source map/ }],
    },
  },
};
