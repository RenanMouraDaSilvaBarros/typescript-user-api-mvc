import { UserModel } from "../models/user_model"
import { prisma } from '../middlewares/prisma_client'

class UserRepository {

    static async  create(user: UserModel) {
        return prisma.user.create({
            data: user,
        })
    }

}

export { UserRepository }