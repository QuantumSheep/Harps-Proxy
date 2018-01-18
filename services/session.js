"use strict";

const dbconnection = require('../services/dbconnection');
const session = require('express-session');
const expressMySQLSession = require('express-mysql-session');

const MySQLStore = expressMySQLSession(session);
const sessionStore = new MySQLStore(dbconnection.options);

exports.sess = session({
    name: 'SSID',
    secret: ' 6*q#c]:bh/*qy#7Rp)ig)T$*L\'{1!^',
    store: sessionStore,
    resave: false,
    saveUninitialized: true
});