interface Config {
    servers: {
        proxy: {
            host: string,
            port: number
        },
        core: {
            host: string,
            port: number
        }
    },
    lang: {
        default: string,
        accepted: string[]
    },
    databases: {
        main: {
            host: string,
            port: number,
            user: string,
            password: string,
            database: string
        }
    },
    directories: {
        avatars: string
    },
    bcrypt: {
        rounds: number
    }
}

export declare const config: Config;