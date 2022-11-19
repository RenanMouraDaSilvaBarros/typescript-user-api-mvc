import { Request, Response } from 'express'
import { CustomError } from '../helper/custom_error'
import { AuthenticationService } from '../services/authentication_service'
import jwt from 'jsonwebtoken'

class AuthenticationController {

    static async Login(request: Request, response: Response) {
        const { email, password } = request.body

        try {
            const authentication = await AuthenticationService.login(email, password)

            console.log(process.env.JWT_PRIVATE_KEY)
            let token = jwt.sign({ id: authentication.id }, process.env.JWT_PRIVATE_KEY as string, {
                expiresIn: 60 * 60 * 60 // expires in 5min
            });

            return response.header('Authorization', `Bearer ${token}`).send({ token })

        } catch (error) {
            const { message, statusCode } = (error as CustomError)

            return response.status(statusCode ?? 500).send({ error: statusCode ? message : 'login error' })
        }
    }
}

export { AuthenticationController }