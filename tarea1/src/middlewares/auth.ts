import { Request, Response, NextFunction } from "express";
import { User } from "../types/users";

const secretKey = "12345";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const key = req.query.key;
  if (key === secretKey) {
    const user: User = {
      id: "1",
      name: "Jame Doe",
    };
    return next();
  }

  res.sendStatus(401);
}
