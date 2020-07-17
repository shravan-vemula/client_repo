
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');


module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: `${DIST_DIR}/`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'css-loader' },
      //   ]
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader"
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
