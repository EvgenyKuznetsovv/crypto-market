export const coinsTableClickHandler = (
  event: React.MouseEvent<HTMLTableElement>,
  setCoinId: React.Dispatch<React.SetStateAction<string>>,
  open: () => void
) => {
  const target = event.target as HTMLElement;

  if (target.tagName.toLowerCase() === "button") {
    const trId = target.closest("tr")?.getAttribute("id");

    setCoinId(trId ?? "");
    open();
  }
};
