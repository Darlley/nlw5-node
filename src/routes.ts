import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

const settingsController = new SettingsController();

routes.get("/", (request, response) => {
    response.json({
        username: request.param('username'),
        chat: request.param('chat')
    })
})
routes.post("/settings", settingsController.create);

export {routes};