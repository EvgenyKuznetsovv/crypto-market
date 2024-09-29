import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";

import { UserPortfolioModal } from "../../../features";
import { useGetAssetsQuery } from "../../../shared/api";
import { formatPrice } from "../../../shared/lib";
import { coinsIds, usePortfolioValues } from "../lib";

import s from "./Header.module.css";

export const Header = () => {
  const ids = coinsIds.join();
  const [opened, { open, close }] = useDisclosure(false);

  const { data: { data: assets = [] } = {} } = useGetAssetsQuery(
    { ids },
    { pollingInterval: 10000 }
  );

  const {
    formattedCurrentTotalPrice,
    formattedDifference,
    percentageChange,
    sign,
    isLoading,
    portfolioAssests,
  } = usePortfolioValues();

  return (
    <div className={s.header}>
      <div className={s.logoWrap}>
        <img alt={"market-coin"} className={s.logo} src={"/bitcoin256.png"}></img>
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
      {!isLoading && (
        <button id={"stockPortfolio"} onClick={open}>
          <div className={s.stockPortfolio}>
            <p>
              {formattedCurrentTotalPrice}$
              <span className={clsx(sign === "+" ? s.green : s.red)}>
                {` ${sign}${formattedDifference}$ ( ${sign}${percentageChange}% )`}
              </span>
            </p>
          </div>
        </button>
      )}
      <UserPortfolioModal apiData={portfolioAssests} onClose={close} opened={opened} />
    </div>
  );
};
