import { Request, Response } from 'express';
import { z } from 'zod';
import UserModel from '../model/UserModel';

const UserStoreSchema = z.object({
  name: z.string().min(3, { message: 'Mandatory name field' }),
  email: z.string().email({ message: 'Invalid e-mail format' }),
  password: z
    .string()
    .min(3, { message: 'The password must have at least 3 characters' }),
});

class UserController {
  store(req: Request, res: Response) {
    const { name, email, password } = UserStoreSchema.parse(req.body);

    try {
      UserModel.create(name, email, password, (error) => {
        if (error) {
          res.json(error.message);
        }
      });
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new UserController();
