const { getRequestedRoute } = require('./router.js');

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { 
    console.log('request recieved from'+ req.url);

    let file = getRequestedRoute(req.url);

    fs.readFile('./views/'+file, (err, data) => {
        if (err) res.end('Page Not Found');

        res.end(data);
    });
});

server.listen('3000','localhost',() => { console.log('started listening'); });