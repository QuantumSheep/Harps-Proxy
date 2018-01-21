interface Config {
    servers: {
        [key: string]: {
            host: string,
            port: number
        }
    },
    lang: {
        default: string,
        accepted: string[]
    },
    databases: {
        [key: string]: {
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