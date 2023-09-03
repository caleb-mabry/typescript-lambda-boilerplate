const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ZipPlugin({
            path: 'zip',
            filename: 'output.zip',
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        globalObject: 'this',
    },

};