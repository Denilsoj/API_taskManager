import { Request, Response } from 'express';
import { UserStoreSchema } from '../model/UserSchema';
import UserModel from '../model/UserModel';

class UserController {
  store(req: Request, res: Response) {
    const { name, email, password } = UserStoreSchema.parse(req.body);
    try {
      UserModel.create(name, email, password, (error) => {
        if (error) {
          res.status(400).json({
            errors: [error.errno === 19 && 'E-mail already used'],
            created: false,
          });
          return;
        }
        res.status(201).json({
          created: true,
        });
      });
    } catch (errors) {
      res.status(400).json(errors);
      return;
    }
  }
}

export default new UserController();
