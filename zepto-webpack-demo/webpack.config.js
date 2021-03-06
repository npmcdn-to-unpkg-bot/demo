module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './dist',
        filename: '[name].js'
    },
    externals: {
        'zepto': 'window.$',
    }
};
