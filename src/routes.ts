import { Router } from "express";
import { UserController } from "./controllers/user_controller"

const routes = Router()

routes.get('/user', (request, response) => {

})

routes.post('/user', (request, response) => UserController.create(request, response))

routes.put('/user', (request, response) => {

})

routes.delete('/user', (request, response) => {

})

export { routes }