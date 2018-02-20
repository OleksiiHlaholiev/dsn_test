const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry:   './src/js/app.js',
  output:  {
    path:     path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module:  {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false // set to true for production
          }
        }]
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8000,
              name: 'assets/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.css$|\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                minimize: false, // set to true for production
              }
            },
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }]
        })
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new ExtractTextPlugin('style.css'),

    // uncomment for production
     /* new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          inline: 1
        }
      }
    }), */
  ],
  devServer: {
    contentBase: './dist'
  },
};
