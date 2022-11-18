import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user_service"

async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { id } = request.params

    const userExists = await UserService.getById(id)

    if (!userExists) {
        return response.status(404).send({ message: 'user does not exist' })
    }
    
    next()
}

export { ensureAuthenticated }