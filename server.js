"use strict";

const httpProxy = require('http-proxy');
const http = require('http');
const { config } = require('./config');
const path = require('path');

const proxy = httpProxy.createProxyServer({});

function redirect(req, res, target) {
    proxy.web(req, res, {
        target: target
    });
}

const server = http.createServer((req, res) => {
    console.log(req.headers);
    const urlPath = path.parse(req.url);
    console.log(urlPath);
    if (req.method == "POST" && urlPath.dir == "/upload") {
        return redirect(req, res, config.servers.uploads);
    } else if(req.method == "GET" && urlPath.dir == "/avatars") {
        return redirect(req, res, config.servers.files);
    } else {
        return redirect(req, res, config.servers.core);
    }
}).listen(config.servers.proxy.port);