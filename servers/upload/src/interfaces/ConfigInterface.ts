"use strict";

export default interface Config {
    server: {
        port: number
    },
    database: {
        host: string,
        port: number,
        user: string,
        pass: string,
        name: string
    },
    directories: {
        avatars: string
    }
}