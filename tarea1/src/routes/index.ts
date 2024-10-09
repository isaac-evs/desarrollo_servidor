import { Router } from "express";
import users from "./users";
import peluches from "./peluches";

const router = Router();

router.use("/", users);
router.use("/peluches", peluches);

export default router;
