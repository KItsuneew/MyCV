// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    target: 'web',
    entry: './src/index.ts',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),

    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(svg|png|jpg|gif|webp)$/i,
                type: 'asset/inline',
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },

            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

    } else {
        config.mode = 'development';
    }
    return config;
};
