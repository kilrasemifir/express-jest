const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common,{
    mode:'production',
    output: {
        filename: 'server.js',
        libraryTarget: "umd",
        path: path.resolve('./')
    },
})