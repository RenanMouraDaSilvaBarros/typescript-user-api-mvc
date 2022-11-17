import { Request, Response } from 'express'
import { UserModel } from '../models/user_model'
import { UserService } from '../services/user_service'

class UserController {

    static create(request: Request, response: Response) {

        const { name, email, password }: UserModel = request.body

        const newUser: UserModel = { name, email, password }
        const userCreated = UserService.create(newUser)

        return response.send(userCreated)
    }

    static get<UserModel>(request: Request, response: Response) {

    }

    static getAll(request: Request, response: Response) {
    }

    static update(request: Request, response: Response) {

    }

    static delete(irequest: Request, response: Response) {

    }

}

export { UserController }