import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index";
import path from "path";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/assets", express.static(path.join(__dirname, "..", "public")));

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
