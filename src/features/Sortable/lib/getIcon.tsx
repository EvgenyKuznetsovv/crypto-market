import { SortDownIcon, SortIcon, SortUpIcon } from "../../../shared/assets";

export const getIcon = (type: "asc" | "desc" | "none") => {
  switch (type) {
    case "asc":
      return <SortUpIcon />;
    case "desc":
      return <SortDownIcon />;
    default:
      return <SortIcon />;
  }
};
