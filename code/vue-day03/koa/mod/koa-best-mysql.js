//引入mysql
const mysql = require("koa-mysql")
const config = require("./koa-config")
//console.log(config.dbConfig) 
const db = mysql.createPool( config.dbConfig ) 

const _query = db.query.bind(db) 

db.query = function(sql,params=[]){
    return new Promise( (resolve,reject)=>{
        _query(sql,params)( (err,data)=>{
            if(!err){
                resolve(data)
            }else{
                reject(err) 
            }
        } )
    })
}

module.exports = db 
