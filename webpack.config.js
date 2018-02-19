const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const bootstrap = require('bootstrap');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }

            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            //
            // },
            // {
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader']
            //     })
            // }
        ]
        // loaders: [{
        //     test: /\.css$/,
        //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        // }, {
        //     test: /\.scss$/,
        //     loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        // }]
    },
    plugins: [
        // new ExtractTextPlugin('style.css')
        // new ExtractTextPlugin("style.css", {
        //     allChunks: true
        // })
    ]
};