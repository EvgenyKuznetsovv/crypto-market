import { FC } from "react";

import { createTheme, MantineProvider, Modal } from "@mantine/core";

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
  },
});

const ThemeProvider: FC<IProviders> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export default ThemeProvider;
