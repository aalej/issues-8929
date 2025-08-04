const { queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

const Language = {
  ENGLISH: "ENGLISH",
  FRENCH: "FRENCH",
  SPANISH: "SPANISH",
  GERMAN: "GERMAN",
  JAPANESE: "JAPANESE",
  OTHER_LANGUAGES: "OTHER_LANGUAGES",
}
exports.Language = Language;

const connectorConfig = {
  connector: 'default',
  service: 'test-dc-2',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const listEverythingRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEverything');
}
listEverythingRef.operationName = 'ListEverything';
exports.listEverythingRef = listEverythingRef;

exports.listEverything = function listEverything(dc) {
  return executeQuery(listEverythingRef(dc));
};
