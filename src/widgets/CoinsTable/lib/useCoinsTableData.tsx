import { useState } from "react";

import { Table } from "@mantine/core";

import { CoinTableRow, Sortable } from "../../../features";
import { SortType } from "../../../features/Sortable/types";
import { useGetAssetsQuery } from "../../../shared/api";
import { AssetData } from "../../../shared/api/types";
import { formatPrice } from "../../../shared/lib";

import { coinsTableTitles } from "./constants";

export const useCoinsTableData = () => {
  const {
    data: { data: assets = [] } = {},
    error,
    isLoading,
  } = useGetAssetsQuery({}, { pollingInterval: 10000 });

  const [sort, setSort] = useState<SortType<keyof AssetData>>({
    type: null,
    order: null,
  });

  // console.log(assets[0]?.symbol, assets[0]?.priceUsd);
  console.log(sort);

  const tableData = (assets ?? []).map(
    ({ id, changePercent24Hr, marketCapUsd, priceUsd, symbol }) => {
      const isPriceDropped = +changePercent24Hr < 0;
      const formatChange24Hr = formatPrice(changePercent24Hr);
      const formatMarketCap = formatPrice(marketCapUsd);
      const formatPriceUsd = formatPrice(priceUsd);

      if (formatMarketCap === "0" || formatPriceUsd === "0") {
        return <tr key={id}></tr>;
      }

      return (
        <CoinTableRow
          key={id}
          changePercent24Hr={formatChange24Hr}
          id={id}
          isPriceDropped={isPriceDropped}
          marketCapUsd={formatMarketCap}
          priceUsd={formatPriceUsd}
          symbol={symbol}
        />
      );
    }
  );

  const titles = coinsTableTitles.map(({ title, isSortable, property = null }) => {
    const tableTitles = <Table.Th key={title}>{title}</Table.Th>;

    return {
      title: isSortable ? (
        <Table.Th key={title}>
          <Sortable<keyof AssetData>
            iconType={
              property === sort.type ? (sort.order === "asc" ? "asc" : "desc") : "none"
            }
            setSort={setSort}
            sort={sort}
            type={property}>
            {title}
          </Sortable>
        </Table.Th>
      ) : (
        tableTitles
      ),
    };
  });

  return { tableData, titles, isLoading, error };
};
