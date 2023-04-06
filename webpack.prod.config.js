const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'home': path.resolve(__dirname, 'src/pages/home/home.js'),
        'artikler': path.resolve(__dirname, 'src/pages/artikler/artikler.js'),
        'forestillinger': path.resolve(__dirname, 'src/pages/forestillinger/forestillinger.js'),
        'om-foreningen': path.resolve(__dirname, 'src/pages/om-foreningen/om-foreningen.js'),
        'projekter': path.resolve(__dirname, 'src/pages/projekter/projekter.js'),
        'shop': path.resolve(__dirname, 'src/pages/shop/shop.js'),
    },
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|webp)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], //['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //['style-loader', 'css-loader', 'sass-loader']
            },
            { // erase this if babel fucks up
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],  //compiles to ECMA5
                        plugins: [] // array of specific hacks 
                    }
                }
            },
            { // template for htmlfilesd
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            },
            {
                test: /\.tff$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                },
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Papirteatret Månemandens Penge',
            filename: 'index.html',
            template: 'src/pages/home/home.html',
            chunks: ['home'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Artikler om papirteater',
            filename: 'artikler.html',
            template: 'src/pages/artikler/artikler.html',
            chunks: ['artikler'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Forestillinger på Papirteater',
            filename: 'forestillinger.html',
            template: 'src/pages/forestillinger/forestillinger.html',
            chunks: ['forestillinger'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Om Papirteatret Månemandens Penge',
            filename: 'om-foreningen.html',
            template: 'src/pages/om-foreningen/om-foreningen.html',
            chunks: ['om-foreningen'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Projekter i Månemandens Penge',
            filename: 'projekter.html',
            template: 'src/pages/projekter/projekter.html',
            chunks: ['projekter'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Shop - Ting du kan købe hos Månemandens Penge',
            filename: 'shop.html',
            template: 'src/pages/shop/shop.html',
            chunks: ['shop'],
            minify: true,
        })
    ]
}