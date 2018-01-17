const http = require('http');
const httpProxy = require('http-proxy');

var proxyServers = [{
    host: "localhost",
    port: 4000
}].map((target) => {
    return new httpProxy.createProxyServer({
        target: target
    });
});

const server = http.createServer((req, res) => {
    const proxy = proxyServers.shift();

    proxy.web(req, res);
    proxyServers.push(proxy);
}).listen(3000);