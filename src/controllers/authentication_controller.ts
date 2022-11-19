import { Request, Response } from 'express'
import { CustomError } from '../helper/custom_error'
import { AuthenticationService } from '../services/authentication_service'


class AuthenticationController {

    static async Login(request: Request, response: Response) {
        const { email, password } = request.body

        try {
            const authentication = await AuthenticationService.login(email, password)

            return response.send({ authentication })

        } catch (error) {
            const { message, statusCode } = (error as CustomError)

            return response.status(statusCode ?? 500).send({ error: message })
        }
    }


}

export { AuthenticationController }