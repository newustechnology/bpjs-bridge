// src/types/global.ts (lebih aman daripada .d.ts)
export interface MetaData {
  code: number;
  message: string;
}

export interface BPJSResponse<T> {
  metaData: MetaData;
  response: T;
}

export type DataObject<T> = T;

export type DataArray<T> = {
  list: Array<T>;
};

export type DataPaginate<T> = {
  count: number;
  list: Array<T>;
};

export type BridgeErrorType =
  | "VALIDATION_ERROR"
  | "NOT_FOUND_ERROR"
  | "NO_CONTENT"
  | "UNKNOWN_ERROR";
