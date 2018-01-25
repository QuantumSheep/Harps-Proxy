"use strict";

import * as express from 'express';
import * as http from 'http';

import * as helmet from 'helmet';

import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as csrf from 'csurf';

import { config } from 'harps-services';

import * as router from './routes/router'

const app = express();
const server = new http.Server(app);

// Autorize proxy connections
app.set('trust proxy', 1);

// Get some directories to static (like in the root directoy)
app.use(express.static(`${__dirname}/../${process.env.NODE_ENV !== "production" ? "src/" : "dist/"}public`));

// Resolve some HTTP issues
app.use(helmet());

// Use the cookie parser middleware
app.use(cookieParser());

// Add the capacity to receive HTTP Request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Enable CSRF protection
app.use(csrf({
    cookie: true
}));

app.use('/upload', router.upload);

// Route not found
app.get('*', (req, res) => {
    res.status(404);
    res.redirect('/');
});

// Listen to a specific port
server.listen(config.servers.uploads.port, () => {
    console.log(`Uploads service started on port ${config.servers.uploads.port} !`);
});