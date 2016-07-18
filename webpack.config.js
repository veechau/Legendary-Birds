module.exports = {
  entry: "./lib/gameview.js",
  output: {
  	filename: "./lib/bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-map',
};
