import dao from "../services/dao.js";
import { jwtVerify } from "jose";

const controller = {};

controller.addCollections = async (req, res) => {
  const { collectionName, collectionType, initialDate, finishDate } = req.body;
  const { authorization } = req.headers;

  console.log(req.body);

  if (!collectionName || !collectionType || !initialDate || !finishDate)
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
    const collection = await dao.getCollectionByName(collectionName);

    if (collection.length > 0)
      return res.status(409).send("esta colección ya existe");

    const addCollection = await dao.addCollection(req.body, payload.id);
    if (addCollection)
      return res.send(
        `Colección ${collectionName} con id: ${addCollection} registrada`
      );
  } catch (e) {
    console.log(e.message);
  }
};

controller.getCollection = async (req, res) => {
  try {
    const collection = await dao.getCollectionById(req.params.id);

    if (collection.length <= 0)
      return res.status(404).send("La coleción no existe");

    return res.send(collection[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getAllCollections = async (req, res) => {
  try {
    const collections = await dao.getAllCollections();

    if (collections.length <= 0)
      return res.status(404).send("No existen colecciones");

    return res.send(collections);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
