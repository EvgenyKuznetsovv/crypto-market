import { Header } from "../widgets";

import { Providers } from "./providers";
import AppRouter from "./routes";

const App = () => {
  return (
    <Providers>
      <>
        <Header />
        <AppRouter />
      </>
    </Providers>
  );
};

export default App;
