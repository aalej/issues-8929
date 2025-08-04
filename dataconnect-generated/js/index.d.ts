import { ConnectorConfig, DataConnect, QueryRef, QueryPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export enum Language {
  ENGLISH = "ENGLISH",
  FRENCH = "FRENCH",
  SPANISH = "SPANISH",
  GERMAN = "GERMAN",
  JAPANESE = "JAPANESE",
  OTHER_LANGUAGES = "OTHER_LANGUAGES",
};



export interface ListEverythingData {
  movies: ({
    id: UUIDString;
    originalLanguage: Language;
    availableLanguages?: Language[] | null;
  } & Movie_Key)[];
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

interface ListEverythingRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListEverythingData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListEverythingData, undefined>;
  operationName: string;
}
export const listEverythingRef: ListEverythingRef;

export function listEverything(): QueryPromise<ListEverythingData, undefined>;
export function listEverything(dc: DataConnect): QueryPromise<ListEverythingData, undefined>;

