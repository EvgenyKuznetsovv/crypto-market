import { getCoinLogoUrl } from "../../../shared/lib";

import s from "./CoinDetailsHeader.module.css";

export const CoinDetailsHeader = ({ symbol, name }: { symbol: string; name: string }) => {
  return (
    <div className={s.headerWrap}>
      <img
        alt={`${symbol} Icon`}
        height={"70px"}
        onError={(e) => {
          e.currentTarget.src = getCoinLogoUrl("btc");
        }}
        src={getCoinLogoUrl(symbol)}
        width={"70px"}
      />
      <h1>{name}</h1>
      <h1 className={s.symbol}> {`( ${symbol} )`}</h1>
    </div>
  );
};
