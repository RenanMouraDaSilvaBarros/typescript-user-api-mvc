import { Request, Response } from 'express'
import { CustomError } from '../helper/custom_error'
import { UserModel } from '../models/user_model'
import { UserService } from '../services/user_service'
import { UserValidation } from '../validation/user_validation'

class UserController {

    static async create(request: Request, response: Response) {
        const user: UserModel = request.body

        try {
            await UserValidation.create(user)

            const userCreated = await UserService.create(user)

            return response.status(201).send(userCreated)

        } catch (error) {
            const { message, statusCode } = (error as CustomError)

            return response.status(statusCode ?? 500).send({ error:  statusCode ? message : 'error when creating user' })
        }
    }

    static async getAll(request: Request, response: Response) {
        try {
            const allUsers = await UserService.getAll()

            return response.send(allUsers)

        } catch (error) {
            const { message, statusCode } = (error as CustomError)

            return response.status(statusCode ?? 500).send({ error: statusCode ? message : ' error get all user'  })
        }
    }

    static async getById(request: Request, response: Response) {
        const { id } = request.params

        try {
            const user = await UserService.getById(id)

            return response.send(user)

        } catch (error) {
            const { message, statusCode } = (error as CustomError)

            return response.status(statusCode ?? 500).send({ error: statusCode ? message : ' error get user'  })
        }
    }

    static async update(request: Request, response: Response) {
        const { email, password } = request.body
        const { id } = request.params

        try {
            UserValidation.update(email, password)

            const userUpdated = await UserService.update(email, password, id)

            return response.send(userUpdated)

        } catch (error) {
            const { message, statusCode } = (error as CustomError)

            return response.status(statusCode ?? 500).send({ error: statusCode ? message : 'error when updating user'  })
        }
    }
    
    static async delete(request: Request, response: Response) {
        const { id } = request.params

        try {
            const userdeleted = await UserService.delete(id)

            return response.send(userdeleted)

        } catch (error) {
            const { message, statusCode } = (error as CustomError)

            return response.status(statusCode ?? 500).send({ error: statusCode ? message : 'error deleting user'})

        }
    }

}

export { UserController }