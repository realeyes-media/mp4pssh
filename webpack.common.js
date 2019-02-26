const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: {
    app: "./src/index.ts",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        test: /\.(ts|js)$/,
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin(["dist"])],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
