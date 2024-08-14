import { Router } from 'express';
import UserController from '../controllers/UserController';
import ValidateUserSchema from '../middleware/ValidateUserSchema';

const router = Router();

router.post('/', ValidateUserSchema.create, UserController.store);

export default router;
