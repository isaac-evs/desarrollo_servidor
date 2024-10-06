import { Request, Response } from "express";
import usersController from "./user.controllers";

class PeluchesController {
  getAll(req: Request, res: Response) {
    res.send([]);
  }
}

const peluchesController = new PeluchesController();
export default usersController;
