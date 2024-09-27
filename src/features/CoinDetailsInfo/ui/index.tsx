import { NavLink } from "react-router-dom";

import { AssetData, IntervalType } from "../../../shared/api/types";
import { formatPrice } from "../../../shared/lib";
import { CustomButton } from "../../../shared/ui";
import { intervals } from "../lib/constants";

import s from "./CoinDetailsInfo.module.css";

export const CoinDetailsInfo = ({
  asset,
  setInteval,
}: {
  asset: AssetData | undefined;
  setInteval: React.Dispatch<React.SetStateAction<IntervalType>>;
}) => {
  function selectHandler(event: React.ChangeEvent<HTMLSelectElement>) {
    const interval = event.target.value as IntervalType;

    setInteval(interval);
  }

  return (
    <div className={s.container}>
      <div className={s.detailsRow}>
        <strong>Rank:</strong> <span>{asset?.rank}</span>
      </div>
      <div className={s.detailsRow}>
        <strong>Supply:</strong> <span>{formatPrice(asset?.supply ?? "0")}</span>
      </div>
      <div className={s.detailsRow}>
        <strong>Price:</strong> <span>{formatPrice(asset?.priceUsd ?? "0")} $</span>
      </div>
      <div className={s.detailsRow}>
        <strong>Market cap:</strong>{" "}
        <span>{formatPrice(asset?.marketCapUsd ?? "0")} $</span>
      </div>
      {asset?.maxSupply && (
        <div className={s.detailsRow}>
          <strong>Max Supply:</strong> <span>{formatPrice(asset?.maxSupply ?? "0")}</span>
        </div>
      )}
      <form>
        <select className={s.selectCoin} onChange={selectHandler}>
          {intervals.map(([title, value]) => (
            <option key={title} value={value}>
              {title}
            </option>
          ))}
        </select>
      </form>
      <div className={s.buttonContainer}>
        <NavLink to={"/"}>
          <CustomButton label={"Home"} />
        </NavLink>
        <CustomButton label={"Add"} />
      </div>
    </div>
  );
};
