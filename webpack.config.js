const path = require('path')
const PORT = process.env.PORT || 3000
const htmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                use:'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            camelCase: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.wav$/,
                use: 'file-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer:{
        open: true,
        port: PORT
    },
    plugins:[
        new cleanWebpackPlugin(path.resolve(__dirname,'dist')),
        new htmlWebpackPlugin({
            title: 'Drum Machine',
            inject: false,
            template: htmlWebpackTemplate,
            appMountId: 'root',
            scripts: ['https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js']
        })
    ]
}