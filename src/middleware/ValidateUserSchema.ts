import { Request, Response, NextFunction } from 'express';
import { UserStoreSchema } from '../model/UserSchema';

class ValidateUserSchema {
  create(req: Request, res: Response, next: NextFunction) {
    const dataBody = UserStoreSchema.safeParse(req.body);

    if (!dataBody.success) {
      res
        .status(400)
        .json({ errors: dataBody.error.issues.map((error) => error.message) });
      return;
    }
    next();
  }
}

export default new ValidateUserSchema();
