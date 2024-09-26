import { SortType } from "../../features/Sortable/types";

export const sortDataArray = <T>(assets: T[], { order, type }: SortType<T>): T[] => {
  if (order === null || type === null) {
    return assets;
  }

  return assets.slice().sort((a, b) => {
    const fieldA = a[type];
    const fieldB = b[type];

    const valueA = typeof fieldA === "string" ? parseFloat(fieldA) || fieldA : fieldA;
    const valueB = typeof fieldB === "string" ? parseFloat(fieldB) || fieldB : fieldB;

    if (valueA < valueB) {
      return order === "asc" ? -1 : 1;
    }
    if (valueA > valueB) {
      return order === "asc" ? 1 : -1;
    }

    return 0;
  });
};
