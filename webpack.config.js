module.exports = {
        // This is the "main" file which should include all other modules
        entry: __dirname + '/index.js',
        // Where should the compiled file go?
        output: {
                // To the `dist` folder
                path: __dirname + '/dist',
                // With the filename `build.js` so it's dist/build.js
                filename: 'build.js',
                publicPath: '/dist/',
        },
        module: {
                // Special compilation rules
                loaders: [{
                                // Ask webpack to check: If this file ends with .js, then apply some transforms
                                test: /\.js$/,
                                // Transform it with babel
                                loader: 'babel-loader',
                                // don't transform node_modules folder (which don't need to be compiled)
                                exclude: /node_modules/
                        },
                        {
                                test: /\.s[a|c]ss$/,
                                loader: 'style!css!sass'
                        },
                        {
                                test: /\.vue$/,
                                loader: 'vue-loader'
                        }
                ]
        },
        vue: {
                loaders: {
                        scss: 'style!css!sass'
                }
        },
        resolve: {
                alias: {
                        vue: 'vue/dist/vue.js'
                }
        }
}