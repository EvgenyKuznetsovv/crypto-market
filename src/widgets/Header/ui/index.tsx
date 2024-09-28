import { useGetAssetsQuery } from "../../../shared/api";
import { formatPrice } from "../../../shared/lib";
import { coinsIds } from "../lib/constants";

import s from "./Header.module.css";

export const Header = () => {
  const ids = coinsIds.join();

  const {
    data: { data: assets = [] } = {},
    error: assetsError,
    isLoading: assetsLoading,
  } = useGetAssetsQuery({ ids }, { pollingInterval: 10000 });

  console.log(assets);

  return (
    <div className={s.header}>
      <div className={s.logoWrap}>
        <img alt={"Loading..."} className={s.logo} src={"/bitcoin256.png"}></img>
        <strong>CRYPTO MARKET</strong>
      </div>

      <div className={s.priceWrap}>
        {assets.map(({ name, priceUsd }) => (
          <div key={name}>
            <strong>{name}: </strong>
            {`${formatPrice(priceUsd)}$`}
          </div>
        ))}
      </div>

      <div className={s.stockPortfolio}>134,32 USD +2,38 (1,80 %).</div>
    </div>
  );
};
