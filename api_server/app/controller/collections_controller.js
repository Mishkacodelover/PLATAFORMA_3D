import dao from "../services/dao.js";

const controller = {};

controller.addCollections = async (req, res) => {
  const { collection_name, collection_use, collection_type } = req.body;
  console.log(req.body);

  if (!collection_name || !collection_use || !collection_type)
    return res.status(400).send("Error al recibir el body");

  try {
    const collection = await dao.getCollectionByName(collection_name);

    if (collection.length > 0)
      return res.status(409).send("esta colección ya existe");

    const addCollection = await dao.addCollection(req.body);
    if (addCollection)
      return res.send(
        `Colección ${collection_name} con id: ${addCollection} registrada`
      );
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
