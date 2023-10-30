const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		index: './template/js/index.js'
	},
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].min.js'
	},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}