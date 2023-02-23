import express from "express";
import userController from "../controller/user_controller.js";
import validateLoginDto from "../utils/validate_login_dto.js";

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

userRouter.post("/invited", userController.addInvitedUser);

userRouter.post("/login", validateLoginDto, userController.loginUser);

userRouter.post(
  "/invited/login",
  validateLoginDto,
  userController.loginInvitedUser
);

userRouter.get("/last-users", userController.getLastFourUsers);

userRouter.get("/all-users", userController.getAllActiveUsers);

userRouter.get("/:id", userController.getUser);

userRouter.delete("/:id", userController.logicDeleteUser);

userRouter.patch("/:id", userController.updateUser);

export default userRouter;
