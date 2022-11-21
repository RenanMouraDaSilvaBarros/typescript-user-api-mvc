import { Request, Response } from 'express';
import { UserModel } from '../models/user_model';
import { UserService } from '../services/user_service';
import { UserValidation } from '../validation/user_validation';

class UserController {
  static async create(request: Request, response: Response) {
    const user: UserModel = request.body;

    try {
      const error = await UserValidation.register(user);

      if (error) return response.status(400).json(error);

      const userCreated = await UserService.create(user);

      return response.status(201).json(userCreated);
    } catch (error) {
      console.error(error);

      return response.status(500).json({ error: 'error when creating user' });
    }
  }

  static async getAll(request: Request, response: Response) {
    try {
      const allUsers = await UserService.getAll();

      return response.json(allUsers);
    } catch (error) {
      console.error(error);

      return response.status(500).json({ error: 'error get all user' });
    }
  }

  static async getById(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const user = await UserService.getById(id);

      return response.json(user);
    } catch (error) {
      console.error(error);

      return response.status(500).json({ error: ' error get user' });
    }
  }

  static async update(request: Request, response: Response) {
    const { email, password } = request.body;
    const { id } = request.params;

    try {
      const error = await UserValidation.update(email, password);

      if (error) return response.status(400).json(error);

      const userUpdated = await UserService.update(email, password, id);

      return response.json(userUpdated);
    } catch (error) {
      console.error(error);

      return response.status(500).json({ error: 'error when updating user' });
    }
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const userdeleted = await UserService.delete(id);

      return response.send(userdeleted);
    } catch (error) {
      console.error(error);

      return response.status(500).send({ error: 'error deleting user' });
    }
  }
}

export { UserController };
