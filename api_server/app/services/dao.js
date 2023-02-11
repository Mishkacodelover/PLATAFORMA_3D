import userQueries from "./mysql_queries/user_queries.js";
import imagesQueries from "./mysql_queries/images_queries.js";
import collectionQueries from "./mysql_queries/collection_queries.js";
const dao = {};

dao.getUserbyEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.getUserbyId = async (id) => await userQueries.getUserbyId(id);

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.deleteUser = async (id) => await userQueries.deleteUser(id);

dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

dao.addCollection = async (collectionData) =>
  await collectionQueries.addCollection(collectionData);

dao.getCollectionById = async (id) =>
  await collectionQueries.getCollectionById(id);

dao.getCollectionByName = async (collectionName) =>
  await collectionQueries.getCollectionByName(collectionName);

dao.getCollection = async (id) => await collectionQueries.getCollectionById(id);

dao.getAllCollections = async () => await collectionQueries.getAllCollections();

dao.addImage = async (imageData) => await imagesQueries.addImage(imageData);

dao.getImageById = async (id) => await imagesQueries.getImageById(id);

export default dao;
