// 配置不同的环境主要实现如下功能:
// 1.启动不同的环境代理的接口不同
// 2.启动不同的环境打包不同
const devEnv = require("./config/dev.env.js"); // 本地环境
const proEnv = require("./config/pro.env"); // 生产环境
const testEnv = require("./config/test.env"); // 测试环境
const env = process.env.NODE_ENV;
let target = "http://127.0.0.1:7001"; // 代理的路径
let dist = "dist"; // 生产和测试环境生成的文件放置
if (env === "production") {
  // 生产环境
  target = proEnv.hosturl;
  dist = "dist";
} else if (env === "test") {
  // 测试环境
  target = testEnv.hosturl;
  dist = "test";
} else {
  // 本地环境
  target = devEnv.hosturl;
}
module.exports = {
  publicPath: "/", // 部署应用包时的基本 URL。
  outputDir: dist, // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。-测试时生成在tes文件夹下,-生成环境生成在dist文件下
  assetsDir: "", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // indexPath:'index.html',//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  // filenameHashing:true,//默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名
  lintOnSave: false,
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  transpileDependencies: [], // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  configureWebpack: config => {
    console.log(6666666666666, env, target);
  },
  // chainWebpack: (config) => {
  //   if (env === 'production') {
  //     config.plugin('compress')
  //       .use(FileManagerPlugin, [{
  //         onEnd: {
  //           delete: [ // 首先需要删除项目根目录下的dist.zip
  //             './*.zip'
  //           ],
  //           archive: [ // 然后我们选择dist文件夹将之打包成dist.zip并放在根目录
  //             { source: './dist', destination: `./biProject-${ts}-production.zip` }
  //             // { source: './test', destination: `./biProject-${ts}-test.zip` }
  //           ]
  //         }
  //       }])
  //   }
  // },
  devServer: {
    host: "localhost", // 配置host名字,未写入的时候默认localhost
    port: 8080, // 配置端口
    open: true, // 配置自动启动浏览器
    https: false, // 配置默认启动的是http还是https
    proxy: {
      "/api": {
        target: target, // 代理的第一个路径,

        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api" // 代理重写
        }
      }
    }
  }
};
