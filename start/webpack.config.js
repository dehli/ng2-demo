const webpack = require('webpack');
const path    = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {

    entry: APP_DIR + '/main.ts',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.ts$/,   include: APP_DIR, loader: 'ts-loader' },
            { test: /\.html$/, include: APP_DIR, loader: 'html' },
            { test: /\.scss$/, include: APP_DIR, loader: 'raw!sass' }
        ]
    },

    resolve: {
        root: [APP_DIR],
        extensions: ['', '.js', '.ts', '.html']
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    devServer: {
        contentBase: './src/public',
        historyApiFallback: true,
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    }

};

module.exports = config;