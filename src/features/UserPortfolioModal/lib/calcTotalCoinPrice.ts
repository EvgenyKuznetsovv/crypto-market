import { AssetData } from "../../../shared/api/types";
import { CoinPurchase } from "../../../shared/types";

export const calcTotalCoinPrice = (
  coins: CoinPurchase[],
  apiData: AssetData[],
  coinId: string
) => {
  let totalPriceByCoin = 0;
  const coinData = apiData.find((coin) => coin.id === coinId);

  if (coinData) {
    const totalNum = coins.reduce((sum, coin) => sum + coin.num, 0);

    totalPriceByCoin = totalNum * +coinData.priceUsd;
  }

  return { coinData, totalPriceByCoin };
};
