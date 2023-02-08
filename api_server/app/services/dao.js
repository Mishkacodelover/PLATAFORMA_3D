import userQueries from "./mysql_queries/user_queries.js";
import imagesQueries from "./mysql_queries/images_queries.js";
const dao = {};

dao.getUserbyEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.getUserbyId = async (id) => await userQueries.getUserbyId(id);

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.deleteUser = async (id) => await userQueries.deleteUser(id);

dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

dao.addImage = async (imageData) => await imagesQueries.addImage(imageData);

dao.getImageById = async (id) => await imagesQueries.getImageById(id);

export default dao;
