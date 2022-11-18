import { Request, Response } from 'express'
import { UserModel } from '../models/user_model'
import { UserService } from '../services/user_service'

class UserController {

    static async create(request: Request, response: Response) {
        const user: UserModel = request.body

        const userCreated = await UserService.create(user)

        return response.send(userCreated)
    }

    static async getAll(request: Request, response: Response) {
        const allUsers = await UserService.getAll()

        return response.send(allUsers)
    }

    static async getById(request: Request, response: Response) {
        const { id } = request.params

        const user = await UserService.getById(id)

        return response.send(user)
    }
    
    static async update(request: Request, response: Response) {
        const { email, password } = request.body
        const { id } = request.params


        const userUpdated = await UserService.update( email, password, id )

        return response.send(userUpdated)
    }

    static async delete(request: Request, response: Response) {
        const { id } = request.params

        const userdeleted = await UserService.delete(id)

        return response.send(userdeleted)
    }

}

export { UserController }