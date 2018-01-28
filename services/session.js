"use strict";

const { config } = require('./config');
const session = require('express-session');
const expressMySQLSession = require('express-mysql-session');

const MySQLStore = expressMySQLSession(session);
const sessionStore = new MySQLStore(config.databases.main);

exports.Session = session({
    name: 'SSID',
    secret: ' 6*q#c]:bh/*qy#7Rp)ig)T$*L\'{1!^',
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: new Date(2147483647000)
    }
});