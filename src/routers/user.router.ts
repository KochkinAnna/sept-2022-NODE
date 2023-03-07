import { Request, Response, Router } from "express";

import { userConroller } from "../controllers/user.conroller";
import { User } from "../models/User.model";
import { IUser } from "../types/user.types";

const router = Router();

router.get("/", userConroller.getAll);

router.get(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;
    const user = await User.findById(userId);

    return res.json(user);
  }
);

router.post("/users", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create({ ...body });

  res.status(201).json({
    message: "User created!",
    data: user,
  });
});

router.put("/users/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const user = req.body;

  const updatedUserr = await User.updateOne({ _id: userId }, user);

  res.status(200).json({
    message: "User updated",
    data: updatedUserr,
  });
});

router.delete("/users/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;

  await User.deleteOne({ _id: userId });

  res.status(200).json({
    message: "User deleted",
  });
});

router.get("/welcome", (req: Request, res: Response) => {
  res.send("WELCOME");
});

export const userRouter = router;
