const path = require('path');
const webpack = require('webpack');

const rules = [
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    options: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['last 2 versions', '> 5% in KR'],
            },
            debug: true,
          },
        ],
        '@babel/preset-react',
      ],
      plugins: ['react-hot-loader/babel'],
    },
    exclude: /node_modules/,
  },
  {
    test: /\.css/,
    use: ['style-loader', 'css-loader?modules&importLoaders=1'],
  },
];

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/Demo'],
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'demo.js',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool: 'eval',
  module: { rules },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dev'),
    port: 9001,
    hot: true,
  },
};
