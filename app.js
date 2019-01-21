//引入模块
const fs = require('fs');
const http = require('http');
const path = require('path');
//记录网站路径
let rootPath = path.join(__dirname,'www');
//console.log(rootPath);
//开启服务器
let server = http.createServer((request,response)=>{
    response.end('hello');
})
//开启服务器监听
server.listen(8080,'127.0.0.1',()=>{
    console.log('开启成功');
})