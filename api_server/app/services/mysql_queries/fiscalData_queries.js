import db from "../mysql.js";
import utils from "../../utils/utils.js";

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

fiscalDataQueries.getFiscalDataSuscriptionByUserId = async (userId) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT fiscaldata.companyName,fiscaldata.vatNumber,fiscaldata.fiscalAdress,fiscaldata.user,fiscaldata.suscription,suscription.name,suscription.price FROM fiscaldata join suscription on fiscaldata.suscription= suscription.id where fiscaldata.user = ?",
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
    let dataObj = {
      vatNumber: vatNumber.vatNumber,
    };

    return await db.query(
      "SELECT * FROM fiscalData WHERE vatNumber = ?",
      dataObj,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

fiscalDataQueries.updateFiscalData = async (userId, fiscalData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let dataObj = {
      companyName: fiscalData.companyName,
      vatNumber: fiscalData.vatNumber,
      fiscalAdress: fiscalData.fiscalAdress,
      isDeleted: fiscalData.isDeleted,
      userCreated: fiscalData.userCreated,
      userUpdated: fiscalData.userUpdated,
      suscription: fiscalData.suscription,
    };

    dataObj = await utils.removeUndefinedKeys(dataObj);
    return await db.query(
      "UPDATE fiscalData SET ? WHERE user = ?",
      [dataObj, userId],
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
