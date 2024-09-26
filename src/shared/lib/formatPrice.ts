export const formatPrice = (rawPrice: string) => {
  try {
    const price = +rawPrice;

    if (price >= 1000000000) {
      return `${(price / 1000000000).toFixed(2)}b`;
    }
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(2)}m`;
    }
    if (price >= 1000) {
      return `${(price / 1000).toFixed(2)}k`;
    }
    if (+price.toFixed(2) === 0) {
      return "0";
    }

    return price.toFixed(2);
  } catch (error) {
    return "0";
  }
};
