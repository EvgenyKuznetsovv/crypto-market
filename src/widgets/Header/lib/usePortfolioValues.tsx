import { useGetAssetsQuery } from "../../../shared/api";
import {
  calcCurrentTotalPrice,
  calcTotalPortfolioPrice,
  formatPrice,
  getPortfolio,
  getPortfolioAssestsIds,
} from "../../../shared/lib";

export const usePortfolioValues = () => {
  const portfolio = getPortfolio();
  const portfolioAssestsIds = getPortfolioAssestsIds(portfolio);

  const { data: { data: portfolioAssests = [] } = {}, isLoading } = useGetAssetsQuery(
    { ids: portfolioAssestsIds },
    { pollingInterval: 3000 }
  );

  const currentTotalPrice = calcCurrentTotalPrice(portfolio, portfolioAssests);
  const totalPortfolioPrice = calcTotalPortfolioPrice(portfolio);

  const difference = currentTotalPrice - totalPortfolioPrice;

  let percentageChange = "0";

  if (totalPortfolioPrice) {
    percentageChange = ((difference / totalPortfolioPrice) * 100).toFixed(2);
  } 

  const formattedCurrentTotalPrice = formatPrice(currentTotalPrice.toString());
  const formattedDifference = formatPrice(difference.toString());

  const sign = difference >= 0 ? "+" : "";

  return {
    formattedCurrentTotalPrice,
    formattedDifference,
    percentageChange,
    sign,
    isLoading,
    portfolioAssests,
  };
};
