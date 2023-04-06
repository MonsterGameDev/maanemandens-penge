const path = require('path');
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
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|webp)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //[MiniCssExtractPlugin.loader, 'css-loader'], 
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], //[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] 
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
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'), //let webpack-dev-server look into the dist folder
        },
        devMiddleware: {
            index: 'index.html',  // prolly not nessesary,  tells wevpack-dev-server that the startfile is named index.htmnl
            writeToDisk: true, // or it will run it all in memory
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Papirteatret Månemandens Penge',
            filename: 'index.html',
            template: 'src/pages/home/home.html',
            chunks: ['home'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Artikler om papirteater',
            filename: 'artikler.html',
            template: 'src/pages/artikler/artikler.html',
            chunks: ['artikler'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Forestillinger på Papirteater',
            filename: 'forestillinger.html',
            template: 'src/pages/forestillinger/forestillinger.html',
            chunks: ['forestillinger'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Om Papirteatret Månemandens Penge',
            filename: 'om-foreningen.html',
            template: 'src/pages/om-foreningen/om-foreningen.html',
            chunks: ['om-foreningen'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Projekter i Månemandens Penge',
            filename: 'projekter.html',
            template: 'src/pages/projekter/projekter.html',
            chunks: ['projekter'],
            minify: false,
        }),
        new HtmlWebpackPlugin({
            title: 'Shop - Ting du kan købe hos Månemandens Penge',
            filename: 'shop.html',
            template: 'src/pages/shop/shop.html',
            chunks: ['shop'],
            minify: false,
        })
    ]
}