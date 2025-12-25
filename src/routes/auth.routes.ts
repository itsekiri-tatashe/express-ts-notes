import { Router } from "express";
import { validate } from "../middleware/validateHandler";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validators/authValidators";
import { loginUser, registerUser } from "../controllers/authControllers";

const router = Router();

router.post("/register", validate(registerUserSchema), registerUser);
router.post("/login", validate(loginUserSchema), loginUser);

export default router;
