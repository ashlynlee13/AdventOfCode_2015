const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    },
    {
      test: /\.txt$/i,
        use: 'raw-loader'
    },
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: "eslint-loader"
    }]
  },
  devServer: {
    port: 3000
  },
  mode: "development"
};