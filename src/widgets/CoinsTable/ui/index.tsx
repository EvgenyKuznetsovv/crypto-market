// import { Loader } from "@mantine/core";

import { useState } from "react";

import { Pagination } from "@mantine/core";

import { CustomTable, Loader, SearchInput } from "../../../shared/ui";
import { coinsTableClickHandler, useCoinsTableData } from "../lib";

import s from "./CoinsTable.module.css";

export const CoinsTable = () => {
  // const [opened, { open, close }] = useDisclosure(false);
  const [searchCoinName, setSearchCoinName] = useState("");
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
  // const content = Array(100)
  //   .fill(0)
  //   .map((_, index) => <p key={index}>Modal with scroll</p>);
  // console.log(searchCoinName);

  return (
    <>
      {/* <CustomModal onClose={close} opened={opened} scrollAreaComponent={ScrollAreaAutosize} title={"Модалка"}>
        <h1 className={"text-3xl font-bold underline"}>Hello world!</h1>
        {content}
      </CustomModal>
      <Button onClick={open}>Open modal</Button> */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchInput
            onChange={handleSearchChange}
            placeholder={"Поиск по названию монеты"}
            value={searchCoinName}
          />

          <CustomTable
            className={s.table}
            headerTitles={titles}
            isLoading={isLoading}
            onClick={coinsTableClickHandler}
            tableData={tableData}
            stickyHeader
          />
          {isPaginationVisible && (
            <div className={s.paginationWrap}>
              <Pagination
                onChange={handlePageChange}
                total={7}
                value={activePage}
                withControls={false}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};
