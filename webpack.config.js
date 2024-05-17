const nodeExternals = require('webpack-node-externals');

module.exports = {
    // ... other Webpack configuration options
    target: 'web', // Make web-specific environment variables available to the bundled code
    externals: [nodeExternals()], // Exclude Node.js built-in modules from the bundled code
    resolve: {
        fallback: {
            path: require.resolve('node-libs-browser/mock/path'),
            "path": require.resolve("path-browserify"),
            "fs": require.resolve('fs-browserify'),
            "crypto": require.resolve('crypto-browserify'),
            "crypto-browserify": require.resolve('crypto-browserify'),
        },
    },
};