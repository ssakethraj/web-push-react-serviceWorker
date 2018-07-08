
var path = require ('path')
var entryPath = path.resolve (__dirname, 'src')
var outputPath = path.resolve (__dirname, 'public')

module.exports = {
    entry : `${entryPath}/index.js`,
    output : {
        path : outputPath,
        filename : 'bundle.js',
        publicPath : outputPath

    },
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
    
        
    
}