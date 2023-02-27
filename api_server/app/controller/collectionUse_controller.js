import dao from "../services/dao.js";

const controller = {};

controller.addCollectionUse = async (req, res) => {
  const { collection, uses } = req.body;

  console.log(req.body);

  if (!collection || !uses)
    return res.status(400).send("Error al recibir el body");

  try {
    const addCollection = await dao.addCollectionUse(req.body);
    if (addCollection) return res.send(addCollection[0]);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getUseByCollection = async (req, res) => {
  try {
    const collection = await dao.getUseByCollection(req.params.id);

    if (collection.length <= 0)
      return res.status(404).send("El uso de la colección no existe");

    return res.send(collection[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getUseNameByCollection = async (req, res) => {
  try {
    const collection = await dao.getUseNameByCollection(req.params.id);

    if (collection.length <= 0)
      return res.status(404).send("El uso de la colección no existe");

    return res.send(collection[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getUseNameCollectionByUser = async (req, res) => {
  try {
    const collection = await dao.getUseNameCollectionByUser(req.params.id);

    if (collection.length <= 0)
      return res.status(404).send("El nombre y uso de la colección no existe");

    return res.send(collection);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
