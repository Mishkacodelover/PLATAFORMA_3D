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
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      product_id: imageData.productId,
    };

    return await db.query("INSERT INTO images SET ?", imageObj, "insert", conn);
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
      "SELECT * FROM images WHERE id = ?",
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
