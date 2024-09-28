export interface AssetData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer?: string;
}

export interface AssetHistoryData {
  priceUsd: string;
  date: string;
}

export interface Assets {
  data: AssetData[];
  timestamp: number;
}

export interface Asset {
  data: AssetData;
  timestamp: number;
}

export interface AssetHistory {
  data: AssetHistoryData[];
  timestamp: number;
}

export interface GetAssetsParams {
  limit?: number;
  offset?: number;
  search?: string;
  ids?: string;
}

export type IntervalType = "h1" | "h12" | "d1";

export interface GetAssetHistoryParams {
  id: string;
  interval: IntervalType;
  start?: number;
  end?: number;
}
