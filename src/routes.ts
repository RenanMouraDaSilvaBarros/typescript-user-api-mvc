import { Router } from "express";
import { UserController } from "./controllers/user_controller"

const routes = Router()

routes.get('/user/all', (request, response) => UserController.getAll(request, response))

routes.post('/user', (request, response) => UserController.create(request, response))

routes.put('/user/:id', (request, response) => UserController.update(request, response))

routes.delete('/user/:id', (request, response) => UserController.delete(request, response))

export { routes }