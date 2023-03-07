import { NextFunction, Request, Response } from "express";

import { User } from "../models/User.model";
import { userService } from "../services/user.service";
import { IUser } from "../types/user.types";
import { IMessage, ICommonResponse} from "../types/common.types";

class UserConroller {
  public async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> {
    try {
      const users = await userService.getAll();

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  public async getById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<IUser[]>> {
    try {
      const { userId } = req.params;
      const user = await userService.getById(userId);

      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ICommonResponse<IUser>>> {
    try {
      const body = req.body;
      const user = await User.create({ ...body });

      return res.status(201).json({
        message: "User created!",
        data: user,
      });
    } catch (e) {
      next(e);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ICommonResponse<IUser>>> {
    try {
      const { userId } = req.params;
      const user = req.body;

      const updatedUserr = await User.updateOne({ _id: userId }, user);

      return res.status(200).json({
        message: "User updated",
        data: updatedUserr,
      });
    } catch (e) {
      next(e);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response<ICommonResponse<IMessage>>> {
    try {
      const { userId } = req.params;

      await User.deleteOne({ _id: userId });

      return res.status(200).json({
        message: "User deleted",
      });
    } catch (e) {
      next(e);
    }
  }
}

export const userConroller = new UserConroller();