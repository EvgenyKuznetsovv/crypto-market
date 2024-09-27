export const coinsTableClickHandler = (event: React.MouseEvent<HTMLTableElement>) => {
  const target = event.target as HTMLElement;
  const trId = target.closest("tr")?.getAttribute("id");

  console.log(trId);
};
