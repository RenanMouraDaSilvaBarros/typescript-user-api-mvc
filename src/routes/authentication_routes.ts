import { Router } from "express";
import { AuthenticationController } from "../controllers/authentication_controller";

const authenticationRoutes = Router()

authenticationRoutes.post('/login', (request, response) => AuthenticationController.Login(request, response))

export { authenticationRoutes }