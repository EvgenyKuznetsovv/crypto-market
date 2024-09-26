import clsx from "clsx";

import s from "./CustomButton.module.css";
import { CustomButtonProps } from "./types";

export const CustomButton = ({ label, className, ...restProps }: CustomButtonProps) => {
  return (
    <button className={clsx(s.button, className)} {...restProps}>
      {label}
    </button>
  );
};
