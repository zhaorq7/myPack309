//webpack 是nodejs开发的  CommonJS 模块化  所以用require()
var path = require('path');
var webpackCleanupPlugin = require('webpack-cleanup-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        // path.join(__dirname,'./src/main.js')
        path: path.resolve('./dist'),  // 根据相对路径拼装出一个绝对路径
        filename: 'bundle.js'
    },
    plugins: [
        //实时打包
        new webpackCleanupPlugin(),// 每次 npm run build 打宝石 , 在dist目录里就会把不相关的文件删除
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html')
        }),
        new VueLoaderPlugin()
    ],
    //给实时打包工具配置运行参数
    devServer: {
        open: true,//自动启动浏览器 并预览
        host: "127.0.0.1",//实时的http服务主机ip地址
        port: "12306",
        compress: true // 以压缩的方式传输
    },
    resolve: {
        alias: {
            //配置别名
            '@':path.resolve('./src')
        },
        extensions: [
            //配置自动识别后缀名
            '.js',
            '.vue',
            '.json',
            '.css'
        ]
    },

    // webpack 配置文件做了修改 , 需要重启webpack  (npm run  build  / npm run serve)
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']//css  实现 以impoet/require 引入的css , style <style>标签嵌入的
            }, {
                test: /\.(png|jpg|gif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // 8k  8192字节  -- > base64字符串格式图片 (基于64个可打印字符来表示2进制数据的方法)
                            outputPath: 'image'  // dist/image
                        }
                    }
                ]
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'] // 严格的前后顺序要求
            },{
                test:/\.js$/,
                exclude: /node-modules/,//做忽略
                use:'babel-loader'
            }

            /*
            * use 方式
            * test: /\.xxx$/ , use:加载器     1个
            * test: /\.xxx$/ , use: [加载器,加载器]     多个  数组
            *
            * loader 方式
            * test: /\.xxx$/ , loader:加载器   1个
            * test: /\.xxx$/ , loader: 加载器!加载器    多个  !分割
            *
            * 有参数的方式
            * test: /\.xxx$/ , loader:加载器  ,options: 对象参数      //1个
            * test: /\.xxx$/ ,
            *   use:[
            *           {loader:加载器 , options:对象参数},
            *           {loader:加载器 , options:对象参数}
            *       ]
            *
            *
            *
            * */
        ]
    }
};
