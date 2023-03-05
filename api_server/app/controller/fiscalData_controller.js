import dao from "../services/dao.js";
import { jwtVerify } from "jose";

const controller = {};

controller.addFiscalData = async (req, res) => {
  const { companyName, vatNumber, fiscalAdress, suscription } = req.body;

  console.log(req.body);

  if (!companyName || !vatNumber || !fiscalAdress || !suscription)
    return res.status(400).send("Error al recibir el body");

  try {
    const data = await dao.getFiscalDataByVatNumber(vatNumber);

    if (data.length > 0) return res.status(409).send("este NIF ya existe");

    await dao.addFiscalData(req.body, req.params.id);
    const user = await dao.getFiscalDataSuscriptionByUserId(req.params.id);

    return res.send(user[0]);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getFiscalDataSuscription = async (req, res) => {
  try {
    const data = await dao.getFiscalDataSuscription();

    if (data.length <= 0) return res.status(404).send("no hay datos");

    return res.send(data[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getFiscalDataSuscriptionByUserId = async (req, res) => {
  try {
    const data = await dao.getFiscalDataSuscriptionByUserId(req.params.id);

    if (data.length <= 0) return res.status(404).send("no existe");

    return res.send(data[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
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
  const { vatNumber } = req.body;
  try {
    const data = await dao.getFiscalDataByVatNumber(vatNumber);

    if (data.length <= 0) return res.status(404).send("el NIF no existe");

    return res.send(data[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.updateFiscalData = async (req, res) => {
  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");

    await dao.updateFiscalData(req.params.id, req.body);
    const data = await dao.getFiscalDataSuscriptionByUserId(req.params.id);

    return res.send(data[0]);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
