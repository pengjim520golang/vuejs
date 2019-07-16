//引入koa框架的模块
const Koa = require("koa")
//引入路由模块,生成中心路由
const router = require("koa-router")() 
//产生一个koa服务器的实例
const app = new Koa() 
//获取post数据我们需要引入组件koa-better-body
const body = require("koa-better-body")
//post的body需要和koa-convert
const convert = require("koa-convert")
//引入cors解决跨域的组件
const cors = require("koa2-cors")



app.listen(8859,()=>{
    console.log("koa server start,port:8859")
})

//使用cors组件
app.use( cors() ) 

//使用better-boby
app.use( convert(body({
    uploadDir:__dirname + "/upload",
    keepExtensions:true
})) )

//表示当前是一个分发的路由
router.use("/news",require("./mod/news")) 

app.use( router.routes() ) 
