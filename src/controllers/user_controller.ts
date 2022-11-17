import { Request, Response } from 'express'
import { UserModel } from '../models/user_model'

class UserController {

    static create(request: Request, reponse: Response): UserModel {

        const { name, email, password } = request


    }

    static get<UserModel>(request: Request, reponse: Response) {

    }

    static getAll(request: Request, reponse: Response): Array<UserModel> {
    }

    static update(request: Request, reponse: Response) {

    }

    static delete(irequest: Request, reponse: Response) {

    }

}

export { UserController }