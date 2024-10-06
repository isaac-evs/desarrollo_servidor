import { Request, Response, NextFunction } from "express";
import { User } from "../types/users";

export function roles(allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const hardcodedUser: User = {
      id: "1",
      name: "John Doe",
      role: "gerente",
    };

    if (allowedRoles.includes(hardcodedUser.role!)) {
      req.user = hardcodedUser;
      return next();
    } else {
      return res.status(403).send("Acceso prohibido");
    }
  };
}
