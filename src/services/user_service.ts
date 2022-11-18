import { UserModel } from '../models/user_model'
import { UserRepository } from '../repository/user_repository'

class UserService {

    static async create(user: UserModel) {
        return UserRepository.create(user)
    }

}

export { UserService }