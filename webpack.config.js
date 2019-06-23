const path = require('path')

module.exports = {
    resolve: {
        modules: ['node_modules', 'src'],
        alias: {
            components: path.resolve('src', 'components'),
            theme: path.resolve('src', 'theme'),
            forms: path.resolve('src', 'forms'),
            widgets: path.resolve('src', 'widgets'),
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