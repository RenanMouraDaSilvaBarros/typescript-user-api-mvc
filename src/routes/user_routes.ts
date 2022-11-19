import { Router } from "express";
import { UserController } from "../controllers/user_controller";
import { ensureAuthenticated } from "../middlewares/ensure_authenticated";

const userRoutes = Router()

userRoutes.get('/all', (request, response) => UserController.getAll(request, response))

userRoutes.post('/', (request, response) => UserController.create(request, response))

userRoutes.get('/:id', ensureAuthenticated, (request, response) => UserController.getById(request, response))

userRoutes.put('/:id', ensureAuthenticated, (request, response) => UserController.update(request, response))

userRoutes.delete('/:id', ensureAuthenticated, (request, response) => UserController.delete(request, response))

export { userRoutes }