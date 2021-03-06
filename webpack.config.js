const path = require('path');
const webpack = require('webpack');

const rules = [
  { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
  {
    test: /\.css/,
    use: ['style-loader', 'css-loader?modules&importLoaders=1'],
  },
];

module.exports = [
  {
    entry: './src/ReactVote',
    mode: 'production',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'react-vote.js',
      libraryTarget: 'commonjs2',
    },
    devtool: 'source-map',
    module: { rules },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.json', '.js', '.jsx'],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  },
  {
    entry: './src/Demo',
    mode: 'production',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'demo.js',
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.json', '.js', '.jsx'],
    },
    devtool: 'source-map',
    module: { rules },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  },
];
