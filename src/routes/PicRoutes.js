import { Router } from "express";

import picController from "../controllers/PicController";

import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, picController.store);

export default router;
