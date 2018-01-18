"use strict";

const config = require('../config');
const mysql = require('mysql');

/**
 * Get Sql Connection
 * @param {string} database 
 */
exports.SqlConnection = mysql.createConnection;