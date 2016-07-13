module.exports = {
  entry: "./lib/game.js",
  output: {
  	filename: "./lib/bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-map',
};
