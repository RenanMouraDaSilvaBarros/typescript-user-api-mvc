import { Request, Response } from 'express'
import { AuthenticationService } from '../services/authentication_service'
import jwt from 'jsonwebtoken'

class AuthenticationController {

    static async Login(request: Request, response: Response) {
        const { email, password } = request.body

        try {
            const { user, error } = await AuthenticationService.login(email, password)

            if (error) return response.status(400).json(error)

            const token = jwt.sign({ id: user?.id }, process.env.JWT_PRIVATE_KEY as string, {
                expiresIn: 60 * 60 * 60
            });

            return response.header('Authorization', `Bearer ${token}`).send({ token })

        } catch (error) {
            console.error(error)

            return response.status(500).json({ error: 'login error' })
        }
    }
}

export { AuthenticationController }