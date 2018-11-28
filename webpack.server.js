const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    //tells webpack we are working with node
    target: 'node',
    //
    mode: 'production',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        //where we want to output the file **this is where build folder is created
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
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
                            targets: { browsers: ['last 2 versions']}
                        }]
                    ],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]

}