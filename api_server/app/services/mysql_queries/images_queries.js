import db from "../mysql.js";
import moment from "moment/moment.js";

const imagesQueries = {};

imagesQueries.addImage = async (imageData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let imageObj = {
      name: imageData.name,
      path: imageData.path,

      userCreated: imageData.userCreated,
    };

    return await db.query(
      "INSERT INTO resource SET ?",
      imageObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

imagesQueries.addAvatar = async (imageData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let imageObj = {
      name: imageData.name,
      path: imageData.path,

      userCreated: imageData.userCreated,
    };

    return await db.query("INSERT INTO avatar SET ?", imageObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

imagesQueries.getImageById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM resource WHERE id = ?",
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

imagesQueries.getAllImages = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT * FROM resource", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

imagesQueries.getAvatarByUserId = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM avatar WHERE userCreated = ?",
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

export default imagesQueries;
