export const getCoinLogoUrl = (coinSymbol: string): string => {
  return `https://assets.coincap.io/assets/icons/${coinSymbol.toLowerCase()}@2x.png`;
};
