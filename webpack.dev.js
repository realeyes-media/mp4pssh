const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devServer: {
    contentBase: "./dist/",
    open: false,
  },
  devtool: "inline-source-map",
  mode: "development",
});
