import { Request, Response } from 'express';
import { AuthenticationService } from '../services/authentication_service';
import jwt from 'jsonwebtoken';

class AuthenticationController {
  static async login(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const { error, token } = await AuthenticationService.login(
        email,
        password
      );

      if (error) return response.status(400).json(error);

      return response
        .header('Authorization', `Bearer ${token}`)
        .send({ token });
    } catch (error) {
      console.error(error);

      return response.status(500).json({ error: 'login error' });
    }
  }
}

export { AuthenticationController };
