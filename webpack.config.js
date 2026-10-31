const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "fonts/[name][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"]
      },
      {
        test: /\.csv$/i,
        use: ["csv-loader"]
      },
      {
        test: /\.(woff2?|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    static: "./dist",
    port: 8080,
    open: true,
    hot: true
  },
  mode: "development"
};