import dao from "../services/dao.js";

const controller = {};

controller.addFalsePiece = async (req, res) => {
  const { collection, pattern, resource, clotheName } = req.body;

  console.log(req.body);

  if (!collection || !pattern || !resource || !clotheName)
    return res.status(400).send("Error al recibir el body");

  const piece = await dao.getFalsePieceByCode(clotheName);

  if (piece.length > 0) return res.status(409).send("esta pieza ya existe");

  try {
    const addPiece = await dao.addFalsePiece(req.body);
    if (addPiece) return res.send(addPiece[0]);
  } catch (e) {
    console.log(e.message);
  }
};

controller.getFalsePieceImgById = async (req, res) => {
  try {
    const piece = await dao.getFalsePieceImgById(req.params.id);

    if (piece.length <= 0)
      return res.status(404).send("no existe la pieza con los recursos");

    return res.send(piece);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getFalsePieceImgByCollection = async (req, res) => {
  try {
    const piece = await dao.getFalsePieceImgByCollection(req.params.id);

    if (piece.length <= 0)
      return res.status(404).send("no existe la pieza con los recursos");

    return res.send(piece[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
