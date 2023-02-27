import express from "express";
import collectionUseController from "../controller/collectionUse_controller.js";

const collectionUseRouter = express.Router();

collectionUseRouter.post("/", collectionUseController.addCollectionUse);

collectionUseRouter.get(
  "/collection/:id",
  collectionUseController.getUseByCollection
);

collectionUseRouter.get(
  "/collectionName/:id",
  collectionUseController.getUseNameByCollection
);

collectionUseRouter.get(
  "/collection-complete/:id",
  collectionUseController.getUseNameCollectionByUser
);

export default collectionUseRouter;
