module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'bundle.js',
    },
    watch: true,
    devtool: 'source-map',
    module: {},
}
