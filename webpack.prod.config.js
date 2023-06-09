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
        'om-papirteater': path.resolve(__dirname, 'src/pages/artikler/om-papirteater/om-papirteater.js'),
        'analog-leg': path.resolve(__dirname, 'src/pages/artikler/analog-leg/analog-leg.js'),
        'article-bygge-projekt': path.resolve(__dirname, 'src/pages/projekter/bygge-projekt/bygge-projekt.js'),
        'maurisk-proscenium': path.resolve(__dirname, 'src/pages/projekter/maurisk-proscenium/maurisk-proscenium.js'),
        'om-dmf': path.resolve(__dirname, 'src/pages/artikler/om-dmf/om-dmf.js'),
        'youtube-channel': path.resolve(__dirname, 'src/pages/projekter/youtube-channel/youtube-channel.js'),
        'de-tre-musketerer': path.resolve(__dirname, 'src/pages/forestillinger/de-tre-musketerer/de-tre-musketerer.js'),
        'noeddebo-praestegaard': path.resolve(__dirname, 'src/pages/forestillinger/noeddebo-praestegaard/noeddebo-praestegaard.js'),
        'skatteoeen': path.resolve(__dirname, 'src/pages/forestillinger/skatteoeen/skatteoeen.js'),
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
                test: /\.(png|jpg|jpeg|webp|svg)$/,
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
        }),
        new HtmlWebpackPlugin({
            title: 'Workshop - Byg dit eget teater',
            filename: 'project-bygge-projekt.html',
            template: 'src/pages/projekter/bygge-projekt/bygge-projekt.html',
            chunks: ['article-bygge-projekt'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Det mauriske Proscenium',
            filename: 'project-maurisk-proscenium.html',
            template: 'src/pages/projekter/maurisk-proscenium/maurisk-proscenium.html',
            chunks: ['maurisk-proscenium'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Hvad er Papirteater',
            filename: 'article-om-papirteater.html',
            template: 'src/pages/artikler/om-papirteater/om-papirteater.html',
            chunks: ['om-papirteater'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Om Dansk Modelteater Forening',
            filename: 'article-om-dmf.html',
            template: 'src/pages/artikler/om-dmf/om-dmf.html',
            chunks: ['om-dmf'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Analog leg og udvikling',
            filename: 'article-analog-leg.html',
            template: 'src/pages/artikler/analog-leg/analog-leg.html',
            chunks: ['analog-leg'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Youtube Channel',
            filename: 'project-youtube-channel.html',
            template: 'src/pages/projekter/youtube-channel/youtube-channel.html',
            chunks: ['youtube-channel'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'De tre Musketerer',
            filename: 'forestilling-de-tre-musketerer.html',
            template: 'src/pages/forestillinger/de-tre-musketerer/de-tre-musketerer.html',
            chunks: ['de-tre-musketerer'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Nøddebo Præstegård',
            filename: 'forestilling-noeddebo-praestegaard.html',
            template: 'src/pages/forestillinger/noeddebo-praestegaard/noeddebo-praestegaard.html',
            chunks: ['noeddebo-praestegaard'],
            minify: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Skatteøen',
            filename: 'forestilling-skatteoeen.html',
            template: 'src/pages/forestillinger/skatteoeen/skatteoeen.html',
            chunks: ['skatteoeen'],
            minify: true,
        })

    ]
}