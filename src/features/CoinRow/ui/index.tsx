import { Table } from "@mantine/core";
import clsx from "clsx";

import { getCoinLogoUrl } from "../../../shared/lib";
import { CustomButton } from "../../../shared/ui";

import s from "./CoinTableRow.module.css";
import { CoinTableRowProps } from "./types";

export const CoinTableRow = ({
  id,
  symbol,
  priceUsd,
  marketCapUsd,
  changePercent24Hr,
  isPriceDropped,
}: CoinTableRowProps) => {
  return (
    <Table.Tr id={id}>
      <Table.Td className={s.symbolRow}>
        <div className={s.symbolContainer}>
          <img
            alt={`${symbol} Icon`}
            height={"40px"}
            onError={(e) => {
              e.currentTarget.src = getCoinLogoUrl("btc");
            }}
            src={getCoinLogoUrl(symbol)}
            width={"40px"}
          />

          <p>{symbol}</p>
        </div>
      </Table.Td>
      <Table.Td>{`${priceUsd} $`}</Table.Td>
      <Table.Td
        className={clsx(s.priceChange, isPriceDropped ? s.priceDrop : s.priceIncrease)}>
        {`${changePercent24Hr} %`}
      </Table.Td>
      <Table.Td>{`${marketCapUsd} $`}</Table.Td>
      <Table.Td>
        <CustomButton label={"Add"} />
      </Table.Td>
    </Table.Tr>
  );
};
