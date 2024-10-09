import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/* Register a new user */
export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  console.log("registerUser function called");
  console.log("Request body:", req.body);

  const { name, email, password, role } = req.body;
  try {
    /* Check if the user already exists */
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      res.status(400).json({ message: "User already exists" });
      return;
    }
    /* Create a new user */
    const user = new User({ name, email, password, role });
    await user.save();
    console.log("New user created:", email);
    /* Generate a token */
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "", {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* Login a user */
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  console.log("loginUser function called");
  console.log("Request body:", req.body);

  const { email, password } = req.body;
  try {
    /* Check if the user exists */
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found:", email);
      res.status(404).json({ message: "User not found" });
      return;
    }
    /* Check if the password is correct */
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log("Invalid credentials for user:", email);
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    /* Check if the user is active */
    if (user.status !== "active") {
      console.log("Inactive user attempted login:", email);
      res.status(403).json({ message: "User not active" });
      return;
    }
    /* Generate a token */
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "", {
      expiresIn: "1h",
    });
    console.log("User logged in successfully:", email);
    res.json({ token });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Server error" });
  }
};
