import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const __dirname = currentDir().__dirname;

const controller = {};

controller.uploadResource = async (req, res) => {
  try {
    if (req.files === null) return;
    console.log(req.files);
    if (!req.files) {
      return res.status(400).send("No se ha cargado ningún archivo");
    }

    const images = !req.files.file.length ? [req.files.file] : req.files.file;

    for await (const image of images) {
      let uploadPath = __dirname + "/public/images/products/" + image.name;
      let BBDDPath = "images/products/" + image.name;
      await image.mv(uploadPath);
      await dao.addResource({
        name: image.name,
        path: BBDDPath,
        userCreated: req.body.userCreated,
      });
    }
    const resource = await dao.getAllResources(req.body.userCreated);
    return res.send(resource);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.uploadAvatar = async (req, res) => {
  try {
    if (req.files === null) return;

    if (!req.files) {
      return res.status(400).send("No se ha cargado ningún archivo");
    }

    const images = !req.files.file.length ? [req.files.file] : req.files.file;

    images.forEach(async (image) => {
      let uploadPath = __dirname + "/public/images/products/" + image.name;
      let BBDDPath = "images/products/" + image.name;
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      await dao.addAvatar({
        name: image.name,
        path: BBDDPath,
        userCreated: req.body.userCreated,
      });
    });
    return res.send(images[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getImage = async (req, res) => {
  try {
    const image = await dao.getImageById(req.params.id);

    if (image.length <= 0) return res.status(404).send("La imagen no existe");

    return res.sendFile(image[0].path, { root: __dirname });
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getAvatarByUserId = async (req, res) => {
  try {
    const avatar = await dao.getAvatarByUserId(req.params.id);

    if (avatar.length <= 0)
      return res.status(404).send("El avatar del usuario no existe");

    return res.send(avatar[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getAllResources = async (req, res) => {
  try {
    const resources = await dao.getAllResources(req.params.id);

    if (resources.length <= 0)
      return res.status(404).send("No existen recursos gráficos");

    return res.send(resources);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
