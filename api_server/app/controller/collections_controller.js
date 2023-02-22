import dao from "../services/dao.js";

const controller = {};

controller.addCollections = async (req, res) => {
  const { collectionName, collectionType, initialDate, finishDate } = req.body;

  console.log(req.body);

  if (!collectionName || !collectionType || !initialDate || !finishDate)
    return res.status(400).send("Error al recibir el body");

  try {
    const collection = await dao.getCollectionByName(collectionName);

    if (collection.length > 0)
      return res.status(409).send("esta colección ya existe");

    const addCollection = await dao.addCollection(req.body);
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
      return res.status(404).send("La colección no existe");

    return res.send(collection[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getAllCollections = async (req, res) => {
  try {
    const collections = await dao.getAllCollections(req.params.id);

    if (collections.length <= 0)
      return res.status(404).send("No existen colecciones");

    return res.send(collections);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.updateCollection = async (req, res) => {
  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");

    await dao.updateCollection(req.body, req.params.id);
    const data = await dao.getCollectionById(req.params.id);

    return res.send(data[0]);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
