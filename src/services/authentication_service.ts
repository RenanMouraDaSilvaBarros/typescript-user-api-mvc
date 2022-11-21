import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user_model';
import { UserService } from './user_service';

class AuthenticationService {
  static async login(email: string, password: string) {
    const user = await UserService.getByEmail(email);

    if (!user) {
      return { error: { error: 'check your email and password' } };
    }
    const checkPassword = await bcrypt.compare(password, user?.password);

    if (!checkPassword) {
      return { error: { error: 'check your email and password' } };
    }

    const token = AuthenticationService.generateToken(
      user.id,
      process.env.JWT_PRIVATE_KEY as string,
      '1 days'
    );

    return { user, token };
  }

  static generateToken(
    id: string,
    privateKey: string,
    expiresIn: string | number
  ) {
    const token = jwt.sign({ id }, privateKey, { expiresIn });
    return token;
  }
}

export { AuthenticationService };
