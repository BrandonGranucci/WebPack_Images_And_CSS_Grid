const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    // Set the mode to development or production
    mode: 'development',
    watch: true,

    // Control how source maps are generated
    devtool: 'inline-source-map',

    entry: {
        index: 'js/index.js',
    },

    output: {
        filename: 'js/TestJs.js',
        path: path.resolve(__dirname, 'WebPack_Images_And_CSS_Grid'),
        clean: true,
    },
    devServer: {
        contentBase: path.join(__dirname, 'WebPack_Images_And_CSS_Grid'),
        open: true,
        compress: true,
        port: 8080,

    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "WebPack_Images_And_CSS_Grid",
                    globOptions: {
                        ignore: [
                            '**/js/index.js',
                        ]
                    }
                }],
            options: {
                concurrency: 100,
            },
        }),
    ],
};