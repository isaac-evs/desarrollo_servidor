/* Import Neccesary Frameworks/Libraries */
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import authRoutes from "./routes/authroutes";

/* Load Environment Variables */
dotenv.config();

/* Start an instance of express */
const app = express();

/* Define port */
const port = process.env.PORT || 3000;

/* Connect to the database */
connectDB();

/* Middlewares */
app.use(express.json());

/* Debbuging routes */
app.use((req, res, next) => {
  console.log(`Received ${req.url} request from ${req.url}`);
  console.log("Request body:", req.body);
  next();
});

/* Routes */
console.log("authRoutes:", authRoutes);
app.use("/api/auth", authRoutes);

/* Default Route */
app.get("/", (req, res) => {
  res.json({ message: "API WORKS" });
});

/* Route not found */
app.use((req, res) => {
  console.log(`404: Route not found for ${req.method} ${req.url}`);
  res.status(404).json({ message: "Route not found" });
});

/* Start the server */
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
