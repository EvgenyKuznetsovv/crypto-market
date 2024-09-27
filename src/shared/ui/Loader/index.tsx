import clsx from "clsx";

import s from "./Loader.module.css";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(s.loaderWpap, className)}>
      <img alt={"Loading..."} className={s.loader} src={"/bitcoin256.png"}></img>
    </div>
  );
};
