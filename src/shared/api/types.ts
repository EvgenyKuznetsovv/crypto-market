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
  time: number;
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
}

export interface GetAssetHistoryParams {
  id: string;
  interval: "d1" | "h12" | "h1";
  start?: number;
  end?: number;
}
