import { useEffect, useState } from "react";

import { ActionIcon, ScrollAreaAutosize } from "@mantine/core";

import { DeleteIcon } from "../../../shared/assets";
import { formatPrice, getPortfolio } from "../../../shared/lib";
import { CoinPurchase } from "../../../shared/types";
import { CustomModal } from "../../../shared/ui";
import { calcTotalCoinPrice } from "../lib/calcTotalCoinPrice";

import { UserPortfolioModalProps } from "./types";
import s from "./UserPorfolioModal.module.css";

export const UserPortfolioModal = ({
  apiData,
  onClose,
  opened,
  refetchPortfolioAssets,
}: UserPortfolioModalProps) => {
  const [portfolio, setPortfolio] = useState<[string, CoinPurchase[]][]>([]);

  useEffect(() => {
    setPortfolio(Object.entries(getPortfolio()));
  }, [apiData]);

  const removeCoinFromStorage = (id: string) => {
    const oldPortfolio = getPortfolio();

    delete oldPortfolio[id];
    localStorage.setItem("portfolio", JSON.stringify(oldPortfolio));
    setPortfolio(Object.entries(getPortfolio()));
    refetchPortfolioAssets();
  };

  return (
    <CustomModal
      onClose={onClose}
      opened={opened}
      scrollAreaComponent={ScrollAreaAutosize}
      size={"400px"}
      title={"Stock portfolio"}>
      <div className={s.wrap} id={"userPorfolioModal"}>
        {portfolio.length === 0 && (
          <h1
            className={
              "text-1xl font-bold text-center flex justify-center items-center h-[50px]"
            }>
            Your stock portfolio is empty
          </h1>
        )}
        {portfolio.map(([id, coins]) => {
          const { coinData, totalPriceByCoin } = calcTotalCoinPrice(coins, apiData, id);

          return (
            <div key={id} className={s.row}>
              <div key={`${id} name`} className={s.coin}>
                <strong>{coinData?.name}</strong>:{" "}
                {formatPrice(totalPriceByCoin.toString())}$
              </div>

              <div key={`${id} but`} className={s.button}>
                <ActionIcon name={"deleteIcon"} onClick={() => removeCoinFromStorage(id)}>
                  <DeleteIcon />
                </ActionIcon>
              </div>
            </div>
          );
        })}
      </div>
    </CustomModal>
  );
};
