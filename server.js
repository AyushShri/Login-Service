const http = require('http');
const fs=require('fs');
    fs.readFile('./hello.html')

const server = http.createServer((req,res)=> {
    res.setHeader('Content-Type', 'text/html')
    res.write("xxxxx");  
    res.end()
}); 



server.listen(4000);