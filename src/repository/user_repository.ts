import { UserModel } from "../models/user_model"
import { prisma } from '../middlewares/prisma_client'

class UserRepository {

    static async create(user: UserModel) {
        return prisma.user.create({ data: user })
    }

    static async getAll() {
        return prisma.user.findMany({})
    }

    static async getById(id: string) {
        return prisma.user.findUnique({ where: { id } })
    }

    static async upadate(email: string, password: string, id: string) {
        return prisma.user.update({
            where: { id },
            data: {
                email,
                password,
                update_at: new Date()
            },
        })
    }

    static async delete(id: string) {
        return prisma.user.delete({ where: { id } })
    }

}

export { UserRepository }