"use strict";

export class Randomizer {
    static version() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-";

        for (let i = 0; i < 43; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
}