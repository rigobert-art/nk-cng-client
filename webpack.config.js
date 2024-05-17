const webpack = require('webpack');

module.exports = {
    // Other webpack configurations...
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "fs": false,  // Disable fs module, as it's not available in the browser
            "zlib": require.resolve("browserify-zlib"),
            "fs": false,
            "tls": false,
            "net": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "crypto-browserify": require.resolve('crypto-browserify'), 
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
};
