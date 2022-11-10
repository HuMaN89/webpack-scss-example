const path = require("path");
const HtmlWePackPlugin = require("html-webpack-plugin");
const WebpackObfuscator = require("webpack-obfuscator");
const JavaScriptObfuscator = require("webpack-obfuscator");

module.exports = {
  mode: "development",
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: ["src/styles/vars.scss"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWePackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),

    new JavaScriptObfuscator(
      {
        rotateStringArray: true,
      },
      ["abc.js"]
    ),
  ],
  entry: {
    abc: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 2999,
  },
};
