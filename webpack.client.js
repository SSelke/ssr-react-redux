const path = require('path');
const webConfig = require('./webConfig');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //tells webpack we are working with node
    target: 'node',
    //
    mode: webConfig.environment,
    entry: ['./src/client.js', './src/assets/scss/styles.scss'],
    output: {
        filename: 'client_bundle.js',
        //where we want to output the file **this is where build folder is created
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        '@babel/preset-react',
                        ['@babel/preset-env', {
                            //Tells webpack to support last 2 browser versions
                            targets: { browsers: ['last 2 versions'] }
                        }]
                    ],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
                            outputPath: 'assets/css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            url: true,
                            root: webConfig.siteURL
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets/graphics', to: 'assets/graphics' }
        ])
    ]
}