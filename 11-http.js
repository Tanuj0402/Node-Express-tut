const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/') {
        res.end('Welcome to your homepage')
    }
    if(req.url==='/about') {
        res.end('Here is your about page')
    }
    res.end(
        `<h1>Oops!</h1>
        <a href="/">home</a>`
    )
})

server.listen(5000)