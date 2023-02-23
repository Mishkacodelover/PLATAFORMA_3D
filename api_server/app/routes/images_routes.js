import express from "express";
import imagesController from "../controller/images_controller.js";

const imagesRouter = express.Router();

imagesRouter.post("/upload", imagesController.uploadImage);

imagesRouter.post("/upload/avatar", imagesController.uploadAvatar);

imagesRouter.get("/image/:id", imagesController.getImage);

imagesRouter.get("/all-images", imagesController.getAllImages);

export default imagesRouter;
