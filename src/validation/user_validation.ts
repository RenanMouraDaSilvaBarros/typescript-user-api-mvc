import { UserModel } from '../models/user_model';
import { UserRepository } from '../repository/user_repository';
import { userCreateSchema, userUpdateSchema } from './schemas';

class UserValidation {
  static async register(user: UserModel) {
    const { error } = userCreateSchema.validate(user);

    if (error) return { error: error.message };

    const emailExists = await UserRepository.getByEmail(user.email);

    if (emailExists) return { error: 'email already exists' };
  }

  static async update(email: string, password: string) {
    const { error } = userUpdateSchema.validate({ email, password });

    if (error) return { error: error.message };

    const emailExists = await UserRepository.getByEmail(email);

    if (emailExists) return { error: 'email already exists' };
  }
}

export { UserValidation };
