import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

userRouter.post("/login", validateLoginDto, userController.loginUser);

userRouter.get("/:id", userController.getUser);

userRouter.get("/last-users", userController.getLastFourUsers);

userRouter.delete("/:id", userController.deleteUser);

userRouter.patch("/:id", userController.updateUser);

export default userRouter;
