import db from "../mysql.js";

import md5 from "md5";
import utils from "../../utils/utils.js";
const userQueries = {};

userQueries.getUserbyEmail = async (email) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM user WHERE email = ?",
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

userQueries.getInvitedUserbyEmail = async (email) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM invitedusers WHERE email = ?",
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

userQueries.getUserById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM user WHERE id = ?",
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

//de momento solo traigo los últimos 4, query temporal
userQueries.getLastFourUsers = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM user order by tsCreated desc limit 4",
      [],
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getAllActiveUsers = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM user where isDelete = false",
      [],
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
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      password: md5(userData.password),
      userType: userData.userType,
      role: userData.role || 1,
    };

    return await db.query("INSERT INTO user SET ?", userObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addInvitedUser = async (userData) => {
  let conn = null;

  try {
    conn = await db.createConnection();

    let userObj = {
      userCreated: userData.userCreated,
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      password: md5(userData.password),
      userType: userData.userType,
      role: userData.role,
    };

    return await db.query(
      "INSERT INTO invitedusers SET ?",
      userObj,
      "insert",
      conn
    );
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
    return await db.query("DELETE FROM user WHERE id = ?", id, "delete", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.logicDeleteUser = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "UPDATE user set isDelete = 1 WHERE id = ?",
      id,
      "update",
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
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      password: userData.password ? md5(userData.password) : undefined,
      userType: userData.userType,
      role: userData.role,
      isDelete: userData.isDelete,
    };

    userObj = await utils.removeUndefinedKeys(userObj);
    return await db.query(
      "UPDATE user SET ? WHERE id = ?",
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
