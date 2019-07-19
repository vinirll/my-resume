const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: [
        './app.js'
    ],
    output: {
        filename: 'bundle.js',

        path: resolve(__dirname, 'dist'),

        publicPath: '/'
    },

    context: resolve(__dirname, 'app'),

    devtool: 'inline-source-map',

    devServer: {

        contentBase: resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/'
        // match the output `publicPath`
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules',
                    'postcss-loader',
                ],
            },
        ],
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Vinicius Rodrigues Lima'
        })
    ]
};