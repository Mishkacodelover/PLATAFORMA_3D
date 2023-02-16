import dao from "../services/dao.js";
import { jwtVerify } from "jose";

const controller = {};

controller.addFiscalData = async (req, res) => {
  const { companyName, vatNumber, fiscalAdress, suscription } = req.body;
  const { authorization } = req.headers;

  console.log(req.body);

  if (!companyName || !vatNumber || !fiscalAdress || !suscription)
    return res.status(400).send("Error al recibir el body");

  if (!authorization) return res.sendStatus(401);
  const encoder = new TextEncoder();

  const { payload } = await jwtVerify(
    authorization,
    encoder.encode(process.env.JWT_SECRET)
  );
  if (!payload.id)
    return res.status(409).send("no se encuetra el id del usuario");

  try {
    const data = await dao.getFiscalDataByVatNumber(vatNumber);

    if (data.length > 0) return res.status(409).send("este NIF ya existe");

    const addFiscalData = await dao.addFiscalData(req.body, payload.id);
    if (addFiscalData)
      return res.send(
        `Empresa ${companyName} con id: ${addFiscalData} registrada`
      );
  } catch (e) {
    console.log(e.message);
  }
};

controller.getFiscalDataByUserId = async (req, res) => {
  try {
    const data = await dao.getFiscalDataByUserId(req.params.id);

    if (data.length <= 0) return res.status(404).send("los  datos  no existen");

    return res.send(data[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getFiscalDataByVatNumber = async (req, res) => {
  try {
    const { vatNumber } = req.body;
    const data = await dao.getFiscalDataByVatNumber(vatNumber);

    if (data.length <= 0) return res.status(404).send("el NIF no existe");

    return res.send(data[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.updateFiscalData = async (req, res) => {
  if (!payload.role)
    return res.status(409).send("no tiene permiso de administrador");
  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");

    await dao.updateFiscalData(req.params.id, req.body);

    return res.send(`Usuario con id ${req.params.id} modificado`);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
