import clsx from "clsx";

import s from "./SearchInput.module.css";
import { SearchInputProps } from "./types";

export const SearchInput = ({
  value,
  onChange,
  className,
  ...restProps
}: SearchInputProps) => {
  return (
    <input
      className={clsx(s.searchInput, className)}
      onChange={onChange}
      type={"search"}
      value={value}
      {...restProps}
    />
  );
};
