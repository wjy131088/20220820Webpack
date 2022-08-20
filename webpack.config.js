const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/main.js", // 入口
  output: {
    //存放到目录
    path: path.join(__dirname, "lib"), // 出口路径
    //生成的文件名
    filename: "index.js", // 出口文件名
    clean: true, //先清除，再重新打包
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        // css
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // less
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
      //   字体图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/font-[name].[hash:6][ext]",
        },
      },
      //   图片
      {
        test: /\.(png|jpg|gif|jpeg|ico)$/i,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 2 * 1024 } },
        generator: { filename: "imgages/[hash:10][ext][query]" },
      },
    ],
  },
  devServer: {
    open: true,
    port: 30000,
  },
};
