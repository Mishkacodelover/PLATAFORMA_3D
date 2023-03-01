import express from "express";
import falsePieceController from "../controller/falsePiece_controller.js";

const falsePieceRouter = express.Router();

falsePieceRouter.post("/", falsePieceController.addFalsePiece);

falsePieceRouter.get(
  "/piece-img/:id",
  falsePieceController.getFalsePieceImgById
);

export default falsePieceRouter;
