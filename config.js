exports.config = {
    servers: {
        proxy: {
            host: "localhost",
            port: 4000
        },
        core: {
            host: "localhost",
            port: 4000
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
        avatars: "avatars/"
    },
    bcrypt: {
        rounds: 10
    }
}