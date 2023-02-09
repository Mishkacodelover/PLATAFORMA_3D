import express from "express";
import collectionController from "../controller/collections_controller.js";

const collectionRouter = express.Router();

collectionRouter.post("/", collectionController.addCollections);

export default collectionRouter;
