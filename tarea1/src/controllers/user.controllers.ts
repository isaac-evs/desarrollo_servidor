import { Request, Response } from "express";

export class UsersController {
  getAll(req: Request, res: Response) {
    res.send([]);
  }
}

const usersController = new UsersController();
export default usersController;
