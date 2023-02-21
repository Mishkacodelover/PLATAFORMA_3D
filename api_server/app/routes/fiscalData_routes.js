import express from "express";
import fiscalDataController from "../controller/fiscalData_controller.js";

const fiscalDataRouter = express.Router();
fiscalDataRouter.get(
  "/vat-number",
  fiscalDataController.getFiscalDataByVatNumber
);
fiscalDataRouter.get(
  "suscription/:id",
  fiscalDataController.getFiscalDataSuscriptionByUserId
);

fiscalDataRouter.post("/:id", fiscalDataController.addFiscalData);

fiscalDataRouter.get("/:id", fiscalDataController.getFiscalDataByUserId);

fiscalDataRouter.patch("/:id", fiscalDataController.updateFiscalData);

export default fiscalDataRouter;
