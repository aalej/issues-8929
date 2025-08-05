import { queryRef, executeQuery, validateArgs } from 'firebase/data-connect';

export const Language = {
  ENGLISH: "ENGLISH",
  FRENCH: "FRENCH",
  SPANISH: "SPANISH",
  GERMAN: "GERMAN",
  JAPANESE: "JAPANESE",
  OTHER_LANGUAGES: "OTHER_LANGUAGES",
}

export const connectorConfig = {
  connector: 'default',
  service: 'test-dc-2',
  location: 'us-central1'
};

export const listEverythingRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListEverything');
}
listEverythingRef.operationName = 'ListEverything';

export function listEverything(dc) {
  return executeQuery(listEverythingRef(dc));
}

export const filterMoviesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'FilterMovies', inputVars);
}
filterMoviesRef.operationName = 'FilterMovies';

export function filterMovies(dcOrVars, vars) {
  return executeQuery(filterMoviesRef(dcOrVars, vars));
}

