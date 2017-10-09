'use strict';

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: path.join(__dirname, 'views', 'index.html'),
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [path.join(__dirname, 'views', 'index.js')],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    'presets': [
                        'es2015',
                        'react',
                        'stage-2'
                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '/views/images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/'
    },

    plugins: [
        HTMLWebpackPluginConfig
    ]
};