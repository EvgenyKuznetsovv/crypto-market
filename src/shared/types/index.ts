export interface CoinPurchase {
  num: number;
  price: number;
}

export type Portfolio = Record<string, CoinPurchase[]>;
