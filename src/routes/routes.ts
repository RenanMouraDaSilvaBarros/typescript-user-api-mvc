import { Router } from "express";

import { authenticationRoutes } from "./authentication_routes";
import { userRoutes } from "./user_routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/auth", authenticationRoutes);

export { routes }