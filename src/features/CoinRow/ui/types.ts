export interface CoinTableRowProps {
  id: string;
  symbol: string;
  priceUsd: string;
  marketCapUsd: string;
  changePercent24Hr: string;
  isPriceDropped: boolean;
}
