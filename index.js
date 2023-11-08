const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    // res.end('hello')
    // console.log(req.method);
    // console.log(req.url);
    if (req.url === '/user') {
        res.end("<h1>hello this is user page</h1>");
    }
    if (req.url === '/blog') {
        res.end('hello')
    }

    if (req.method === 'POST' && req.url === '/user') {
        res.end('hello this are the')
    }
    if (req.url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                return res.end('there is an error while reading the file')
            }
            res.end(data)
        })
    }
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                return
            }
            res.end(data)
        })
    }
})
let port = 5000;
server.listen(port, 'localhost', function(){
  console.log('server listening on port' +  port);
})

