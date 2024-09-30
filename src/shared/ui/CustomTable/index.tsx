import { isValidElement } from "react";

import { Table } from "@mantine/core";
import clsx from "clsx";

import s from "./CustomTable.module.css";
import { CustomTableProps } from "./types";

export const CustomTable = ({
  headerTitles,
  tableData,
  className,
  isLoading,
  ...restProps
}: CustomTableProps) => {
  const header = headerTitles.map((item) => {
    if (isValidElement(item.title)) {
      return item.title;
    }
    if (typeof item.title === "string") {
      return <Table.Th key={item.title}>{item.title}</Table.Th>;
    }

    return null;
  });

  if (tableData.length === 0 && !isLoading) {
    return <div className={s.emptyField}>No data available</div>;
  }

  return (
    <Table
      className={clsx(s.table, className)}
      horizontalSpacing={"lg"}
      pos={"relative"}
      verticalSpacing={"sm"}
      withColumnBorders
      {...restProps}>
      <Table.Thead>
        <Table.Tr>{header}</Table.Tr>
      </Table.Thead>
      <Table.Tbody>{tableData}</Table.Tbody>
    </Table>
  );
};
