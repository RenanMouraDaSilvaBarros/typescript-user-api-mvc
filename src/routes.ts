import { Router } from "express";
import { UserController } from "./controllers/user_controller"
import { ensureAuthenticated } from './middlewares/ensure_authenticated'

const routes = Router()

routes.get('/user/all', (request, response) => UserController.getAll(request, response))

routes.get('/user/:id', ensureAuthenticated, (request, response) => UserController.getById(request, response))

routes.post('/user', (request, response) => UserController.create(request, response))

routes.put('/user/:id', ensureAuthenticated, (request, response) => UserController.update(request, response))

routes.delete('/user/:id', ensureAuthenticated, (request, response) => UserController.delete(request, response))

export { routes }