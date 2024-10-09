import { Router } from "express";
import upload from "./../middlewares/upload";

const router = Router();

router.get("", (req, res) => {
  res.send("api works!");
});

router.post("/upload", upload.array("docs"), (req, res) => {
  if (req.files) {
    res.send("File uploaded succesfully");
  } else {
    res.send("File not uploaded");
  }
});

export default router;
