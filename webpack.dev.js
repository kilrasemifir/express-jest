const NodemonPlugin = require('nodemon-webpack-plugin')
const common = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode:'development',
    watch:true,
    plugins: [
        new NodemonPlugin({
            ignore:['node_modules/*'],
            ext:'.ts'
        })
    ]
})