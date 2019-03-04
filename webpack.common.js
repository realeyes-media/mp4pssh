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
    filename: "mp4pssh.js",
    path: path.resolve(__dirname, "dist"),
    library: "mp4pssh",
    libraryTarget: "umd"
  },
  plugins: [new CleanWebpackPlugin(["dist"])],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
