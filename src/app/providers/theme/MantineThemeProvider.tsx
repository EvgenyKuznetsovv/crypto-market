import { FC } from "react";

import { ActionIcon, createTheme, MantineProvider, Modal, Pagination } from "@mantine/core";

import { IProviders } from "../types";

import s from "./MantineTheme.module.css";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  components: {
    Modal: Modal.extend({
      defaultProps: { variant: "filled", radius: "md" },
      classNames: {
        header: s.modalHeader,
        close: s.closeBtn,
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        color: "#3e7e96",
        variant: "light",
      },
    }),
    Pagination: Pagination.extend({
      defaultProps: {
        color: "#3e7e96",
        size: "lg",
        radius: "md",
        autoContrast: true,
      },
      classNames: {
        root: s.paginationRoot,
      }
    })
  },
});

const ThemeProvider: FC<IProviders> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProvider;
