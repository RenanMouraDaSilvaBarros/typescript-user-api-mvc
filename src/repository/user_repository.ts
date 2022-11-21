import { UserModel } from '../models/user_model';
import { postgress } from '../database/postgress';

class UserRepository {
  static async create(user: UserModel) {
    return postgress.user.create({ data: user });
  }

  static async getAll() {
    return postgress.user.findMany({});
  }

  static async getByEmail(email: string) {
    return postgress.user.findUnique({
      where: { email }
    });
  }

  static async getById(id: string) {
    return postgress.user.findUnique({ where: { id } });
  }

  static async upadate(email: string, password: string, id: string) {
    return postgress.user.update({
      where: { id },
      data: {
        email,
        password,
        update_at: new Date()
      }
    });
  }

  static async delete(id: string) {
    return postgress.user.delete({ where: { id } });
  }
}

export { UserRepository };
