const http = require('http');

const server = http.createServer((req, res) => { console.log('request recieved from'+ req.url); });

server.listen('3000','localhost',() => { console.log('started listening'); });