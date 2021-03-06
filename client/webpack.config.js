//This file looks through all of the source JS and combines it into one
//file. It transforms any JSX code into vanilla JS. Output all into one
//file where we specify. This takes this code and allows current browsers
//to be able to read the JSX.
require('webpack')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  node: {
    net: 'empty',
    tls: 'empty', 
    dns: 'empty',
    fs: 'empty'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    inline: false,
    historyApiFallback: true,
    contentBase: './'
  }
};