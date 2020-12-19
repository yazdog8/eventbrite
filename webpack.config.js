const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
  },
  devServer: {
    contentBase: ".",
    watchContentBase: true,
    liveReload: true,
    overlay: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  resolve: {
    alias: {
      data: path.resolve(__dirname, "src/data/"),
    },
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css/,
        exclude: /(node_modules)/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
