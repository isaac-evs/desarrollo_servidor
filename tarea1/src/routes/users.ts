import { Router } from "express";
import usersController from "../controllers/user.controllers";
import { authMiddleware } from "../middlewares/auth";
import { roles } from "../middlewares/roles";

const router = Router();

// Aplica el middleware de autenticación y de roles
router.get(
  "/usuarios",
  authMiddleware,
  roles(["admin", "gerente"]),
  (req, res) => {
    res.send("lista de usuarios");
  },
);

export default router;
