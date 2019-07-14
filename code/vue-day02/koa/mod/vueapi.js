//引入路由模块,生成中心路由
const _ = require("koa-router")() 

//请求get
_.get("/list",async (ctx,next)=>{
    let data = [
        {id:100,title:"这是第1条新闻"},
        {id:200,title:"这是第2条新闻"},
        {id:300,title:"这是第3条新闻"},
    ]
    ctx.response.body = data 
})

//请求post
_.post("/userinfo",async (ctx,next)=>{

    //console.log( ctx.request.fields )
    let data = {user:ctx.request.fields.username,pass:ctx.request.fields.password,from:"from-koa"}
    ctx.response.body = data 
    
})



module.exports = _.routes() 