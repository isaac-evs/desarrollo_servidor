import express from "express";
import routes from "./routes";

const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Api works!");
});

app.use(routes);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
