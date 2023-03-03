import db from "../mysql.js";
import utils from "../../utils/utils.js";

const falsePieceQueries = {};

falsePieceQueries.addFalsePiece = async (pieceData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let Obj = {
      size: pieceData.size,
      color: pieceData.color,
      fabric: pieceData.fabric,
      clotheType: pieceData.clotheType,
      clotheName: pieceData.clotheName,
      collection: pieceData.collection,
      resource: pieceData.resource,
      pattern: pieceData.pattern,
      userCreated: pieceData.userCreated,
    };

    return await db.query(
      "INSERT INTO falsepiece SET ?",
      [Obj],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

falsePieceQueries.getFalsePieceByCode = async (name) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM falsePiece WHERE clotheName = ?",
      name,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

falsePieceQueries.getFalsePieceImgById = async (userId) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT  falsepiece.id as falsepieceId,falsepiece.size,falsepiece.color,falsepiece.fabric,falsepiece.clotheType,falsepiece.clotheName ,collection.collectionName,resource.path,resource.name,resource.id as resourceId,pattern.patternName,pattern.pathPattern,pattern.id as patternId FROM falsepiece join collection on falsepiece.collection = collection.id join resource on falsepiece.resource = resource.id join pattern on falsepiece.pattern = pattern.id where falsepiece.userCreated = ?",
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

export default falsePieceQueries;
