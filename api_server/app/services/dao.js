import userQueries from "./mysql_queries/user_queries.js";
import imagesQueries from "./mysql_queries/images_queries.js";
import collectionQueries from "./mysql_queries/collection_queries.js";
import fiscalDataQueries from "./mysql_queries/fiscalData_queries.js";
const dao = {};

dao.getUserbyEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.getLastFourUsers = async () => await userQueries.getLastFourUsers();

dao.getAllActiveUsers = async () => await userQueries.getAllActiveUsers();

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.deleteUser = async (id) => await userQueries.logicDeleteUser(id);

dao.updateUser = async (id, userData) =>
  await userQueries.updateUser(id, userData);

dao.addCollection = async (collectionData) =>
  await collectionQueries.addCollection(collectionData);

dao.getCollectionById = async (id) =>
  await collectionQueries.getCollectionById(id);

dao.getCollectionByName = async (collectionName) =>
  await collectionQueries.getCollectionByName(collectionName);

dao.getCollection = async (id) => await collectionQueries.getCollectionById(id);

dao.getAllCollections = async (userId) =>
  await collectionQueries.getAllCollections(userId);

dao.updateCollection = async (collectionData, id) =>
  await collectionQueries.updateCollection(collectionData, id);

dao.addImage = async (imageData) => await imagesQueries.addImage(imageData);

dao.getImageById = async (id) => await imagesQueries.getImageById(id);

dao.getAllImages = async () => await imagesQueries.getAllImages();

dao.addFiscalData = async (fiscalData, userId) =>
  await fiscalDataQueries.addFiscalData(fiscalData, userId);

dao.getFiscalDataSuscription = async () =>
  await fiscalDataQueries.getFiscalDataSuscription();

dao.getFiscalDataByVatNumber = async (vatNumber) =>
  await fiscalDataQueries.getFiscalDataByVatNumber(vatNumber);

dao.updateFiscalData = async (id, fiscalData) =>
  await fiscalDataQueries.updateFiscalData(id, fiscalData);

dao.getFiscalDataByUserId = async (id) =>
  await fiscalDataQueries.getFiscalDataByUserId(id);

dao.getFiscalDataSuscriptionByUserId = async (id) =>
  await fiscalDataQueries.getFiscalDataSuscriptionByUserId(id);

export default dao;
