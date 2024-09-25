import { ComponentPropsWithoutRef } from "react";

import { Table } from "@mantine/core";

export type CustomTableProps = {
  headerTitles: { title: string | JSX.Element }[];
  isLoading?: boolean;
  tableData: JSX.Element[];
} & ComponentPropsWithoutRef<typeof Table>;
