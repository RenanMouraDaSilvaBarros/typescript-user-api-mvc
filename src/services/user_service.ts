import { UserModel } from '../models/user_model'
import { UserRepository } from '../repository/user_repository'

class UserService {

    static async create(user: UserModel) {
        return UserRepository.create(user)
    }

    static async getAll() {
        return UserRepository.getAll()
    }
    
    static async getById(id: string) {
        return UserRepository.getById(id)
    }

    static async update(email: string, password: string, id: string) {
        return UserRepository.upadate(email, password, id)
    }

    static async delete(id: string) {
        return UserRepository.delete(id)
    }

}

export { UserService }