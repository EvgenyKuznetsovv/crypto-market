import { useState } from "react";

import { Table } from "@mantine/core";

import { CoinTableRow, Sortable } from "../../../features";
import { SortType } from "../../../features/Sortable/types";
import { useGetAssetsQuery } from "../../../shared/api";
import { AssetData } from "../../../shared/api/types";
import { arrayToChunks, formatPrice, sortDataArray } from "../../../shared/lib";

import { coinsTableTitles, numOfchunks } from "./constants";

export const useCoinsTableData = ({
  searchCoinName,
  activePage,
}: {
  searchCoinName: string;
  activePage: number;
}) => {
  const getOffset = (page: number, numberOfChunks: number) => {
    return (Math.ceil(page / numberOfChunks) - 1) * 100;
  };
  const offset = getOffset(activePage, numOfchunks);

  const {
    data: { data: assets = [] } = {},
    error,
    isLoading,
  } = useGetAssetsQuery({ search: searchCoinName, offset }, { pollingInterval: 30000 });

  const chunkAssets = arrayToChunks<AssetData>(assets, 100 / numOfchunks)[
    (activePage - 1) % numOfchunks
  ];

  const [sort, setSort] = useState<SortType<AssetData>>({
    type: null,
    order: null,
  });

  const sortedAssets = sortDataArray<AssetData>(chunkAssets, sort);

  const tableData = (sortedAssets ?? []).map(
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
          <Sortable<AssetData>
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
