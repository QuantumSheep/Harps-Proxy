"use strict";

import { Request, Response } from "express";
import * as glob from 'glob';
import * as path from 'path';
import * as mime from 'mime';
import { config } from "harps-services";

export class AvatarsController {
    public static findAvatar(req: Request, res: Response) {
        glob(path.resolve(`${config.directories.static}/avatars/${req.params.iduser}.*`), (err, matches) => {
            if (matches.length > 0) {
                let matchMime;

                res.setHeader('Content-Type', (matchMime = mime.getType(matches[0])) != "" ? matchMime : 'image/jpeg');
                res.sendFile(matches[0]);
            } else {
                res.setHeader('Content-Type', 'image/jpeg');
                res.sendFile(path.resolve(`${config.directories.static}/avatars/default.jpg`));
            }
        });
    }
}