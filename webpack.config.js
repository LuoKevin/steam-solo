const webpack = require('webpack');
const path = require('path');

module.exports = {
    devServer: {
    publicPath: '/build/',
    proxy: {
        '/api': {
            target : 'http://localhost:3000',
            pathRewrite: {'^/api' : ''}
        }
    }
    },
    mode : 'development',
    entry : ['./client/index.js'],
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}