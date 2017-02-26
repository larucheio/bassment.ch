const path = require('path')

module.exports = {
  // entry: './webpack/entry.js',
  entry: path.resolve(__dirname, 'webpack/entry.js'),
  output: {
    path: path.resolve(__dirname, 'src/assets/js/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      }
    ]
  }
}
