import bcrypt from 'bcrypt'
import { string } from 'joi';
import { UserService } from './user_service';

class AuthenticationService {

    static async login(email: string, password: string) {
        const user = await UserService.getByEmail(email)

        const checkPassword = await bcrypt.compare(password, user!.password)

        let error = null

        if (!user || !checkPassword) {
            error = { error: 'check your email and password' }
        }

        return { user, error}
    }

}

export { AuthenticationService }