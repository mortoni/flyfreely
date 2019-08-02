const path = require('path')

module.exports = {
    resolve: {
        modules: ['node_modules', 'src'],
        alias: {
            components: path.resolve('src', 'components'),
            theme: path.resolve('src', 'theme'),
            forms: path.resolve('src', 'forms'),
            widgets: path.resolve('src', 'widgets'),
            assets: path.resolve('src', 'assets'),
            database: path.resolve('src', 'database'),
            context: path.resolve('src', 'context'),
        },
    },
    module: {
        rules: [{
            test: /\.(js|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};