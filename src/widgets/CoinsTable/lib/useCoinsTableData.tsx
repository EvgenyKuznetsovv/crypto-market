import { Table } from "@mantine/core";

import { CoinTableRow } from "../../../features";
import { useGetAssetsQuery } from "../../../shared/api";
import { roundNumber } from "../../../shared/lib";

import { coinsTableTitles } from "./constants";

// import { roundNumber } from "";

export const useCoinsTableData = () => {
  const {
    data: { data: assets = [] } = {},
    error: assetsError,
    isLoading,
  } = useGetAssetsQuery({}, { pollingInterval: 10000 });

  console.log(assets[0]?.symbol, assets[0]?.priceUsd);

  const tableData = (assets ?? []).map(
    ({ id, changePercent24Hr, marketCapUsd, priceUsd, symbol }) => {
      const roundedPriceUsd = roundNumber(priceUsd);
      const roundedChangePercent24Hr = roundNumber(changePercent24Hr);
      const roundedMarketCapUsd = roundNumber(marketCapUsd);

      return (
        <CoinTableRow
          key={id}
          changePercent24Hr={roundedChangePercent24Hr}
          id={id}
          marketCapUsd={roundedMarketCapUsd}
          priceUsd={roundedPriceUsd}
          symbol={symbol}
        />
      );
    }
  );

  const titles = coinsTableTitles.map(({ title }) => {
    const tableTitles = <Table.Th key={title}>{title}</Table.Th>;

    return {
      title: tableTitles,
    };
  });

  return { tableData, titles, isLoading };
};
