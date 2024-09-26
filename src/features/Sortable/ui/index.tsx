import { ActionIcon } from "@mantine/core";

import { getIcon } from "../lib/getIcon";
import { SortableProps } from "../types";

import s from "./Sortable.module.css";

export const Sortable = <T,>({ type, setSort, sort, iconType, children }: SortableProps<T>) => {
  const handleClick = () => {
    if (sort.type !== type) {
      return setSort({ type, order: "desc" });
    }

    return setSort({
      type,
      order: sort.order === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div className={s.wrapper}>
      {children}
      <ActionIcon onClick={handleClick}>{getIcon(iconType)}</ActionIcon>
    </div>
  );
};
