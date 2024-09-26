// import { Loader } from "@mantine/core";

import { CustomTable, Loader } from "../../../shared/ui";
import { useCoinsTableData } from "../lib/useCoinsTableData";

import s from "./CoinsTable.module.css";

export const CoinsTable = () => {
  // const [opened, { open, close }] = useDisclosure(false);
  const { isLoading, tableData, titles } = useCoinsTableData();

  // const content = Array(100)
  //   .fill(0)
  //   .map((_, index) => <p key={index}>Modal with scroll</p>);

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
        <CustomTable
          className={s.table}
          headerTitles={titles}
          isLoading={isLoading}
          tableData={tableData}
          stickyHeader
        />
      )}
      {/* <Pagination total={10}/> */}
    </>
  );
};
