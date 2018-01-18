const http = require('http');
const httpProxy = require('http-proxy');

const servers = {
    core: {
        host: "localhost",
        port: 4000
    }
}

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    proxy.web(req, res, {
        target: servers.core
    });
}).listen(3000);