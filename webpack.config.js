const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
      },
      devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 4000,
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
      ],
      resolve: {
        modules: [__dirname, "src","node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
      },
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            loader: "awesome-typescript-loader",
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.png|svg|jpg|gif$/,
            use: ["file-loader"],
          }, 
        ],
      }
}