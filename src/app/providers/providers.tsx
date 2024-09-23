import { FC } from "react";

import ThemeProvider from "./theme/MantineThemeProvider";
import { IProviders } from "./types";

export const Providers: FC<IProviders> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
