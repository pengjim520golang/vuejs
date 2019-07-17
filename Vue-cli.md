# Vue-cli

安装非常简单

```
cnpm install -g vue-cli
```

命令: vue list 

该命令是显示所有我们可以安装的模板,一般选择的是webpack。就可以初始化一个vue工程化项目,初始化命令:

```
vue init webpack <项目名称>
```

> vue init的执行必须要在一个目录中运行,项目名称必须是小写

## 初始化步骤

1.如下3项直接回车跳过即可

? Project 

? Project
 
? Author 

2.选择：Runtime + Compiler: recommended for most users

3.选择安装vue-router:Y

4.选择安装Use ESLint to lint your code? (Y/n) n

5.Set up unit tests ? (Y/n) n

6.Setup e2e tests with Nightwatch? (Y/n) n

7.选择npm来管理工程

## 工程目录

build : 是webpack编译时的文件,其中webpack.base.conf.js可以通过webpack安装各种插件,需要先引入webpack,找到文件的第6行:

```javascript
const webpack = require("webpack") 
```


src : 这个编码的源文件目录

src/assets : 一般用于放置静态文件,比如:css,图片之类等等,在vue-cli的工程中可以使用@/assets来定位

src/router : 路由

src/App.vue : vue是一个后缀名,表示当前文件是一个vue的组件,App.vue是整个工程的入库组件

src/main.js : vue的入口文件


## 自定义初始工程目录

1.删除原有的src/compontents目录

2.创建src/pages目录 

3.在src/router/index.js删除与HelloWorld.vue相关的组件信息


# 安装bootstrap和jquery

在vue-cli中安装bootstrap需要执行npm安装命令

```
npm install bootstrap@3.3.7 --save
npm install jquery@1.11.3 --save
```

* 打开`build/webpack.base.conf.js`,在最后添加`plugins`选项:

```javascript
plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ]
```

* 打开入口文件`src/main.js`引入`bootstrap`的库依赖

```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
```

> 注意：需要重新npm run dev才能生效