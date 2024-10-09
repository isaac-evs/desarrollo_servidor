/* Imports neccesary modules and libraries */
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

/* Load environment variables */
dotenv.config();

/* Middleware to protect routes */
export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let token = req.headers.authorization;

  /* Obtain Token without bearer */
  if (token && token.startsWith("Bearer")) {
    token = token.split(" ")[1];

    /* Verify the token */
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
      (req as any).user = decoded;
      /* If everything is succesfull move to the next middleware */
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};
