export const roundNumber = (num: string) => {
  try {
    return +(+num).toFixed(2);
  } catch (error) {
    return 0;
  }
};
