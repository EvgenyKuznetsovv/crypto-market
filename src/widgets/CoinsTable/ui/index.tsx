// import { Loader } from "@mantine/core";

import { useState } from "react";

import { CustomTable, Loader, SearchInput } from "../../../shared/ui";
import { useCoinsTableData } from "../lib/useCoinsTableData";

import s from "./CoinsTable.module.css";

export const CoinsTable = () => {
  // const [opened, { open, close }] = useDisclosure(false);
  const [searchCoinName, setSearchCoinName] = useState("");
  const { isLoading, tableData, titles } = useCoinsTableData({ searchCoinName, });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCoinName(e.target.value);
  };

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
          <div className={s.searchWrap}>
            <SearchInput
              onChange={handleSearchChange}
              placeholder={"Поиск по названию монеты"}
              value={searchCoinName}
            />
          </div>

          <CustomTable
            className={s.table}
            headerTitles={titles}
            isLoading={isLoading}
            tableData={tableData}
            stickyHeader
          />
        </>
      )}
      {/* <Pagination total={10}/> */}
    </>
  );
};
