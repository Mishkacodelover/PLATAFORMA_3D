import db from "../mysql.js";
import moment from "moment/moment.js";
import md5 from "md5";
import utils from "../../utils/utils.js";
const userQueries = {};

userQueries.getUserbyEmail = async (email) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM users WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserbyId = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM users WHERE iduser = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addUser = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      email: userData.email,
      password: md5(userData.password),
      user_role: userData.user_role,
      suscription: userData.suscription,
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    return await db.query("INSERT INTO users SET ?", userObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.deleteUser = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "DELETE FROM users WHERE iduser = ?",
      id,
      "delete",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.updateUser = async (id, userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      email: userData.email,
      password: userData.password ? md5(userData.password) : undefined,
      user_role: userData.user_role,
      suscription: userData.suscription,
      update_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    userObj = await utils.removeUndefinedKeys(userObj);
    return await db.query(
      "UPDATE users SET ? WHERE iduser = ?",
      [userObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default userQueries;
