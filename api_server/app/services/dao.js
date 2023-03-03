import userQueries from "./mysql_queries/user_queries.js";
import imagesQueries from "./mysql_queries/images_queries.js";
import collectionQueries from "./mysql_queries/collection_queries.js";
import fiscalDataQueries from "./mysql_queries/fiscalData_queries.js";
import patternQueries from "./mysql_queries/pattern_queries.js";
import collectionUseQueries from "./mysql_queries/collectionUse_queries.js";
import falsePieceQueries from "./mysql_queries/falsePiece_queries.js";
const dao = {};

dao.getUserbyEmail = async (email) => await userQueries.getUserbyEmail(email);

dao.getInvitedUserbyEmail = async (email) =>
  await userQueries.getInvitedUserbyEmail(email);

dao.getUserById = async (id) => await userQueries.getUserById(id);

dao.getLastFourUsers = async () => await userQueries.getLastFourUsers();

dao.getAllActiveUsers = async () => await userQueries.getAllActiveUsers();

dao.addUser = async (userData) => await userQueries.addUser(userData);

dao.addInvitedUser = async (userData) =>
  await userQueries.addInvitedUser(userData);

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

dao.logicDeleteCollection = async (id) =>
  await collectionQueries.logicDeleteCollection(id);

dao.addCollectionUse = async (collectionData) =>
  await collectionUseQueries.addCollectionUse(collectionData);

dao.getUseByCollection = async (collectionId) =>
  await collectionUseQueries.getUseByCollection(collectionId);

dao.getUseNameByCollection = async (collectionId) =>
  await collectionUseQueries.getUseNameByCollection(collectionId);

dao.getUseNameCollectionByUser = async (userId) =>
  await collectionUseQueries.getUseNameCollectionByUser(userId);

dao.addResource = async (imageData) =>
  await imagesQueries.addResource(imageData);

dao.getAllResources = async (id) => await imagesQueries.getAllResources(id);

dao.logicDeleteResource = async (id) =>
  await imagesQueries.logicDeleteResource(id);

dao.addAvatar = async (imageData) => await imagesQueries.addAvatar(imageData);

dao.getImageById = async (id) => await imagesQueries.getImageById(id);

dao.getAvatarByUserId = async (id) => await imagesQueries.getAvatarByUserId(id);

dao.getAllPatterns = async (id) => await patternQueries.getAllPatterns(id);

dao.addPattern = async (imageData) =>
  await patternQueries.addPattern(imageData);

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

dao.addFalsePiece = async (pieceData) =>
  await falsePieceQueries.addFalsePiece(pieceData);

dao.getFalsePieceByCode = async (name) =>
  await falsePieceQueries.getFalsePieceByCode(name);
dao.getFalsePieceImgById = async (userId) =>
  await falsePieceQueries.getFalsePieceImgById(userId);

export default dao;
