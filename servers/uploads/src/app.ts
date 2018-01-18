"use strict";

import * as express from 'express';
import * as http from 'http';

import * as helmet from 'helmet';

import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as csrf from 'csurf';

import config from '../../../config';

const app = express();
const server = new http.Server(app);

// Defining EJS as the view engine
app.set('view engine', 'ejs');

// Autorize proxy connections
app.set('trust proxy', 1);

// Get some directories to static (like in the root directoy)
app.use(express.static(`${__dirname}/../${process.env.NODE_ENV !== "production" ? "src/" : "dist/"}public`));

// Defining the views directory
app.set('views', `${__dirname}/../views`);

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
// Route not found
app.get('*', function (req, res) {
    res.status(404);
    res.render('errors/404');
});

// Trying to the server, if impossible, log an error message
try {
    // Listen to a specific port
    server.listen(config.server.port, () => {
        console.log(`Harps Compagny Manager now launched on port ${config.server.port} !`);
    });
} catch (e) {
    console.log(`\x1b[31m/!\\ WARNING /!\\: \x1b[0mError on port : ${e}`);
}