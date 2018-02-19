const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.(css|sass|scss)/,
            //     use: ExtractTextPlugin.extract({
            //             fallback: 'style-loader',
            //             use: 'css-loader!sass-loader'
            //         }
            //     )
            // }
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/jpg',
                        name: '/assets/[name].[ext]'
                    }
                }
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        mimetype: 'image/png',
                        name: '/assets/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
};
