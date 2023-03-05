import dao from "../services/dao.js";
import { SignJWT, jwtVerify } from "jose";
import md5 from "md5";

const controller = {};

controller.addUser = async (req, res) => {
  const { email, password, name, surname } = req.body;
  console.log(req.body);

  if (!email || !password || !name || !surname)
    return res.status(400).send("Error al recibir el body");

  try {
    const user = await dao.getUserbyEmail(email);

    if (user.length > 0) return res.status(409).send("usuario ya registrado");

    await dao.addUser(req.body);

    const addUser = await dao.getAllActiveUsers();

    if (addUser) return res.send(addUser);
  } catch (e) {
    console.log(e.message);
  }
};

controller.addInvitedUser = async (req, res) => {
  const { email, password, name, surname } = req.body;
  console.log(req.body);

  if (!email || !password || !name || !surname)
    return res.status(400).send("Error al recibir el body");

  try {
    const user = await dao.getInvitedUserbyEmail(email);

    if (user.length > 0) return res.status(409).send("usuario ya registrado");

    await dao.addInvitedUser(req.body);
    const addUser = await dao.getAllActiveUsers();

    if (addUser) return res.send(addUser);
  } catch (e) {
    console.log(e.message);
  }
};

controller.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password)
    return res.status(400).send("Error al recibir el body");
  try {
    let user = await dao.getUserbyEmail(email);

    if (user.length <= 0)
      return res.status(404).send("el usuario no está registrado");

    const clienPassword = md5(password);

    [user] = user;

    if (user.password != clienPassword)
      return res.status(401).send("password incorrecta");
    const jwtConstructor = new SignJWT({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });
    const encoder = new TextEncoder();

    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(encoder.encode(process.env.JWT_SECRET));

    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

controller.loginInvitedUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password)
    return res.status(400).send("Error al recibir el body");
  try {
    let user = await dao.getInvitedUserbyEmail(email);

    if (user.length <= 0)
      return res.status(404).send("el usuario no está registrado");

    const clienPassword = md5(password);

    [user] = user;

    if (user.password != clienPassword)
      return res.status(401).send("password incorrecta");
    const jwtConstructor = new SignJWT({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    const encoder = new TextEncoder();

    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(encoder.encode(process.env.JWT_SECRET));

    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

controller.getUser = async (req, res) => {
  try {
    const user = await dao.getUserById(req.params.id);

    if (user.length <= 0) return res.status(404).send("EL usuario no existe");

    return res.send(user[0]);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getLastFourUsers = async (req, res) => {
  try {
    const users = await dao.getLastFourUsers();

    if (users.length <= 0) return res.status(404).send("No existen usuarios");

    return res.send(users);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.getAllActiveUsers = async (req, res) => {
  try {
    const users = await dao.getAllActiveUsers();

    if (users.length <= 0)
      return res.status(404).send("No existen usuarios activos");

    return res.send(users);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }
};

controller.deleteUser = async (req, res) => {
  const { authorization } = req.headers;
  //no olvidar que para probar este end-point, el token se pasa por el bearer sin comillas y eliminando la palabra bearer del prefijo abajo
  if (!authorization) return res.sendStatus(401);
  const token = authorization.split(" ")[1];
  try {
    const encoder = new TextEncoder();

    const { payload } = await jwtVerify(
      token,
      encoder.encode(process.env.JWT_SECRET)
    );
    if (payload.role > 1)
      return res.status(409).send("no tiene permiso de administrador");

    const user = await dao.getUserById(req.params.id);

    if (user.length <= 0) return res.status(404).send("el usuario no existe");

    await dao.deleteUser(req.params.id);

    return res.send(`Usuario con id ${req.params.id} eliminado`);
  } catch (e) {
    console.log(e.message);
  }
};

controller.logicDeleteUser = async (req, res) => {
  try {
    await dao.deleteUser(req.params.id);
    const users = await dao.getAllActiveUsers();

    return res.send(users);
  } catch (e) {
    console.log(e.message);
  }
};

controller.updateUser = async (req, res) => {
  try {
    if (Object.entries(req.body).length === 0)
      return res.status(400).send("Error al recibir el body");

    await dao.updateUser(req.params.id, req.body);
    const user = await dao.getUserById(req.params.id);
    return res.send(user[0]);
  } catch (e) {
    console.log(e.message);
  }
};

export default controller;
