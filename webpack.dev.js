const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        host: 'localhost'
    },
});
