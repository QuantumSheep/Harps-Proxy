const http = require('http');

http.createServer((req, res) => {
    res.write("Hello proxy!");
    res.end();
}).listen(4000);