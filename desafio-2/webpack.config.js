const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({filename: "./style.css"});

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    devtool: "source-map",
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        contentBase: PATHS.build,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    use: [{loader: "css-loader"}, {loader: "sass-loader"}]
                })
            }
        ]
    },
    plugins: [
        extractSass
    ]
};