"use strict";

import { Router } from 'express';
import { AvatarsController } from '../controllers/AvatarsController';

const router: Router = Router();

router.post('/avatar', AvatarsController.uploadAvatar);

export { router };