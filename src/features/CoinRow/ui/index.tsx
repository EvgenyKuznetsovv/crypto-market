import { Table } from "@mantine/core";
import clsx from "clsx";

import { getCoinLogoUrl } from "../../../shared/lib/getCoinLogoUrl";

import s from "./CoinTableRow.module.css";
import { CoinTableRowProps } from "./types";

export const CoinTableRow = ({
  id,
  symbol,
  priceUsd,
  marketCapUsd,
  changePercent24Hr,
}: CoinTableRowProps) => {
  const isPriceDropped = changePercent24Hr < 0;

  return (
    <Table.Tr id={id}>
      <Table.Td>
        <div className={s.symbolContainer}>
          <img
            alt={`${symbol} Icon`}
            height={"40px"}
            src={getCoinLogoUrl(symbol)}
            width={"40px"}
          />
          <p>{symbol}</p>
        </div>
      </Table.Td>
      <Table.Td>{priceUsd}</Table.Td>
      <Table.Td
        className={clsx(s.priceChange, isPriceDropped ? s.priceDrop : s.priceIncrease)}>
        {changePercent24Hr}
      </Table.Td>
      <Table.Td>{marketCapUsd}</Table.Td>
      <Table.Td>
        <button>Add</button>
      </Table.Td>
    </Table.Tr>
  );
};
