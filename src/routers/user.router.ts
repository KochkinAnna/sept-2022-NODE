import { Request, Response, Router } from "express";

import { userConroller } from "../controllers/user.conroller";
import { userMiddleWare } from "../middlewares";

const router = Router();

router.get("/", userConroller.getAll);

router.get("/:userId", userMiddleWare.getByIdAndThrow, userConroller.getById);

router.post("/", userConroller.create);

router.put("/:userId", userConroller.update);

router.delete("/:userId", userConroller.delete);

router.get("/welcome", (req: Request, res: Response) => {
  res.send("WELCOME");
});

export const userRouter = router;
