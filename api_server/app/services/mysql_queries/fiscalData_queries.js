import db from "../mysql.js";

const fiscalDataQueries = {};

fiscalDataQueries.addFiscalData = async (fiscalData, userId) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let dataObj = {
      companyName: fiscalData.companyName,
      vatNumber: fiscalData.vatNumber,
      fiscalAdress: fiscalData.fiscalAdress,
      user: userId,
      isDeleted: fiscalData.isDeleted,
      userCreated: fiscalData.userCreated,
      userUpdated: fiscalData.userUpdated,
      suscription: fiscalData.suscription,
    };

    return await db.query(
      "INSERT INTO fiscalData SET ?",
      [dataObj],
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

fiscalDataQueries.getFiscalDataByUserId = async (userId) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM fiscalData WHERE user = ?",
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

fiscalDataQueries.getFiscalDataByVatNumber = async (vatNumber) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM fiscalData WHERE vatNumber = ?",
      vatNumber,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

fiscalDataQueries.updateFiscalData = async (id, fiscalData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let dataObj = {
      companyName: fiscalData.companyName,
      vatNumber: fiscalData.vatNumber,
      fiscalAdress: fiscalData.fiscalAdress,
      user: userId,
      isDeleted: fiscalData.isDeleted,
      userCreated: fiscalData.userCreated,
      userUpdated: fiscalData.userUpdated,
      suscription: fiscalData.suscription,
    };

    userObj = await utils.removeUndefinedKeys(dataObj);
    return await db.query(
      "UPDATE fiscalData SET ? WHERE id = ?",
      [dataObj, id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

export default fiscalDataQueries;
