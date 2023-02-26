import express from "express";
const patternRouter = express.Router();

import patternController from "../controller/pattern_controller.js";

patternRouter.post("/upload/pattern", patternController.uploadPattern);

patternRouter.get("/all-patterns/:id", patternController.getAllPatterns);

export default patternRouter;
