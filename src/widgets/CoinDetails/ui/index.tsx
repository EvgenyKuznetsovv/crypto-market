import { useState } from "react";

import { CoinDetailsHeader, CoinDetailsInfo, LinerChart } from "../../../features";
import { intervals } from "../../../features/CoinDetailsInfo/lib/constants";
import { useGetAssetByIdQuery, useGetAssetHistoryQuery } from "../../../shared/api";
import { Loader } from "../../../shared/ui";
import { createChartData } from "../lib/createChartData";

import s from "./CoinDetails.module.css";

export const CoinDetails = ({ id }: { id: string }) => {
  const defaultInterval = intervals[0][1];
  const [interval, setInteval] = useState(defaultInterval);
  const {
    data: { data: history = [] } = {},
    error: historyError,
    isLoading: historyLoading,
    isFetching,
  } = useGetAssetHistoryQuery({
    id,
    interval,
  });

  const {
    data: { data: asset } = {},
    error: assetError,
    isLoading: assetLoading,
  } = useGetAssetByIdQuery(id, { pollingInterval: 10000 });

  if (historyError || assetError) {
    return (
      <h1
        className={
          "text-red-500 text-6xl text-center h-screen flex items-center justify-center"
        }>
        Invalid ID
      </h1>
    );
  }

  return historyLoading || assetLoading ? (
    <Loader />
  ) : (
    <>
      {isFetching && (
        <>
          <div className={s.backdrop}></div>
          <Loader className={s.loader} />
        </>
      )}
      <CoinDetailsHeader name={asset?.name ?? ""} symbol={asset?.symbol ?? ""} />
      <div className={s.container}>
        <div className={s.coinDetailsInfo}>
          <CoinDetailsInfo asset={asset} setInteval={setInteval} />
        </div>
        <div className={s.linerChart}>
          <LinerChart chartData={createChartData(history)} />
        </div>
      </div>
    </>
  );
};
