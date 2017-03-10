let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');


let BUILD_DIR = path.resolve(__dirname, 'dist');
let APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader',
                exclude: ['/node_modules/', '/bower_components/'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

        ],
    },
    // devServer: {
    //     contentBase: 'src'
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html'
        })
    ]
};
