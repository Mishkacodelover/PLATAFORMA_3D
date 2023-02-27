import db from "../mysql.js";
import utils from "../../utils/utils.js";

const collectionUseQueries = {};

collectionUseQueries.addCollectionUse = async (collectionData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let collectionObj = {
      collection: collectionData.collection,
      uses: collectionData.uses,
      description: collectionData.description,
    };

    return await db.query(
      "INSERT INTO collectionuse SET ?",
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

collectionUseQueries.getUseByCollection = async (collectionId) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM collectionuse where collection = ?  ",
      collectionId,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

collectionUseQueries.getUseNameByCollection = async (collectionId) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT collectionuse.uses,collectionuse.collection,uses.name FROM collectionuse join uses on collectionuse.uses = uses.id where collection = ?",
      collectionId,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

collectionUseQueries.getUseNameCollectionByUser = async (userId) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      " SELECT  collectionuse.description, uses.name, collection.collectionName,collection.collectionType,collection.initialDate,collection.finishDate FROM collectionuse  join uses on collectionuse.uses = uses.id join collection on collectionuse.collection = collection.id where collection.userCreated = ?",
      userId,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default collectionUseQueries;
