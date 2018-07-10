
var path = require ('path')
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var entryPath = path.resolve (__dirname, 'src')
var outputPath = path.resolve (__dirname, 'public')

module.exports = {
    entry : `${entryPath}/index.js`,
    output : {
        path : outputPath,
        filename : 'bundle.js',
        publicPath : outputPath

    },
    // target: 'node',
    // externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.jsx','.json','.html', '.css'] 
    },
    module : {
        rules :[
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : ['babel-loader']
            }
        ]
    }, 
    node: {
        fs: 'empty'
      }
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': JSON.stringify('development')
    //     })
    // ],
    
    
        
    
}