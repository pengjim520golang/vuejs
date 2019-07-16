const _ = require("koa-router")()
const db = require("./koa-best-mysql")
//获取newsList的请求(get)
_.get("/list/page/:pageNum",async (ctx,next)=>{
    let data = {}
    //验证当前页是否有效
    let currentPage = isNaN( parseInt( ctx.params.pageNum ) ) ? 1 : parseInt( ctx.params.pageNum )
    //如果当前页为负数和0，我们也要把当前页设置为1
    currentPage = currentPage <= 0 ? 1 : currentPage
    //设置分页配置,pageSize设置的当前每页多少记录
    let cnf = {currentPage,pageSize:2} 
    //获取数据表的总数
    let rs = await db.query("select count(*) as total from news") 
    cnf.rsTotal = rs[0].total //获取了总数
    if(cnf.rsTotal>0){
        //计算总页数是多少
        cnf.pageTotal = Math.ceil( cnf.rsTotal / cnf.pageSize )
        //如果当前页大于总页数,当前页就是最后一页，也是总页数
        cnf.currentPage = cnf.currentPage>cnf.pageTotal ? cnf.pageTotal : cnf.currentPage
        //设置分页
        let limiter = [(cnf.currentPage - 1)*cnf.pageSize,cnf.pageSize]
        //根据分页，获取分页后的数据
        let news = await db.query("select * from news limit ?,?",limiter) 
        data = {status:0,news:news,pageInfo:cnf} 
    }else{
        cnf.pageTotal = 0 
        data = {status:0,news:[],pageInfo:cnf} 
    }
    ctx.response.body = data 
})


module.exports = _.routes() 



//http://localhost:8859/news/list/page/3 


