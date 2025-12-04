const http = require('http')
const fs = require('fs')

const html = fs.readFileSync('./Templates/index.html', 'utf-8')

//create a server
server = http.createServer((req,res) => {
    const path = req.url
    
    if(path === '/' || path.toLocaleLowerCase()==='/home') {
        res.end(html.replace('{{%Content%}}','You are in home page'))
    } else if(path.toLowerCase() === '/about') {
        res.end(html.replace('{{%Content%}}','You are in about page'))
    } else if(path.toLocaleLowerCase() === '/contact') {
        res.end(html.replace('{{%Content%}}','You are in contact page'))
    }else {
        res.end(html.replace('{{%Content%}}','Error 404: Page not found'))
    }
})

server.listen('3000', '127.0.0.1', ()=> {
    console.log('server started!');

})