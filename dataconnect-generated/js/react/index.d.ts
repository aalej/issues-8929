import { ListEverythingData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useListEverything(options?: useDataConnectQueryOptions<ListEverythingData>): UseDataConnectQueryResult<ListEverythingData, undefined>;
export function useListEverything(dc: DataConnect, options?: useDataConnectQueryOptions<ListEverythingData>): UseDataConnectQueryResult<ListEverythingData, undefined>;
