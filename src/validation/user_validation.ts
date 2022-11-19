import Joi from 'joi';
import { UserModel } from '../models/user_model';
import { CustomError } from '../helper/custom_error'
import { UserRepository } from '../repository/user_repository';

const userCreateSchema = Joi.object({
    name: Joi.string().max(100).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required()
})

const userUpdateSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required()
})


class UserValidation {

    static async create(user: UserModel) {

        const { error } = userCreateSchema.validate(user);
        if (error) {
            throw new CustomError(error.message, 400)
        }

        const emailExists = await UserRepository.getByEmail(user.email)
        if (emailExists) {
            throw new CustomError("email already exists", 400)
        }

    }

    static update(email: string, password: string) {
        const { error } = userUpdateSchema.validate({ email, password });
        if (error) {
            throw new CustomError(error.message, 400)
        }
    }
}



export { UserValidation }
