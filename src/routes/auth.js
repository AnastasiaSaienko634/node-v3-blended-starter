import { celebrate } from 'celebrate';
import { Router } from 'express';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from '../controllers/authControllers.js';
import { loginSchema, registerSchema } from '../validation/validations.js';

const authRouter = Router();

authRouter.post('/auth/register', celebrate(registerSchema), registerUser);

authRouter.post('/auth/login', celebrate(loginSchema), loginUser);
authRouter.post('/auth/logout', logoutUser);
authRouter.post('/auth/refreshUser', refreshUserSession);
export default authRouter;
