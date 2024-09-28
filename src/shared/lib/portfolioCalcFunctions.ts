import { AssetData } from "../api/types";
import { Portfolio } from "../types";

export const calcTotalPortfolioPrice = (portfolio: Portfolio): number => {
  let totalPrice = 0;

  Object.values(portfolio).forEach((coins) => {
    coins.forEach((coin) => {
      totalPrice += coin.num * coin.price;
    });
  });

  return totalPrice;
};

export const getPortfolio = () => {
  const existingData = localStorage.getItem("portfolio");
  const portfolio: Portfolio = existingData ? JSON.parse(existingData) : {};

  return portfolio;
};

export const getPortfolioAssestsIds = (portfolio: Portfolio) => {
  return Object.keys(portfolio).join();
};

export const calcCurrentTotalPrice = (
  portfolio: Portfolio,
  apiData: AssetData[]
): number => {
  let currentTotalPrice = 0;

  Object.entries(portfolio).forEach(([coinId, coins]) => {
    const coinData = apiData.find((coin) => coin.id === coinId);

    if (coinData) {
      const totalNum = coins.reduce((sum, coin) => sum + coin.num, 0);

      currentTotalPrice += totalNum * +coinData.priceUsd;
    }
  });

  return currentTotalPrice;
};
