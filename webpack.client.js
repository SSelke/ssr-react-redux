const path = require('path');

module.exports = {
    //tells webpack we are working with node
    target: 'node',
    //
    mode: 'production',
    entry: './src/client.js',
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
            }
        ]
    }
}