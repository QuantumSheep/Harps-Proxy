const path = require('path');

exports.config = {
    servers: {
        proxy: {
            host: "localhost",
            port: 3000
        },
        core: {
            host: "localhost",
            port: 4000
        },
        uploads: {
            host: "localhost",
            port: 5000
        },
        files: {
            host: "localhost",
            port: 3200
        }
    },
    lang: {
        default: "en",
        accepted: [
            "en",
            "fr"
        ]
    },
    databases: {
        main: {
            host: "localhost",
            port: "9956",
            user: "root",
            password: "koala",
            database: "harpshub"
        }
    },
    directories: {
        root: __dirname,
        servers: path.resolve(`${__dirname}/../servers`),
        static: path.resolve(`${__dirname}/../static`),
        avatars: "avatars/"
    },
    bcrypt: {
        rounds: 10
    }
}