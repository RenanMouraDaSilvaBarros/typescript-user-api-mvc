import Joi from 'joi';

const userCreateSchema = Joi.object({
  name: Joi.string().max(100).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required()
});

const userUpdateSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required()
});

export { userCreateSchema, userUpdateSchema };
