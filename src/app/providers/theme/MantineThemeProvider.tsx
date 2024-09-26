import { FC } from "react";

import { ActionIcon, createTheme, MantineProvider, Modal } from "@mantine/core";

import { IProviders } from "../types";

import s from "./MantineTheme.module.css";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
  components: {
    Modal: Modal.extend({
      defaultProps: { variant: "filled", radius: "md" },
      classNames: {
        header: s.modalHeader,
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        color: "#3e7e96",
        variant: "light",
      },
    }),
  },
});

const ThemeProvider: FC<IProviders> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProvider;
