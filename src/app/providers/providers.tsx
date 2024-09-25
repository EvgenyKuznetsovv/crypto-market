import { FC } from "react";

import { Provider } from "react-redux";

import { store } from "../../shared/api";

import ThemeProvider from "./theme/MantineThemeProvider";
import { IProviders } from "./types";

export const Providers: FC<IProviders> = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider>{children}</ThemeProvider>
  </Provider>
);
