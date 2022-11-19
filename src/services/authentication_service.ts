import bcrypt from 'bcrypt'
import { UserService } from './user_service';
import { CustomError } from '../helper/custom_error'

class AuthenticationService {

    static async login(email: string, password: string) {
        const user = await UserService.getByEmail(email)

        const checkPassword = await bcrypt.compare(password, user!.password)

        if (!user || !checkPassword) throw new CustomError('check your email and password', 404)

        return user
    }

}

export { AuthenticationService }