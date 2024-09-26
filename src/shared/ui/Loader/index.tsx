import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loaderWpap}>
      <img alt={"Loading..."} className={s.loader} src={"/bitcoin256.png"}></img>
    </div>
  );
};
