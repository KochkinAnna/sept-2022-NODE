import { Request, Response } from "express";

import { User } from "../models/User.model";
import { IUser } from "../types/user.types";

class UserConroller {
  public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
    const users = await User.find();

    return res.json(users);
  }
}

export const userConroller = new UserConroller();
