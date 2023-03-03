import express from "express";
import imagesController from "../controller/images_controller.js";

const imagesRouter = express.Router();

imagesRouter.post("/upload", imagesController.uploadResource);

imagesRouter.get("/all-images/:id", imagesController.getAllResources);

imagesRouter.get("/image/:id", imagesController.getImage);

imagesRouter.delete("/image/:id", imagesController.logicDeleteResource);

imagesRouter.post("/upload/avatar", imagesController.uploadAvatar);

imagesRouter.get("/avatar/:id", imagesController.getAvatarByUserId);

export default imagesRouter;
