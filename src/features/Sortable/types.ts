import { Dispatch, ReactNode, SetStateAction } from "react";

export interface SortType<T> {
  type: keyof T | null;
  order: "asc" | "desc" | null;
}

export interface SortableProps<T> {
  type: keyof T | null;
  iconType: "asc" | "desc" | "none";
  sort: SortType<T>;
  setSort: Dispatch<SetStateAction<SortType<T>>>;
  children: ReactNode;
}
