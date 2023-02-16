import db from "../mysql.js";

const collectionQueries = {};

collectionQueries.addCollection = async (collectionData, userId) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let collectionObj = {
      collectionName: collectionData.collectionName,
      collectionType: collectionData.collectionType,
      initialDate: collectionData.initialDate,
      finishDate: collectionData.initialDate,
      userCreated: userId,
    };

    return await db.query(
      "INSERT INTO collection SET ?",
      [collectionObj],
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
      "SELECT * FROM collection WHERE id = ?",
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
      "SELECT * FROM collection WHERE collectionName = ?",
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
    return await db.query("SELECT * FROM collection", [], "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default collectionQueries;
