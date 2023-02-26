import { currentDir } from "../index.js";
import dao from "../services/dao.js";

const __dirname = currentDir().__dirname;

const controller = {};

controller.uploadPattern = async (req, res) => {
  try {
    if (req.files === null) return;
    console.log(req.files);
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
      await dao.addPattern({
        patternName: image.name,
        pathPattern: BBDDPath,
        userCreated: req.body.userCreated,
      });
    });

    return res.send("Imagen subida!");
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getAllPatterns = async (req, res) => {
  try {
    const patterns = await dao.getAllPatterns(req.params.id);

    if (patterns.length <= 0)
      return res.status(404).send("No existen recursos gráficos");

    return res.send(patterns);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

export default controller;
