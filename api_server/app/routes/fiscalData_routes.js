import express from "express";
import fiscalDataController from "../controller/fiscalData_controller.js";

const fiscalDataRouter = express.Router();

fiscalDataRouter.post("/", fiscalDataController.addFiscalData);

fiscalDataRouter.get("/:id", fiscalDataController.getFiscalDataByUserId);

fiscalDataRouter.get(
  "/vatNumber",
  fiscalDataController.getFiscalDataByVatNumber
);

fiscalDataRouter.patch("/:id", fiscalDataController.updateFiscalData);

export default fiscalDataRouter;
