"use strict";

const crypt = require('bcrypt');

export class UserService {
    static GetBySecure(conn, secure_key) {
        return new Promise((resolve, reject) => {
            conn.query("SELECT idusers, secure_key, firstname, lastname, birthdate, email FROM users WHERE secure_key=?", secure_key, (err, results, fields) => {
                if (err) throw err;
    
                resolve(results[0]);
            });
        });
    }
    
    static CheckPasswordBySecure(conn, secure_key, password) {
        return new Promise((resolve, reject) => {
            conn.query("SELECT password FROM users WHERE secure_key=?", secure_key, (error, results, fields) => {
                if (error) throw error;
    
                if(results[0] != null && results[0].password != null) {
                    crypt.compare(password, results[0].password).then((response) => {
                        resolve(response);
                    });
                }
            });
        });
    }
}