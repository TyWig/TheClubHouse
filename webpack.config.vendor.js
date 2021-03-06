const path = require('path');
const webpack = require('webpack');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return [{
        stats: { 
            modules: false,
            children: false,
        },
        resolve: {
            extensions: ['.js']
        },
        optimization: {
            minimizer: [
                new OptimizeCSSPlugin({})
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'vendor.css',
                chunkFilename: '[id].css'
            }),
            new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
            new webpack.DllPlugin({
                path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
                name: '[name]_[hash]'
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isDevBuild ? '"development"' : '"production"'
            })
        ].concat(isDevBuild ? [] : [
            new webpack.optimize.UglifyJsPlugin(),
        ]),
        module: {
            rules: [
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, 
                    use: 'url-loader?limit=100000' 
                },
                {
                    test: /\.css$/, 
                    use:  [
                        {
                            loader: MiniCssExtractPlugin.loader
                        },
                        'css-loader'
                    ]
                },
            ]
        },
        entry: {
            vendor: [
              'bootstrap/dist/css/bootstrap.min.css',
              'bootstrap-vue/dist/bootstrap-vue.min.css',
              'fullcalendar/dist/fullcalendar.css',
              'font-awesome/css/font-awesome.css',
              'event-source-polyfill',
              'vue',
              'vuex', 
              'axios',
              'vue-router',
              'jquery',
              'popper.js'
            ],
        },
        output: {
            path: path.join(__dirname, 'wwwroot', 'dist'),
            publicPath: '/dist/',
            filename: '[name].js',
            library: '[name]_[hash]',
        }
    }];
};
