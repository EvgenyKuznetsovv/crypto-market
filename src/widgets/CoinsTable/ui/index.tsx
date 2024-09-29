import { useState } from "react";

import { Pagination } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { CoinShopModal } from "../../../features";
import { CustomTable, Loader, SearchInput } from "../../../shared/ui";
import { coinsTableClickHandler, useCoinsTableData } from "../lib";

import s from "./CoinsTable.module.css";

export const CoinsTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [searchCoinName, setSearchCoinName] = useState("");
  const [coinId, setCoinId] = useState("");
  const [activePage, setPage] = useState(1);
  const { isLoading, tableData, titles } = useCoinsTableData({
    searchCoinName,
    activePage,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCoinName(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isPaginationVisible = !(tableData.length < 100);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchInput
            onChange={handleSearchChange}
            placeholder={"Search by coin name"}
            value={searchCoinName}
          />

          <CustomTable
            className={s.table}
            headerTitles={titles}
            isLoading={isLoading}
            onClick={(event) => coinsTableClickHandler(event, setCoinId, open)}
            tableData={tableData}
            stickyHeader
          />

          <CoinShopModal coinId={coinId} onClose={close} opened={opened} />

          {isPaginationVisible && (
            <div className={s.paginationWrap}>
              <Pagination
                id={"pagination"}
                onChange={handlePageChange}
                total={7}
                value={activePage}
                withControls={false}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
