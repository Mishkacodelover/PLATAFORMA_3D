import db from "../mysql.js";
import moment from "moment/moment.js";

const collectionQueries = {};

collectionQueries.addCollection = async (collectionData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let collectionObj = {
      name: collectionData.collection_name,
      use: collectionData.collection_use,
      type: collectionData.collection_type,
      user: collectionData.usercollection,
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    return await db.query(
      "INSERT INTO collections SET ?",
      collectionObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

collectionQueries.getCollectionById = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM collections WHERE idcollections = ?",
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

collectionQueries.getCollectionByName = async (collectionName) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM collections WHERE collection_name = ?",
      collectionName,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

collectionQueries.getAllCollections = async () => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT * FROM collections", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default collectionQueries;
