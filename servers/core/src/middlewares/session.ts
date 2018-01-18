"use strict";

import * as session from 'express-session';
import * as expressMySQLSession from 'express-mysql-session';
import { RequestHandler } from 'express';
import { config } from '../GlobalServices';


const MySQLStore = expressMySQLSession(session);
const sessionStore = new MySQLStore(config.databases.main);

export const sess: RequestHandler = session({
    name: 'SSID',
    secret: ' 6*q#c]:bh/*qy#7Rp)ig)T$*L\'{1!^',
    store: sessionStore,
    resave: false,
    saveUninitialized: true
});