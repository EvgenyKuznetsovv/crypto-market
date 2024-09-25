import { AssetData } from "../../../shared/api/types";

export const coinsTableTitles: {
  title: string;
  property?: keyof AssetData;
  isSortable?: boolean;
}[] = [
  { title: "Coin", property: "symbol", isSortable: false },
  { title: "Price", property: "priceUsd", isSortable: true },
  { title: "Price change (24h)", property: "changePercent24Hr", isSortable: true },
  { title: "Market cap", property: "marketCapUsd", isSortable: true },
  { title: "Action" },
];
